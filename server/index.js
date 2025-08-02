const express = require('express');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const Intern = require('./models/Intern');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret
const JWT_SECRET = 'she_foundation_super_secret_key_2025';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Initialize default data
const initializeDefaultData = async () => {
  try {
    const count = await Intern.countDocuments();
    if (count === 0) {
      const defaultRewards = [
        { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: false },
        { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
        { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
      ];

      const defaultInterns = [
        {
          name: "Sarah Johnson",
          email: "sarah.johnson@example.com",
          password: await bcrypt.hash("password123", 10),
          referralCode: "sarah2025",
          totalRaised: 12500,
          rewards: [
            { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: true },
            { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: true },
            { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
          ]
        },
        {
          name: "Michael Chen",
          email: "michael.chen@example.com",
          password: await bcrypt.hash("password123", 10),
          referralCode: "michael2025",
          totalRaised: 8900,
          rewards: [
            { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: true },
            { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
            { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
          ]
        },
        {
          name: "Emily Rodriguez",
          email: "emily.rodriguez@example.com",
          password: await bcrypt.hash("password123", 10),
          referralCode: "emily2025",
          totalRaised: 18200,
          rewards: [
            { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: true },
            { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: true },
            { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: true }
          ]
        }
      ];

      await Intern.insertMany(defaultInterns);
      console.log('Default data initialized');
    }
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};

// Initialize data on startup
initializeDefaultData();

// API Routes
app.get('/api/interns', authenticateToken, async (req, res) => {
  try {
    const interns = await Intern.find({ isActive: true }).select('-password');
    res.json(interns);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/interns/:id', authenticateToken, async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id).select('-password');
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.json(intern);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Intern.find({ isActive: true })
      .select('name totalRaised referralCode')
      .sort({ totalRaised: -1 });
    
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Enhanced login endpoint with JWT
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const intern = await Intern.findOne({ email, isActive: true });
    if (!intern) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const isPasswordValid = await bcrypt.compare(password, intern.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Update rewards based on total raised
    const updatedRewards = intern.rewards.map(reward => {
      let unlocked = false;
      switch (reward.id) {
        case 1: // Bronze
          unlocked = intern.totalRaised >= 5000;
          break;
        case 2: // Silver
          unlocked = intern.totalRaised >= 10000;
          break;
        case 3: // Gold
          unlocked = intern.totalRaised >= 15000;
          break;
      }
      return { ...reward.toObject(), unlocked };
    });

    if (JSON.stringify(updatedRewards) !== JSON.stringify(intern.rewards)) {
      intern.rewards = updatedRewards;
      await intern.save();
    }

    const token = jwt.sign(
      { id: intern._id, email: intern.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: intern._id,
        name: intern.name,
        email: intern.email,
        referralCode: intern.referralCode
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Enhanced signup endpoint
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const existingIntern = await Intern.findOne({ email });
    if (existingIntern) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new intern
    const newIntern = new Intern({
      name,
      email,
      password: hashedPassword,
      totalRaised: 0,
      rewards: [
        { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: false },
        { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
        { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
      ]
    });
    
    await newIntern.save();
    
    const token = jwt.sign(
      { id: newIntern._id, email: newIntern.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      token,
      user: {
        id: newIntern._id,
        name: newIntern.name,
        email: newIntern.email,
        referralCode: newIntern.referralCode
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Update total raised endpoint
app.put('/api/interns/:id/total-raised', authenticateToken, async (req, res) => {
  try {
    const { totalRaised } = req.body;
    const intern = await Intern.findById(req.params.id);
    
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    
    intern.totalRaised = totalRaised;
    
    // Update rewards based on new total
    intern.rewards = intern.rewards.map(reward => {
      let unlocked = false;
      switch (reward.id) {
        case 1: // Bronze
          unlocked = totalRaised >= 5000;
          break;
        case 2: // Silver
          unlocked = totalRaised >= 10000;
          break;
        case 3: // Gold
          unlocked = totalRaised >= 15000;
          break;
      }
      return { ...reward.toObject(), unlocked };
    });
    
    await intern.save();
    
    res.json({
      success: true,
      intern: {
        id: intern._id,
        name: intern.name,
        totalRaised: intern.totalRaised,
        rewards: intern.rewards
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`MongoDB connected successfully`);
}); 