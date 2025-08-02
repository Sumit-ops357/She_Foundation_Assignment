import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API delay
    setTimeout(() => {
      // Dummy authentication - accept any email/password
      if (formData.email && formData.password) {
        const dummyUser = {
          id: 1,
          name: formData.email.split('@')[0] || 'User',
          email: formData.email,
          totalRaised: Math.floor(Math.random() * 20000) + 1000,
          referralCode: 'demo2025',
          rewards: [
            { id: 1, name: "Bronze Badge", description: "Raised $5,000+", unlocked: true },
            { id: 2, name: "Silver Badge", description: "Raised $10,000+", unlocked: false },
            { id: 3, name: "Gold Badge", description: "Raised $15,000+", unlocked: false }
          ]
        };
        
        const dummyToken = 'dummy_jwt_token_' + Date.now();
        onLogin(dummyUser, dummyToken);
      } else {
        setError('Please enter both email and password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* New animated background elements */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite',
        zIndex: 0
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'absolute',
        top: '60%',
        left: '20%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
        borderRadius: '50%',
        animation: 'pulse 6s ease-in-out infinite',
        zIndex: 0
      }}></div>

      {/* Main content container */}
      <div style={{
        display: 'flex',
        maxWidth: '1400px',
        width: '100%',
        margin: '0 20px',
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left side - About section */}
        <div style={{
          flex: '1',
          color: 'white',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          {/* Logo and Title */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)',
              animation: 'pulse 2s ease-in-out infinite',
              overflow: 'hidden'
            }}>
              <img 
                src="/images/Image1.jpg" 
                alt="She Foundation Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
              />
            </div>
            
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '800', 
              marginBottom: '8px',
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              She Foundation
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '20px'
            }}>
              Women Empowerment
            </p>
          </div>

          {/* About Section */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '20px',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              About She Can Foundation
            </h2>
            <p style={{ 
              fontSize: '0.95rem', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'justify'
            }}>
              She Can Foundation is an NGO, registered under the Indian Society Registration Act of 1860, 
              dedicated to uplifting and empowering underprivileged women. Our mission is to provide education, 
              training, and resources to help women from marginalized communities overcome obstacles and achieve 
              their full potential.
            </p>
            <p style={{ 
              fontSize: '0.95rem', 
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.85)',
              textAlign: 'justify',
              marginTop: '15px'
            }}>
              We work to promote gender equality, increase access to healthcare and education, and provide 
              opportunities for economic growth and development. Through our programs and initiatives, we aim 
              to create a world where every woman has the resources and support she needs to succeed.
            </p>
          </div>

          {/* Image Gallery Section */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              fontWeight: '700', 
              marginBottom: '15px',
              color: 'rgba(255, 255, 255, 0.95)',
              textAlign: 'center'
            }}>
              Our Impact Stories
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {/* Animal Care Image */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/Image4.jpg" 
                    alt="Animal Care"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600',
                  margin: '0'
                }}>
                  Animal Care
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: '10px 0 0 0'
                }}>
                  Compassion for all beings
                </p>
              </div>

              {/* Charity Image */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/Image2.jpg" 
                    alt="Charity Work"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600',
                  margin: '0'
                }}>
                  Charity Work
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: '10px 0 0 0'
                }}>
                  Helping those in need
                </p>
              </div>

              {/* Community Outreach Image */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/Image3.jpg" 
                    alt="Community Outreach"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600',
                  margin: '0'
                }}>
                  Community Outreach
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: '10px 0 0 0'
                }}>
                  Supporting women & children
                </p>
              </div>

              {/* Education Support Image */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/Image5.jpg" 
                    alt="Education Support"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '600',
                  margin: '0'
                }}>
                  Education Support
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: '10px 0 0 0'
                }}>
                  Empowering through knowledge
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '1rem', 
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.95)',
              fontStyle: 'italic'
            }}>
              "Join us in our mission to empower women and help build a brighter future for all."
            </p>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="card glass" style={{ 
          flex: '1',
          maxWidth: '450px',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          background: 'rgba(255, 255, 255, 0.1)'
        }}>
          {/* Login form header */}
          <div className="text-center mb-8">
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(255, 107, 53, 0.3)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '2rem', color: 'white' }}>🔐</span>
            </div>
            
            <h1 className="gradient-text" style={{ 
              fontSize: '2.5rem', 
              fontWeight: '800', 
              marginBottom: '8px',
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Welcome Back
            </h1>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              fontSize: '1.1rem',
              fontWeight: '400'
            }}>
              Sign in to your She Foundation account
            </p>
          </div>

          {error && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#fca5a5',
              padding: '16px',
              borderRadius: '12px',
              marginBottom: '24px',
              backdropFilter: 'blur(10px)',
              animation: 'bounce 0.5s ease-in-out'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary glow"
              style={{ 
                width: '100%',
                fontSize: '16px',
                padding: '16px',
                marginTop: '8px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              disabled={loading}
            >
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div className="loading-spinner" style={{ width: '20px', height: '20px' }}></div>
                  Signing in...
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🚀</span>
                  Sign In
                </div>
              )}
            </button>
          </form>

          <div className="text-center mt-8">
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '16px' }}>
              Don't have an account?{' '}
              <Link to="/signup" style={{ 
                color: '#ffd700', 
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Sign up here
              </Link>
            </p>
          </div>

          {/* Demo credentials */}
          <div className="text-center mt-6">
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              backdropFilter: 'blur(10px)'
            }}>
              <p style={{ 
                fontSize: '0.875rem', 
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '8px',
                fontWeight: '600'
              }}>
                🎯 Demo Mode - No Auth Required
              </p>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                <p>Enter any email and password</p>
                <p>Example: test@example.com / password123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 