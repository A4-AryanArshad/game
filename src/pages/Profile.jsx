import { useState } from 'react'
import { User, Settings, Share2, Copy, Star, Trophy, Coins, Calendar, Award, Crown, Zap, Target, Shield, Gift, TrendingUp, Users, Clock, CheckCircle, Edit3, Bell, Mail, Shield as Privacy, Gamepad2, Sparkles, Flame, Diamond } from 'lucide-react'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [copied, setCopied] = useState(false)

  const user = {
    username: 'GamingPro2024',
    email: 'gamingpro@example.com',
    level: 28,
    xp: 15420,
    points: 45230,
    joinDate: '2024-01-15',
    avatar: '/assets/images/live-match-player-1.png',
    referralCode: 'GAMING2024',
    totalReferrals: 12,
    rank: 15,
    nextLevelXp: 20000,
    currentLevelXp: 15420,
    streak: 7,
    totalEarnings: 125000,
    gamesPlayed: 45
  }

  const achievements = [
    { id: 1, name: 'First Steps', description: 'Complete your first offer', icon: <Star size={24} />, earned: true, rarity: 'common', points: 100 },
    { id: 2, name: 'Point Collector', description: 'Earn 10,000 points', icon: <Coins size={24} />, earned: true, rarity: 'rare', points: 500 },
    { id: 3, name: 'Social Butterfly', description: 'Refer 5 friends', icon: <Share2 size={24} />, earned: true, rarity: 'epic', points: 1000 },
    { id: 4, name: 'Lucky Spinner', description: 'Win 10 spins', icon: <Trophy size={24} />, earned: false, rarity: 'rare', points: 750 },
    { id: 5, name: 'Dedicated Player', description: 'Login for 30 days', icon: <Calendar size={24} />, earned: false, rarity: 'epic', points: 1500 },
    { id: 6, name: 'High Roller', description: 'Earn 50,000 points', icon: <Award size={24} />, earned: false, rarity: 'legendary', points: 2500 }
  ]

  const recentActivity = [
    { id: 1, action: 'Earned 500 points', description: 'Completed BitLabs survey', time: '2 hours ago', type: 'earn', amount: '+500' },
    { id: 2, action: 'Redeemed reward', description: 'Steam Gift Card $10', time: '1 day ago', type: 'redeem', amount: '-2,500' },
    { id: 3, action: 'Daily spin', description: 'Won 250 points', time: '1 day ago', type: 'spin', amount: '+250' },
    { id: 4, action: 'Referred friend', description: 'New user joined', time: '3 days ago', type: 'referral', amount: '+1,000' },
    { id: 5, action: 'Level up!', description: 'Reached level 28', time: '5 days ago', type: 'level', amount: 'Level 28' }
  ]

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://gamics.com/ref/${user.referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <User size={20} /> },
    { id: 'achievements', name: 'Achievements', icon: <Trophy size={20} /> },
    { id: 'activity', name: 'Activity', icon: <Clock size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#9CA3AF'
      case 'rare': return '#3B82F6'
      case 'epic': return '#8B5CF6'
      case 'legendary': return '#F59E0B'
      default: return '#9CA3AF'
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'earn': return <Coins size={20} className="text-green-400" />
      case 'redeem': return <Gift size={20} className="text-blue-400" />
      case 'spin': return <Zap size={20} className="text-yellow-400" />
      case 'referral': return <Users size={20} className="text-purple-400" />
      case 'level': return <Crown size={20} className="text-orange-400" />
      default: return <Clock size={20} />
    }
  }

  const xpProgress = ((user.currentLevelXp / user.nextLevelXp) * 100).toFixed(1)

  return (
    <div className="modern-profile-page">
      {/* Hero Section with Modern Design */}
      <div className="profile-hero-modern">
        <div className="hero-background-modern">
          <div className="gradient-mesh"></div>
          <div className="floating-elements">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="profile-header-modern">
            {/* Avatar Section */}
            <div className="avatar-section">
              <div className="avatar-container">
                <div className="avatar-ring">
                  <div className="avatar-ring-inner"></div>
                  <img src={user.avatar} alt={user.username} className="profile-avatar-modern" />
                  <div className="online-indicator"></div>
                </div>
                <div className="level-badge-modern">
                  <Crown size={16} />
                  <span>Level {user.level}</span>
                </div>
              </div>
              
              <div className="user-info">
                <h1 className="username-modern">{user.username}</h1>
                <p className="user-email-modern">{user.email}</p>
                <div className="rank-badge-modern">
                  <Trophy size={16} />
                  <span>Rank #{user.rank} • {user.streak} day streak</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid-modern">
              <div className="stat-card-modern primary">
                <div className="stat-icon-modern">
                  <Coins size={24} />
                </div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.points.toLocaleString()}</span>
                  <span className="stat-label-modern">Total Points</span>
                </div>
                <div className="stat-trend">
                  <TrendingUp size={16} />
                  <span>+12%</span>
                </div>
              </div>
              
              <div className="stat-card-modern">
                <div className="stat-icon-modern">
                  <Star size={24} />
                </div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.xp.toLocaleString()}</span>
                  <span className="stat-label-modern">Experience</span>
                </div>
                <div className="stat-trend">
                  <Flame size={16} />
                  <span>Active</span>
                </div>
              </div>
              
              <div className="stat-card-modern">
                <div className="stat-icon-modern">
                  <Users size={24} />
                </div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.totalReferrals}</span>
                  <span className="stat-label-modern">Referrals</span>
                </div>
                <div className="stat-trend">
                  <Sparkles size={16} />
                  <span>+2</span>
                </div>
              </div>
              
              <div className="stat-card-modern">
                <div className="stat-icon-modern">
                  <Gamepad2 size={24} />
                </div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.gamesPlayed}</span>
                  <span className="stat-label-modern">Games Played</span>
                </div>
                <div className="stat-trend">
                  <Diamond size={16} />
                  <span>Pro</span>
                </div>
              </div>
            </div>
          </div>

          {/* XP Progress Section */}
          <div className="xp-progress-modern">
            <div className="xp-header">
              <div className="xp-info">
                <h3>Experience Progress</h3>
                <span className="xp-percentage">{xpProgress}%</span>
              </div>
              <div className="xp-details">
                <span>{user.currentLevelXp.toLocaleString()} / {user.nextLevelXp.toLocaleString()} XP</span>
              </div>
            </div>
            <div className="xp-bar-modern">
              <div 
                className="xp-fill-modern"
                style={{ width: `${xpProgress}%` }}
              ></div>
              <div className="xp-glow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-section-modern">
        <div className="container">
          <div className="tabs-container-modern">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-modern ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-icon-modern">{tab.icon}</div>
                <span className="tab-text-modern">{tab.name}</span>
                {activeTab === tab.id && <div className="tab-indicator-modern"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="content-section-modern">
        <div className="container">
          {activeTab === 'overview' && (
            <div className="overview-modern">
              <div className="overview-grid-modern">
                {/* Referral Card */}
                <div className="card-modern referral-card-modern">
                  <div className="card-header-modern">
                    <div className="card-icon-modern">
                      <Share2 size={24} />
                    </div>
                    <div className="card-title-modern">
                      <h3>Referral Program</h3>
                      <p>Invite friends and earn bonus points</p>
                    </div>
                  </div>
                  
                  <div className="referral-section-modern">
                    <div className="referral-code-modern">
                      <input 
                        type="text" 
                        value={`https://gamics.com/ref/${user.referralCode}`}
                        readOnly
                        className="referral-input-modern"
                      />
                      <button 
                        className={`copy-btn-modern ${copied ? 'copied' : ''}`}
                        onClick={copyReferralCode}
                      >
                        <Copy size={16} />
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="referral-stats-modern">
                    <div className="referral-stat-modern">
                      <div className="stat-icon-modern">
                        <Users size={20} />
                      </div>
                      <div className="stat-info-modern">
                        <span className="stat-number-modern">{user.totalReferrals}</span>
                        <span className="stat-label-modern">Friends Referred</span>
                      </div>
                    </div>
                    <div className="referral-stat-modern">
                      <div className="stat-icon-modern">
                        <Coins size={20} />
                      </div>
                      <div className="stat-info-modern">
                        <span className="stat-number-modern">2,500</span>
                        <span className="stat-label-modern">Bonus Points</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Info Card */}
                <div className="card-modern account-card-modern">
                  <div className="card-header-modern">
                    <div className="card-icon-modern">
                      <User size={24} />
                    </div>
                    <div className="card-title-modern">
                      <h3>Account Information</h3>
                      <p>Your account details and statistics</p>
                    </div>
                  </div>
                  
                  <div className="account-details-modern">
                    <div className="detail-item-modern">
                      <div className="detail-icon-modern">
                        <Calendar size={18} />
                      </div>
                      <div className="detail-content-modern">
                        <span className="detail-label-modern">Member Since</span>
                        <span className="detail-value-modern">{new Date(user.joinDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="detail-item-modern">
                      <div className="detail-icon-modern">
                        <TrendingUp size={18} />
                      </div>
                      <div className="detail-content-modern">
                        <span className="detail-label-modern">Total Earnings</span>
                        <span className="detail-value-modern">{user.totalEarnings.toLocaleString()} pts</span>
                      </div>
                    </div>
                    
                    <div className="detail-item-modern">
                      <div className="detail-icon-modern">
                        <Crown size={18} />
                      </div>
                      <div className="detail-content-modern">
                        <span className="detail-label-modern">Current Level</span>
                        <span className="detail-value-modern">Level {user.level}</span>
                      </div>
                    </div>
                    
                    <div className="detail-item-modern">
                      <div className="detail-icon-modern">
                        <Target size={18} />
                      </div>
                      <div className="detail-content-modern">
                        <span className="detail-label-modern">XP to Next Level</span>
                        <span className="detail-value-modern">{(user.nextLevelXp - user.currentLevelXp).toLocaleString()} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-modern">
              <div className="section-header-modern">
                <h2 className="section-title-modern">
                  <Trophy size={28} />
                  Your Achievements
                </h2>
                <p className="section-subtitle-modern">Unlock rewards by completing various challenges</p>
              </div>
              
              <div className="achievements-grid-modern">
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className={`achievement-card-modern ${achievement.earned ? 'earned' : 'locked'}`}
                  >
                    <div className="achievement-header-modern">
                      <div className="achievement-icon-modern" style={{ color: getRarityColor(achievement.rarity) }}>
                        {achievement.icon}
                      </div>
                      <div className="achievement-rarity-modern" style={{ color: getRarityColor(achievement.rarity) }}>
                        {achievement.rarity.toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="achievement-content-modern">
                      <h4 className="achievement-name-modern">{achievement.name}</h4>
                      <p className="achievement-description-modern">{achievement.description}</p>
                      <div className="achievement-reward-modern">
                        <Coins size={16} />
                        <span>{achievement.points} points</span>
                      </div>
                    </div>
                    
                    <div className="achievement-status-modern">
                      {achievement.earned ? (
                        <div className="earned-badge-modern">
                          <CheckCircle size={20} />
                          <span>Earned</span>
                        </div>
                      ) : (
                        <div className="locked-badge-modern">
                          <Shield size={20} />
                          <span>Locked</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="activity-modern">
              <div className="section-header-modern">
                <h2 className="section-title-modern">
                  <Clock size={28} />
                  Recent Activity
                </h2>
                <p className="section-subtitle-modern">Your latest actions and achievements</p>
              </div>
              
              <div className="activity-list-modern">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="activity-item-modern">
                    <div className="activity-icon-modern">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="activity-content-modern">
                      <h4 className="activity-action-modern">{activity.action}</h4>
                      <p className="activity-description-modern">{activity.description}</p>
                    </div>
                    <div className="activity-amount-modern">
                      <span className={`amount-modern ${activity.type}`}>{activity.amount}</span>
                    </div>
                    <div className="activity-time-modern">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-modern">
              <div className="section-header-modern">
                <h2 className="section-title-modern">
                  <Settings size={28} />
                  Account Settings
                </h2>
                <p className="section-subtitle-modern">Manage your account preferences and privacy</p>
              </div>
              
              <div className="settings-form-modern">
                <div className="form-section-modern">
                  <h3 className="form-section-title-modern">Profile Information</h3>
                  <div className="form-group-modern">
                    <label className="form-label-modern">Username</label>
                    <input type="text" value={user.username} readOnly className="form-input-modern" />
                  </div>
                  <div className="form-group-modern">
                    <label className="form-label-modern">Email Address</label>
                    <input type="email" value={user.email} className="form-input-modern" />
                  </div>
                </div>
                
                <div className="form-section-modern">
                  <h3 className="form-section-title-modern">Notification Preferences</h3>
                  <div className="toggle-group-modern">
                    <div className="toggle-item-modern">
                      <div className="toggle-info-modern">
                        <span className="toggle-title-modern">Email Notifications</span>
                        <span className="toggle-description-modern">Receive updates via email</span>
                      </div>
                      <div className="toggle-switch-modern active">
                        <div className="toggle-slider-modern"></div>
                      </div>
                    </div>
                    <div className="toggle-item-modern">
                      <div className="toggle-info-modern">
                        <span className="toggle-title-modern">Push Notifications</span>
                        <span className="toggle-description-modern">Get notified about new offers</span>
                      </div>
                      <div className="toggle-switch-modern active">
                        <div className="toggle-slider-modern"></div>
                      </div>
                    </div>
                    <div className="toggle-item-modern">
                      <div className="toggle-info-modern">
                        <span className="toggle-title-modern">Marketing Emails</span>
                        <span className="toggle-description-modern">Receive promotional content</span>
                      </div>
                      <div className="toggle-switch-modern">
                        <div className="toggle-slider-modern"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="form-actions-modern">
                  <button className="btn-primary-modern">
                    <CheckCircle size={16} />
                    Save Changes
                  </button>
                  <button className="btn-secondary-modern">Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
