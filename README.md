# She Foundation - Fundraising Intern Portal

A modern, beautiful fundraising intern dashboard built with React frontend and Node.js/Express backend with MongoDB integration. This portal features glass morphism design, smooth animations, and allows interns to track their fundraising progress, view their referral codes, unlock rewards, and compete on a leaderboard.

## 🚀 Features

### Frontend (React)
- **Glass Morphism Design** - Modern UI with backdrop blur effects and transparency
- **Smooth Animations** - Floating cards, pulse effects, and gradient animations
- **Beautiful Login/Signup Pages** - Animated backgrounds with gradient overlays
- **Interactive Dashboard** - Shows intern name, referral code, and total donations raised
- **Dynamic Rewards System** - Visual display of unlocked/locked achievements with animations
- **Progress Tracking** - Animated progress bars and milestone indicators
- **Leaderboard** - Real-time ranking with medal icons and hover effects
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **JWT Authentication** - Secure token-based authentication

### Backend (Node.js/Express + MongoDB)
- **MongoDB Integration** - Real database with Mongoose ODM
- **JWT Authentication** - Secure token-based authentication with bcrypt password hashing
- **RESTful API** - Clean endpoints for all functionality
- **Dynamic Data** - Real-time data updates and persistence
- **CORS Enabled** - Cross-origin requests supported
- **Production Ready** - Serves static files in production

## 📋 Requirements

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB Atlas account (or local MongoDB)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd SheFoundation
```

### 2. Install all dependencies
```bash
npm run install-all
```

This will install dependencies for:
- Root project (concurrently for running both servers)
- Backend server (Express, MongoDB, JWT, bcrypt, etc.)
- Frontend client (React, Axios, etc.)

### 3. MongoDB Setup
The application is configured to use MongoDB Atlas with the following connection string:
```
mongodb+srv://sumitrathod22724:HVJqT0cmZUsIgdXu@cluster0.1bhqcmt.mongodb.net/price-oracle
```

### 4. Start the development servers
```bash
npm run dev
```

This will start both:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

## 🎯 Demo Credentials

You can use these demo accounts to test the application:

| Email | Password | Total Raised | Referral Code |
|-------|----------|--------------|---------------|
| sarah.johnson@example.com | password123 | $12,500 | sarah2025 |
| michael.chen@example.com | password123 | $8,900 | michael2025 |
| emily.rodriguez@example.com | password123 | $18,200 | emily2025 |

## 📁 Project Structure

```
SheFoundation/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Login.js    # Glass morphism login
│   │   │   ├── Signup.js   # Enhanced signup
│   │   │   ├── Dashboard.js # Animated dashboard
│   │   │   ├── Leaderboard.js # Interactive leaderboard
│   │   │   └── Navbar.js   # Modern navigation
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css       # Enhanced styles with animations
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── models/
│   │   └── Intern.js      # Mongoose model
│   ├── index.js           # Express server with JWT
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/login` - User login with JWT token
- `POST /api/signup` - User registration with password hashing

### Data (Protected with JWT)
- `GET /api/interns` - Get all interns
- `GET /api/interns/:id` - Get specific intern data
- `PUT /api/interns/:id/total-raised` - Update total raised amount
- `GET /api/leaderboard` - Get sorted leaderboard

## 🎨 UI Features

### Glass Morphism Design
- **Backdrop Blur Effects** - Modern glass-like transparency
- **Gradient Overlays** - Beautiful color transitions
- **Floating Animations** - Smooth card movements
- **Glow Effects** - Interactive hover states

### Dashboard
- **Hero Section** - Personalized greeting with animated avatar
- **Stats Cards** - Glass morphism cards with gradient borders
- **Rewards Display** - Animated badges with unlock status
- **Progress Tracking** - Smooth animated progress bars
- **Quick Actions** - Glowing action buttons

### Leaderboard
- **Medal System** - Gold, silver, bronze medals for top 3
- **Statistics Cards** - Glass morphism stats display
- **Interactive Table** - Hover effects and smooth transitions
- **Achievement Highlights** - Gradient highlight cards

### Authentication
- **Animated Backgrounds** - Floating geometric shapes
- **Glass Forms** - Transparent form inputs with blur effects
- **Loading States** - Smooth loading animations
- **Error Handling** - Beautiful error displays

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Server
```bash
npm start
```

## 🛠️ Customization

### Adding New Interns
The system automatically creates new interns through the signup process, or you can add them directly to MongoDB:

```javascript
// Example intern document
{
  name: "New Intern",
  email: "new.intern@example.com",
  password: "hashedPassword",
  referralCode: "auto-generated",
  totalRaised: 0,
  rewards: [
    { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: false },
    { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
    { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
  ]
}
```

### Modifying Rewards
Update the rewards structure in the backend model:

```javascript
rewards: [
  { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: false },
  { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
  { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false },
  { id: 4, name: "Diamond Badge", description: "Raised $25,000+", unlocked: false }
]
```

## 🎯 Future Enhancements

- **Real-time Updates** - WebSocket integration for live data
- **Email Notifications** - Achievement unlocks, milestone alerts
- **Social Sharing** - Share progress on social media
- **Analytics Dashboard** - Detailed fundraising insights
- **Mobile App** - React Native version
- **Admin Panel** - Manage interns and view analytics
- **Payment Integration** - Direct donation processing
- **Gamification** - More rewards, challenges, and achievements

## 🔒 Security Features

- **JWT Authentication** - Secure token-based sessions
- **Password Hashing** - bcrypt for secure password storage
- **CORS Protection** - Cross-origin request security
- **Input Validation** - Server-side data validation
- **Error Handling** - Secure error responses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the She Foundation fundraising intern portal challenge.

## 👥 Team

Built with ❤️ for She Foundation's mission to empower women through technology and education.

---

**Note**: This application uses MongoDB Atlas for data persistence and includes real authentication. The design features modern glass morphism effects and smooth animations for an exceptional user experience. 