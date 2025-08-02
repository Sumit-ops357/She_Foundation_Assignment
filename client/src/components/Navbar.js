import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '16px 0',
      marginBottom: '32px',
      boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
    }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <span style={{ fontSize: '1.2rem', color: 'white' }}>👥</span>
                </div>
                <h1 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  margin: 0,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  She Foundation
                </h1>
              </div>
            </Link>
            
            <div className="flex gap-4">
              <Link 
                to="/dashboard" 
                style={{
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  color: isActive('/dashboard') ? '#ff6b35' : 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: isActive('/dashboard') ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
                  fontWeight: isActive('/dashboard') ? '600' : '400',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  border: isActive('/dashboard') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Dashboard
              </Link>
              <Link 
                to="/leaderboard" 
                style={{
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  color: isActive('/leaderboard') ? '#ff6b35' : 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: isActive('/leaderboard') ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
                  fontWeight: isActive('/leaderboard') ? '600' : '400',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  border: isActive('/leaderboard') ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                Leaderboard
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div style={{ textAlign: 'right' }}>
              <p style={{ 
                fontSize: '0.875rem', 
                color: 'rgba(255, 255, 255, 0.8)', 
                margin: 0 
              }}>
                Welcome back,
              </p>
              <p style={{ 
                fontWeight: '600', 
                color: 'white', 
                margin: 0,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
                {user.name}
              </p>
            </div>
            <button
              onClick={onLogout}
              className="btn btn-secondary"
              style={{ 
                fontSize: '0.875rem',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 