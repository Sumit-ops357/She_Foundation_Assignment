import React, { useState, useEffect } from 'react';

const Leaderboard = ({ token }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use dummy leaderboard data instead of fetching from API
    setTimeout(() => {
      const dummyLeaderboard = [
        {
          id: 1,
          name: "Emily Rodriguez",
          referralCode: "emily2025",
          totalRaised: 18200
        },
        {
          id: 2,
          name: "Sarah Johnson",
          referralCode: "sarah2025",
          totalRaised: 12500
        },
        {
          id: 3,
          name: "Michael Chen",
          referralCode: "michael2025",
          totalRaised: 8900
        },
        {
          id: 4,
          name: "Alex Thompson",
          referralCode: "alex2025",
          totalRaised: 7200
        },
        {
          id: 5,
          name: "Jessica Lee",
          referralCode: "jessica2025",
          totalRaised: 6500
        }
      ];
      setLeaderboard(dummyLeaderboard);
      setLoading(false);
    }, 500); // Small delay for realistic feel
  }, [token]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${rank}`;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return '#fbbf24';
      case 2:
        return '#9ca3af';
      case 3:
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          color: '#1e293b',
          marginBottom: '8px'
        }}>
          🏆 Fundraising Leaderboard
        </h1>
        <p style={{ color: '#64748b', fontSize: '1.125rem' }}>
          See how you rank among your fellow interns
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card text-center">
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>👥</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>
            {leaderboard.length}
          </h3>
          <p style={{ color: '#64748b' }}>Total Interns</p>
        </div>
        
        <div className="card text-center">
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>💰</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#059669', marginBottom: '4px' }}>
            {formatCurrency(leaderboard.reduce((sum, intern) => sum + intern.totalRaised, 0))}
          </h3>
          <p style={{ color: '#64748b' }}>Total Raised</p>
        </div>
        
        <div className="card text-center">
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📈</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#6366f1', marginBottom: '4px' }}>
            {formatCurrency(leaderboard[0]?.totalRaised || 0)}
          </h3>
          <p style={{ color: '#64748b' }}>Top Fundraiser</p>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="card">
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#1e293b',
          marginBottom: '24px'
        }}>
          Top Fundraisers
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '16px 0', 
                  fontWeight: '600', 
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Rank
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '16px 0', 
                  fontWeight: '600', 
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Intern
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '16px 0', 
                  fontWeight: '600', 
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Referral Code
                </th>
                <th style={{ 
                  textAlign: 'right', 
                  padding: '16px 0', 
                  fontWeight: '600', 
                  color: '#374151',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Amount Raised
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((intern, index) => (
                <tr 
                  key={intern.id}
                  style={{ 
                    borderBottom: '1px solid #f3f4f6',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.parentElement.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.parentElement.style.backgroundColor = 'transparent';
                  }}
                >
                  <td style={{ padding: '16px 0', verticalAlign: 'middle' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: getRankColor(index + 1)
                      }}>
                        {getRankIcon(index + 1)}
                      </span>
                      <span style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#374151'
                      }}>
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 0', verticalAlign: 'middle' }}>
                    <div>
                      <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: '#1e293b',
                        marginBottom: '4px'
                      }}>
                        {intern.name}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        color: '#6b7280'
                      }}>
                        ID: {intern.id}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 0', verticalAlign: 'middle' }}>
                    <code style={{
                      backgroundColor: '#f3f4f6',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.875rem',
                      color: '#6366f1',
                      fontWeight: '500'
                    }}>
                      {intern.referralCode}
                    </code>
                  </td>
                  <td style={{ 
                    padding: '16px 0', 
                    verticalAlign: 'middle',
                    textAlign: 'right'
                  }}>
                    <div style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#059669'
                    }}>
                      {formatCurrency(intern.totalRaised)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {leaderboard.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            color: '#6b7280'
          }}>
            <p>No data available</p>
          </div>
        )}
      </div>

      {/* Achievement Highlights */}
      <div className="card mt-6">
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          color: '#1e293b',
          marginBottom: '16px'
        }}>
          🎯 Achievement Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #f59e0b',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🌟</div>
            <h4 style={{ fontWeight: '600', color: '#92400e', marginBottom: '4px' }}>
              Top Performer
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#92400e' }}>
              {leaderboard[0]?.name || 'No data'} leads with {formatCurrency(leaderboard[0]?.totalRaised || 0)}
            </p>
          </div>
          
          <div style={{
            backgroundColor: '#dbeafe',
            border: '1px solid #3b82f6',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📊</div>
            <h4 style={{ fontWeight: '600', color: '#1e40af', marginBottom: '4px' }}>
              Average Performance
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#1e40af' }}>
              Average raised: {formatCurrency(
                leaderboard.length > 0 
                  ? leaderboard.reduce((sum, intern) => sum + intern.totalRaised, 0) / leaderboard.length 
                  : 0
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 