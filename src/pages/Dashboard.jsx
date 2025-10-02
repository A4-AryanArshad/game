import { useState, useEffect } from 'react'
import { Trophy, Star, Coins, Calendar, Gift, Crown, TrendingUp, Users, Clock, Award, Target, Zap, Bell, RefreshCw, CheckCircle, AlertCircle, Lock, User, Settings, Share2, Copy, Shield, Gamepad2, Sparkles, Flame, Diamond, Edit3, Mail } from 'lucide-react'

const Dashboard = () => {
  const [showDailyRewards, setShowDailyRewards] = useState(false)
  const [loginStreak, setLoginStreak] = useState(7)
  const [lastLogin, setLastLogin] = useState(new Date().toISOString().split('T')[0])
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeTab, setActiveTab] = useState('overview')
  const [copied, setCopied] = useState(false)

  const user = {
    username: 'GamingPro2024',
    email: 'gamingpro@example.com',
    level: 28,
    xp: 15420,
    nextLevelXp: 20000,
    points: 45230,
    totalEarnings: 75000,
    joinDate: '2024-01-15',
    avatar: '/assets/images/live-match-player-1.png',
    rank: 15,
    referralCode: 'GAMING2024',
    totalReferrals: 12,
    currentLevelXp: 15420,
    streak: 7,
    gamesPlayed: 45
  }

  const dailyRewards = [
    { day: 1, points: 100, xp: 50, item: 'Welcome Bonus', claimed: true },
    { day: 2, points: 150, xp: 75, item: 'Daily Login', claimed: true },
    { day: 3, points: 200, xp: 100, item: 'Streak Bonus', claimed: true },
    { day: 4, points: 250, xp: 125, item: 'Loyalty Reward', claimed: true },
    { day: 5, points: 300, xp: 150, item: 'Weekend Special', claimed: true },
    { day: 6, points: 400, xp: 200, item: 'Mega Bonus', claimed: true },
    { day: 7, points: 500, xp: 250, item: 'Weekly Jackpot', claimed: false }
  ]

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

  const leaderboardData = [
    { rank: 1, username: 'ProGamer2024', points: 125000, xp: 50000, level: 45, avatar: '/assets/images/live-match-player-1.png' },
    { rank: 2, username: 'ElitePlayer', points: 118000, xp: 48000, level: 43, avatar: '/assets/images/live-match-player-2.png' },
    { rank: 3, username: 'GameMaster', points: 110000, xp: 46000, level: 42, avatar: '/assets/images/featured-game-1.jpg' },
    { rank: 4, username: 'Skillz99', points: 105000, xp: 44000, level: 41, avatar: '/assets/images/featured-game-2.jpg' },
    { rank: 5, username: 'WinnerTakesAll', points: 98000, xp: 42000, level: 40, avatar: '/assets/images/featured-game-3.jpg' }
  ]

  const referralStats = {
    totalReferrals: 12,
    bonusPoints: 6000,
    pendingReferrals: 2
  }

  // Check if 24 hours have passed since last popup
  useEffect(() => {
    const lastPopupTime = localStorage.getItem('lastDailyRewardsPopup')
    const now = new Date().getTime()
    const oneDay = 24 * 60 * 60 * 1000

    if (!lastPopupTime || (now - parseInt(lastPopupTime)) > oneDay) {
      setShowDailyRewards(true)
    }
  }, [])

  const claimDailyReward = (day) => {
    const reward = dailyRewards[day - 1]
    alert(`Claimed Day ${day} reward: ${reward.points} points + ${reward.xp} XP!`)
    setShowDailyRewards(false)
    localStorage.setItem('lastDailyRewardsPopup', new Date().getTime().toString())
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://gamics.com/ref/${user.referralCode}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'earn': return <Coins size={20} className="text-green-400" />
      case 'redeem': return <Gift size={20} className="text-blue-400" />
      case 'spin': return <Zap size={20} className="text-yellow-400" />
      case 'level': return <Crown size={20} className="text-orange-400" />
      case 'referral': return <Users size={20} className="text-purple-400" />
      default: return <Clock size={20} />
    }
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#95A5A6'
      case 'rare': return '#3498DB'
      case 'epic': return '#9B59B6'
      case 'legendary': return '#F39C12'
      default: return '#95A5A6'
    }
  }

  const xpProgress = ((user.xp / user.nextLevelXp) * 100).toFixed(1)

  const tabs = [
    { id: 'overview', name: 'Overview', icon: <User size={20} /> },
    { id: 'achievements', name: 'Achievements', icon: <Trophy size={20} /> },
    { id: 'activity', name: 'Activity', icon: <Clock size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ]

  return (
    <div className="dashboard-page">
      {/* Modern Hero Section */}
      <div className="trading-hero-modern">
        <div className="hero-background-modern"></div>
        <div className="gradient-mesh"></div>
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>
        <div className="trading-header-modern">
          <div className="header-content-modern">
            <div className="title-section-modern">
              <div className="title-icon-modern">
                <Trophy size={36} />
              </div>
              <h1 className="main-title-modern">Your Dashboard</h1>
              <p className="subtitle-modern">Welcome back, {user.username}. Track progress, rewards, and activity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Rewards Popup */}
      {showDailyRewards && (
        <div className="daily-rewards-popup-modern">
          <div className="popup-overlay-modern" onClick={() => setShowDailyRewards(false)}></div>
          <div className="popup-content-modern">
            <div className="popup-header-modern">
              <div className="popup-title-modern">
                <Gift size={24} />
                <h3>Daily Rewards</h3>
              </div>
              <button className="close-btn-modern" onClick={() => setShowDailyRewards(false)}>×</button>
            </div>
            <div className="streak-info-modern">
              <div className="streak-badge-modern">
                <Zap size={20} />
                <span>{loginStreak} Day Streak!</span>
              </div>
              <p>Keep logging in to unlock better rewards!</p>
            </div>
            <div className="rewards-grid-modern">
              {dailyRewards.map((reward, index) => (
                <div 
                  key={index} 
                  className={`reward-card-modern ${index < loginStreak ? 'claimed' : index === loginStreak ? 'available' : 'locked'}`}
                  onClick={() => index === loginStreak && claimDailyReward(index + 1)}
                >
                  <div className="reward-day-modern">Day {reward.day}</div>
                  <div className="reward-content-modern">
                    <div className="reward-points-modern">
                      <Coins size={16} />
                      <span>{reward.points}</span>
                    </div>
                    <div className="reward-xp-modern">
                      <Star size={16} />
                      <span>{reward.xp} XP</span>
                    </div>
                    <div className="reward-item-modern">{reward.item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-content-modern">
        {/* Profile Header - Clean Version */}
        <div className="profile-header-clean">
          <div className="profile-info-clean">
            <div className="avatar-section-clean">
              <div className="avatar-container-clean">
                <img src={user.avatar} alt={user.username} className="profile-avatar-clean" />
                <div className="online-indicator-clean"></div>
              </div>
              <div className="level-badge-clean">
                <Crown size={16} />
                <span>Level {user.level}</span>
              </div>
            </div>
            
            <div className="user-info-clean">
              <h1 className="username-clean">{user.username}</h1>
              <p className="user-email-clean">{user.email}</p>
              <div className="rank-badge-clean">
                <Trophy size={16} />
                <span>Rank #{user.rank} • {user.streak} day streak</span>
              </div>
            </div>
          </div>

          {/* XP Progress Section */}
          <div className="xp-progress-clean">
            <div className="xp-header-clean">
              <div className="xp-info-clean">
                <h3>Experience Progress</h3>
                <span className="xp-percentage-clean">{xpProgress}%</span>
              </div>
              <div className="xp-details-clean">
                <span>{user.currentLevelXp.toLocaleString()} / {user.nextLevelXp.toLocaleString()} XP</span>
              </div>
            </div>
            <div className="xp-bar-clean">
              <div 
                className="xp-fill-clean"
                style={{ width: `${xpProgress}%` }}
              ></div>
              <div className="xp-glow-clean"></div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="dashboard-tabs-modern">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button-modern ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content-modern">
          {activeTab === 'overview' && (
            <div className="overview-modern">
              {/* Referral Section */}
              <div className="referral-section-modern">
                <h2 className="section-title-modern">
                  <Share2 size={24} />
                  Referral Program
                </h2>
                <div className="referral-card-modern">
                  <div className="referral-info-modern">
                    <h3>Invite Friends & Earn Rewards</h3>
                    <p>Share your referral code and earn 500 points for each friend who joins!</p>
                    <div className="referral-stats-modern">
                      <div className="referral-stat-modern">
                        <Users size={20} />
                        <div>
                          <span className="stat-number-modern">{referralStats.totalReferrals}</span>
                          <span className="stat-label-modern">Friends Referred</span>
                        </div>
                      </div>
                      <div className="referral-stat-modern">
                        <Coins size={20} />
                        <div>
                          <span className="stat-number-modern">{referralStats.bonusPoints.toLocaleString()}</span>
                          <span className="stat-label-modern">Bonus Points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="referral-code-modern">
                    <label>Your Referral Code</label>
                    <div className="code-input-modern">
                      <input type="text" value={user.referralCode} readOnly />
                      <button onClick={copyReferralCode} className="copy-btn-modern">
                        {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="referral-link-modern">https://gamics.com/ref/{user.referralCode}</p>
                  </div>
                </div>
              </div>

              {/* Leaderboard Section */}
              <div className="leaderboard-section-modern">
                <h2 className="section-title-modern">
                  <Trophy size={24} />
                  Monthly Leaderboard
                </h2>
                <div className="leaderboard-container-modern">
                  {leaderboardData.map((player, index) => (
                    <div key={player.rank} className={`leaderboard-item-modern ${index < 3 ? 'top-three' : ''}`}>
                      <div className="rank-col-modern">
                        {index === 0 && <Crown size={20} className="gold" />}
                        {index === 1 && <Trophy size={20} className="silver" />}
                        {index === 2 && <Award size={20} className="bronze" />}
                        {index > 2 && <span className="rank-number-modern">{player.rank}</span>}
                      </div>
                      <div className="player-col-modern">
                        <img src={player.avatar} alt={player.username} className="player-avatar-modern" />
                        <div className="player-info-modern">
                          <span className="player-name-modern">{player.username}</span>
                          {index < 3 && (
                            <span className="bonus-reward-modern">
                              +{1000 - (index * 200)} bonus points
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="points-col-modern">{player.points.toLocaleString()}</div>
                    </div>
                  ))}
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

export default Dashboard
