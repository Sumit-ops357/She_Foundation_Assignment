import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ user, token }) => {
  const [internData, setInternData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [fundraisingGoal, setFundraisingGoal] = useState(25000);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Use the user data passed from login/signup instead of fetching from API
    setTimeout(() => {
      setInternData(user);
      setLoading(false);
      
      // Generate mock recent activities
      setRecentActivities([
        { id: 1, type: 'donation', amount: 500, donor: 'Anonymous', date: '2024-01-15', message: 'Keep up the great work!' },
        { id: 2, type: 'campaign', title: 'Education Fund Drive', raised: 2500, date: '2024-01-14' },
        { id: 3, type: 'milestone', achievement: 'Reached 50% of goal', date: '2024-01-13' },
        { id: 4, type: 'donation', amount: 1000, donor: 'Sarah Johnson', date: '2024-01-12', message: 'Supporting women empowerment!' },
        { id: 5, type: 'badge', badge: 'Silver Badge', date: '2024-01-11' }
      ]);
    }, 500);
  }, [user]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getProgressPercentage = () => {
    return Math.min((internData?.totalRaised / fundraisingGoal) * 100, 100);
  };

  const chartData = {
    fundraising: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Funds Raised',
        data: [2000, 3500, 4200, 5800, 7200, internData?.totalRaised || 8500],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4
      }]
    },
    categories: {
      labels: ['Education', 'Healthcare', 'Skills Training', 'Emergency Aid'],
      datasets: [{
        label: 'Funds Allocated',
        data: [45, 25, 20, 10],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',
          'rgba(118, 75, 162, 0.8)',
          'rgba(240, 147, 251, 0.8)',
          'rgba(245, 87, 108, 0.8)'
        ]
      }]
    }
  };

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
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: 'white',
                margin: '0 0 8px 0'
              }}>
                Welcome back, {internData.name}!
              </h1>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontSize: '1.1rem',
                margin: 0
              }}>
                Continue making a difference in women's lives
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <span style={{ color: 'white', fontWeight: '500' }}>Fundraising Progress</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {formatCurrency(internData.totalRaised)} / {formatCurrency(fundraisingGoal)}
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '12px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '6px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${getProgressPercentage()}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '6px',
                transition: 'width 0.8s ease-in-out'
              }}></div>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '0.9rem',
              margin: '8px 0 0 0'
            }}>
              {getProgressPercentage().toFixed(1)}% of your goal reached
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '24px',
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '8px',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)'
      }}>
        {['overview', 'analytics', 'activities', 'rewards'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: activeTab === tab 
                ? 'rgba(99, 102, 241, 0.3)' 
                : 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'capitalize',
              fontWeight: activeTab === tab ? '600' : '400'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ minHeight: '400px' }}>
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Stats Cards */}
            <div className="card glass" style={{ padding: '24px' }}>
              <h3 style={{ color: 'white', marginBottom: '16px' }}>Quick Stats</h3>
              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Total Raised</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>{formatCurrency(internData.totalRaised)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Campaigns</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>12</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Donors</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>156</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Referral Code</span>
                  <span style={{ color: 'white', fontWeight: '600' }}>{internData.referralCode}</span>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="card glass" style={{ padding: '24px' }}>
              <h3 style={{ color: 'white', marginBottom: '16px' }}>Your Rewards</h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {internData.rewards.map(reward => (
                  <div key={reward.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: reward.unlocked 
                      ? 'rgba(99, 102, 241, 0.2)' 
                      : 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: reward.unlocked 
                      ? '1px solid rgba(99, 102, 241, 0.3)' 
                      : '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: reward.unlocked 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                        : 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {reward.unlocked && (
                        <span style={{ fontSize: '12px', color: 'white' }}>✓</span>
                      )}
                    </div>
                    <div>
                      <div style={{ 
                        color: reward.unlocked ? 'white' : 'rgba(255, 255, 255, 0.6)',
                        fontWeight: '500'
                      }}>
                        {reward.name}
                      </div>
                      <div style={{ 
                        color: reward.unlocked ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
                        fontSize: '0.9rem'
                      }}>
                        {reward.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            <div className="card glass" style={{ padding: '24px' }}>
              <h3 style={{ color: 'white', marginBottom: '16px' }}>Fundraising Trend</h3>
              <Line 
                data={chartData.fundraising}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      labels: { color: 'white' }
                    }
                  },
                  scales: {
                    x: {
                      ticks: { color: 'rgba(255, 255, 255, 0.8)' },
                      grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y: {
                      ticks: { color: 'rgba(255, 255, 255, 0.8)' },
                      grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                  }
                }}
              />
            </div>

            <div className="card glass" style={{ padding: '24px' }}>
              <h3 style={{ color: 'white', marginBottom: '16px' }}>Fund Allocation</h3>
              <Doughnut 
                data={chartData.categories}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: { color: 'white' }
                    }
                  }
                }}
              />
            </div>
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="card glass" style={{ padding: '24px' }}>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>Recent Activities</h3>
            <div style={{ display: 'grid', gap: '16px' }}>
              {recentActivities.map(activity => (
                <div key={activity.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem'
                  }}>
                    {activity.type === 'donation' && '💰'}
                    {activity.type === 'campaign' && '📢'}
                    {activity.type === 'milestone' && '🏆'}
                    {activity.type === 'badge' && '🏅'}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ color: 'white', fontWeight: '500', marginBottom: '4px' }}>
                      {activity.type === 'donation' && `${formatCurrency(activity.amount)} from ${activity.donor}`}
                      {activity.type === 'campaign' && activity.title}
                      {activity.type === 'milestone' && activity.achievement}
                      {activity.type === 'badge' && `Earned ${activity.badge}`}
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                      {new Date(activity.date).toLocaleDateString()}
                      {activity.message && ` • ${activity.message}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="card glass" style={{ padding: '24px' }}>
            <h3 style={{ color: 'white', marginBottom: '16px' }}>Available Rewards</h3>
            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[
                { name: 'Bronze Badge', requirement: '$5,000', unlocked: true, icon: '🥉' },
                { name: 'Silver Badge', requirement: '$10,000', unlocked: false, icon: '🥈' },
                { name: 'Gold Badge', requirement: '$15,000', unlocked: false, icon: '🥇' },
                { name: 'Platinum Badge', requirement: '$25,000', unlocked: false, icon: '💎' },
                { name: 'Diamond Badge', requirement: '$50,000', unlocked: false, icon: '💠' },
                { name: 'Founder Badge', requirement: '$100,000', unlocked: false, icon: '👑' }
              ].map((reward, index) => (
                <div key={index} style={{
                  padding: '20px',
                  background: reward.unlocked 
                    ? 'rgba(99, 102, 241, 0.2)' 
                    : 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: reward.unlocked 
                    ? '2px solid rgba(99, 102, 241, 0.5)' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '12px' }}>{reward.icon}</div>
                  <div style={{ 
                    color: reward.unlocked ? 'white' : 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {reward.name}
                  </div>
                  <div style={{ 
                    color: reward.unlocked ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.9rem'
                  }}>
                    Raise {reward.requirement}
                  </div>
                  {reward.unlocked && (
                    <div style={{
                      marginTop: '12px',
                      padding: '6px 12px',
                      background: 'rgba(99, 102, 241, 0.3)',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      color: 'white'
                    }}>
                      Unlocked
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 