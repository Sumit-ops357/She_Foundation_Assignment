import React, { useState, useEffect } from 'react';

const Dashboard = ({ user, token }) => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use the user data passed from login/signup instead of fetching from API
    setTimeout(() => {
      setInternData(user);
      setLoading(false);
    }, 500); // Small delay for realistic feel
  }, [user]);

  if (loading) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div className="loading-spinner" style={{ margin: '0 auto 20px' }}></div>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (!internData) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Error loading dashboard data.</p>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div style={{ padding: '20px 0' }}>
      {/* Hero Section */}
      <div className="card glass" style={{ 
        marginBottom: '32px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex items-center gap-6 mb-6">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '2rem', color: 'white' }}>
                {internData.name.charAt(0).toUpperCase()}
              </span>
            </div>
            
            <div>
              <h1 style={{ 
                fontSize: '3rem', 
                fontWeight: '800', 
                marginBottom: '8px',
                fontFamily: 'Poppins, sans-serif',
                color: 'white'
              }}>
                Welcome back, {internData.name}! 👋
              </h1>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '1.2rem',
                fontWeight: '400'
              }}>
                Track your fundraising progress and unlock amazing rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Total Raised */}
        <div className="card glass card-float" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #10b981, #059669)',
            transform: 'scaleX(1)'
          }}></div>
          
          <div className="flex items-center justify-between mb-6">
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '700', 
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Total Raised
            </h3>
            <div style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}>
              Active
            </div>
          </div>
          
          <div style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            color: '#10b981',
            marginBottom: '12px',
            textShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>
            {formatCurrency(internData.totalRaised)}
          </div>
          
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            Keep up the amazing work! 🚀
          </p>
        </div>

        {/* Referral Code */}
        <div className="card glass card-float" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #6366f1, #4f46e5)',
            transform: 'scaleX(1)'
          }}></div>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '20px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Your Referral Code
          </h3>
          
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '2px dashed rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '16px',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <code style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: '#fbbf24',
              letterSpacing: '3px',
              textShadow: '0 2px 8px rgba(251, 191, 36, 0.3)',
              fontFamily: 'monospace'
            }}>
              {internData.referralCode}
            </code>
          </div>
          
          <button
            onClick={() => {
              navigator.clipboard.writeText(internData.referralCode);
              alert('Referral code copied to clipboard!');
            }}
            className="btn btn-secondary glow"
            style={{ 
              width: '100%', 
              fontSize: '1rem',
              padding: '14px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            📋 Copy Code
          </button>
        </div>

        {/* Progress */}
        <div className="card glass card-float" style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #f59e0b, #d97706)',
            transform: 'scaleX(1)'
          }}></div>
          
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '20px',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Next Milestone
          </h3>
          
          <div style={{ marginBottom: '16px' }}>
            <div className="flex justify-between items-center mb-3">
              <span style={{ 
                fontSize: '1rem', 
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '500'
              }}>
                Progress to Gold Badge
              </span>
              <span style={{ 
                fontSize: '1.125rem', 
                fontWeight: '700', 
                color: '#fbbf24',
                textShadow: '0 2px 8px rgba(251, 191, 36, 0.3)'
              }}>
                {Math.round((internData.totalRaised / 15000) * 100)}%
              </span>
            </div>
            
            <div style={{
              width: '100%',
              height: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                width: `${Math.min((internData.totalRaised / 15000) * 100, 100)}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
              }}></div>
            </div>
          </div>
          
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            {formatCurrency(15000 - internData.totalRaised)} more to unlock Gold Badge 🏆
          </p>
        </div>
      </div>

      {/* Rewards Section */}
      <div className="card glass" style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        marginBottom: '32px'
      }}>
        <h2 style={{ 
          fontSize: '2rem', 
          fontWeight: '800', 
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '32px',
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center'
        }}>
          🏆 Rewards & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {internData.rewards.map((reward, index) => (
            <div
              key={reward.id}
              className="card-float"
              style={{
                border: reward.unlocked ? '2px solid #10b981' : '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                padding: '24px',
                textAlign: 'center',
                background: reward.unlocked 
                  ? 'rgba(16, 185, 129, 0.1)' 
                  : 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.2}s`
              }}
            >
              {reward.unlocked && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '-12px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                  animation: 'bounce 2s ease-in-out infinite'
                }}>
                  ✓
                </div>
              )}
              
              <div style={{
                fontSize: '3rem',
                marginBottom: '16px',
                filter: reward.unlocked ? 'none' : 'grayscale(100%) opacity(0.5)'
              }}>
                {reward.unlocked ? '🏅' : '🔒'}
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: reward.unlocked ? '#10b981' : 'rgba(255, 255, 255, 0.6)',
                marginBottom: '12px',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {reward.name}
              </h3>
              
              <p style={{
                fontSize: '1rem',
                color: reward.unlocked ? 'rgba(16, 185, 129, 0.8)' : 'rgba(255, 255, 255, 0.5)',
                marginBottom: '16px'
              }}>
                {reward.description}
              </p>
              
              {reward.unlocked && (
                <div style={{
                  padding: '8px 16px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}>
                  Unlocked
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card glass" style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: '24px',
          fontFamily: 'Poppins, sans-serif'
        }}>
          Quick Actions
        </h3>
        <div className="flex gap-6 flex-wrap">
          <button className="btn btn-primary glow">
            📤 Share Your Progress
          </button>
          <button className="btn btn-secondary glow">
            🏆 View Leaderboard
          </button>
          <button className="btn btn-success glow">
            📄 Download Certificate
          </button>
          <button className="btn btn-warning glow">
            📊 View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 