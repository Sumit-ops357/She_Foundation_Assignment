const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  unlocked: {
    type: Boolean,
    default: false
  }
});

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  referralCode: {
    type: String,
    required: true,
    unique: true
  },
  totalRaised: {
    type: Number,
    default: 0
  },
  rewards: [rewardSchema],
  profileImage: {
    type: String,
    default: ''
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Generate referral code before saving
internSchema.pre('save', function(next) {
  if (!this.referralCode) {
    this.referralCode = `${this.name.toLowerCase().replace(/\s+/g, '')}${Date.now().toString().slice(-4)}`;
  }
  next();
});

module.exports = mongoose.model('Intern', internSchema); 