import { useState, useEffect } from 'react'
import { Trophy, Star, Coins, Calendar, Gift, Crown, TrendingUp, Users, Clock, Award, Target, Zap, Bell, RefreshCw, CheckCircle, AlertCircle, Lock } from 'lucide-react'

const Dashboard = () => {
  const [showDailyRewards, setShowDailyRewards] = useState(true)
  const [loginStreak, setLoginStreak] = useState(7)
  const [lastLogin, setLastLogin] = useState(new Date().toISOString().split('T')[0])
  const [currentTime, setCurrentTime] = useState(new Date())

  const user = {
    username: 'GamingPro2024',
    level: 28,
    xp: 15420,
    nextLevelXp: 20000,
    points: 45230,
    totalEarnings: 75000,
    joinDate: '2024-01-15',
    avatar: '/assets/images/live-match-player-1.png',
    rank: 15
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

  const leaderboardData = [
    { rank: 1, username: 'ProGamer2024', points: 125000, xp: 50000, level: 45, avatar: '/assets/images/live-match-player-1.png' },
    { rank: 2, username: 'ElitePlayer', points: 118000, xp: 48000, level: 43, avatar: '/assets/images/live-match-player-2.png' },
    { rank: 3, username: 'GameMaster', points: 110000, xp: 46000, level: 42, avatar: '/assets/images/featured-game-1.jpg' },
    { rank: 4, username: 'Skillz99', points: 105000, xp: 44000, level: 41, avatar: '/assets/images/featured-game-2.jpg' },
    { rank: 5, username: 'WinnerTakesAll', points: 98000, xp: 42000, level: 40, avatar: '/assets/images/featured-game-3.jpg' }
  ]

  const giveaways = [
    {
      id: 1,
      title: 'Monthly Mega Giveaway',
      description: 'Win 10,000 points and exclusive items!',
      prize: '10,000 Points + Legendary Items',
      participants: 1250,
      endDate: '2024-02-15',
      status: 'active',
      image: '/assets/images/featured-game-1.jpg'
    },
    {
      id: 2,
      title: 'Weekly Spin Contest',
      description: 'Best spin wins bonus rewards',
      prize: '5,000 Points',
      participants: 890,
      endDate: '2024-01-25',
      status: 'active',
      image: '/assets/images/featured-game-2.jpg'
    }
  ]

  const pastWinners = [
    { month: 'January 2024', winner: 'LuckyPlayer123', prize: 'Monthly Mega Giveaway', points: 10000 },
    { month: 'December 2023', winner: 'GamingChamp', prize: 'Holiday Special', points: 15000 },
    { month: 'November 2023', winner: 'PointMaster', prize: 'November Giveaway', points: 8000 }
  ]

  const recentActivity = [
    { id: 1, action: 'Earned 500 points', description: 'Completed BitLabs survey', time: '2 hours ago', type: 'earn', amount: '+500' },
    { id: 2, action: 'Redeemed reward', description: 'Steam Gift Card $10', time: '1 day ago', type: 'redeem', amount: '-2,500' },
    { id: 3, action: 'Daily spin', description: 'Won 250 points', time: '1 day ago', type: 'spin', amount: '+250' },
    { id: 4, action: 'Level up!', description: 'Reached level 28', time: '5 days ago', type: 'level', amount: 'Level 28' },
    { id: 5, action: 'Joined giveaway', description: 'Monthly Mega Giveaway', time: '1 week ago', type: 'giveaway', amount: 'Joined' }
  ]

  const spinHistory = [
    { date: '2024-01-16', result: '250 Points', xp: 125 },
    { date: '2024-01-15', result: '500 Points', xp: 250 },
    { date: '2024-01-14', result: '100 Points', xp: 50 },
    { date: '2024-01-13', result: 'Bonus Spin', xp: 0 },
    { date: '2024-01-12', result: '1000 Points', xp: 500 }
  ]

  const referralStats = {
    totalReferrals: 12,
    bonusPoints: 2500,
    pendingReferrals: 3
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const claimDailyReward = (day) => {
    const reward = dailyRewards[day - 1]
    alert(`Claimed Day ${day} reward: ${reward.points} points + ${reward.xp} XP!`)
    setShowDailyRewards(false)
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'earn': return <Coins size={20} className="text-green-400" />
      case 'redeem': return <Gift size={20} className="text-blue-400" />
      case 'spin': return <Zap size={20} className="text-yellow-400" />
      case 'level': return <Crown size={20} className="text-orange-400" />
      case 'giveaway': return <Trophy size={20} className="text-purple-400" />
      default: return <Clock size={20} />
    }
  }

  const xpProgress = ((user.xp / user.nextLevelXp) * 100).toFixed(1)

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

            <div className="trading-stats-modern">
              <div className="stat-item-modern">
                <div className="stat-icon-modern"><Coins size={22} /></div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.points.toLocaleString()}</span>
                  <span className="stat-label-modern">Points</span>
                </div>
              </div>
              <div className="stat-item-modern">
                <div className="stat-icon-modern"><Star size={22} /></div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">{user.xp.toLocaleString()}</span>
                  <span className="stat-label-modern">Total XP</span>
                </div>
              </div>
              <div className="stat-item-modern">
                <div className="stat-icon-modern"><Crown size={22} /></div>
                <div className="stat-content-modern">
                  <span className="stat-value-modern">Lv. {user.level}</span>
                  <span className="stat-label-modern">Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Rewards Popup */}
      {showDailyRewards && (
        <div className="daily-rewards-popup">
          <div className="popup-content">
            <div className="popup-header">
              <h3>Daily Rewards</h3>
              <button onClick={() => setShowDailyRewards(false)}>×</button>
            </div>
            <div className="streak-info">
              <div className="streak-badge">
                <Zap size={20} />
                <span>{loginStreak} Day Streak!</span>
              </div>
              <p>Keep logging in to unlock better rewards!</p>
            </div>
            <div className="rewards-grid">
              {dailyRewards.map((reward, index) => (
                <div 
                  key={index} 
                  className={`reward-card ${index < loginStreak ? 'claimed' : index === loginStreak ? 'available' : 'locked'}`}
                  onClick={() => index === loginStreak && claimDailyReward(index + 1)}
                >
                  <div className="reward-day">Day {reward.day}</div>
                  <div className="reward-content">
                    <div className="reward-points">
                      <Coins size={16} />
                      <span>{reward.points}</span>
                    </div>
                    <div className="reward-xp">
                      <Star size={16} />
                      <span>{reward.xp} XP</span>
                    </div>
                    <div className="reward-item">{reward.item}</div>
                  </div>
                  <div className="reward-status">
                    {index < loginStreak ? <CheckCircle size={18} /> : index === loginStreak ? <AlertCircle size={18} /> : <Lock size={18} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Overview Section */}
      <div className="dashboard-content">
        <div className="container">
          <div className="overview-grid">
            {/* Stats Cards */}
            <div className="stats-section">
              <h2 className="section-title">
                <TrendingUp size={24} />
                Your Progress
              </h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon coins">
                    <Coins size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{user.points.toLocaleString()}</span>
                    <span className="stat-label">Current Points</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon xp">
                    <Star size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{user.xp.toLocaleString()}</span>
                    <span className="stat-label">Total XP</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon level">
                    <Crown size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{user.level}</span>
                    <span className="stat-label">Current Level</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon earnings">
                    <Trophy size={24} />
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{user.totalEarnings.toLocaleString()}</span>
                    <span className="stat-label">Total Earned</span>
                  </div>
                </div>
              </div>

              {/* XP Progress */}
              <div className="xp-progress-section">
                <h3>Experience Progress</h3>
                <div className="xp-progress-container">
                  <div className="xp-progress-header">
                    <span className="xp-label">Level {user.level} → {user.level + 1}</span>
                    <span className="xp-percentage">{xpProgress}%</span>
                  </div>
                  <div className="xp-progress-bar">
                    <div 
                      className="xp-progress-fill"
                      style={{ width: `${xpProgress}%` }}
                    ></div>
                  </div>
                  <div className="xp-progress-text">
                    <span>{user.xp.toLocaleString()} / {user.nextLevelXp.toLocaleString()} XP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Spin History */}
            <div className="spin-history-section">
              <h2 className="section-title">
                <Zap size={24} />
                Spin History
              </h2>
              <div className="spin-history-list">
                {spinHistory.map((spin, index) => (
                  <div key={index} className="spin-history-item">
                    <div className="spin-date">{spin.date}</div>
                    <div className="spin-result">{spin.result}</div>
                    {spin.xp > 0 && (
                      <div className="spin-xp">+{spin.xp} XP</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Referral Stats */}
            <div className="referral-stats-section">
              <h2 className="section-title">
                <Users size={24} />
                Referral Program
              </h2>
              <div className="referral-stats">
                <div className="referral-stat">
                  <div className="stat-icon">
                    <Users size={20} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{referralStats.totalReferrals}</span>
                    <span className="stat-label">Friends Referred</span>
                  </div>
                </div>
                <div className="referral-stat">
                  <div className="stat-icon">
                    <Coins size={20} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{referralStats.bonusPoints.toLocaleString()}</span>
                    <span className="stat-label">Bonus Points</span>
                  </div>
                </div>
                <div className="referral-stat">
                  <div className="stat-icon">
                    <Clock size={20} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{referralStats.pendingReferrals}</span>
                    <span className="stat-label">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard Section */}
          <div className="leaderboard-section">
            <div className="section-header">
              <h2 className="section-title">
                <Trophy size={28} />
                Monthly Leaderboard
              </h2>
              <div className="reset-info">
                <RefreshCw size={16} />
                <span>Resets monthly with bonus rewards for top 5!</span>
              </div>
            </div>
            
            <div className="leaderboard-container">
              <div className="leaderboard-header">
                <div className="rank-col">Rank</div>
                <div className="player-col">Player</div>
                <div className="points-col">Points</div>
                <div className="xp-col">XP</div>
                <div className="level-col">Level</div>
              </div>
              
              {leaderboardData.map((player, index) => (
                <div key={player.rank} className={`leaderboard-item ${index < 3 ? 'top-three' : ''}`}>
                  <div className="rank-col">
                    {index === 0 && <Crown size={20} className="gold" />}
                    {index === 1 && <Trophy size={20} className="silver" />}
                    {index === 2 && <Award size={20} className="bronze" />}
                    {index > 2 && <span className="rank-number">{player.rank}</span>}
                  </div>
                  <div className="player-col">
                    <img src={player.avatar} alt={player.username} className="player-avatar" />
                    <div className="player-info">
                      <span className="player-name">{player.username}</span>
                      {index < 3 && (
                        <span className="bonus-reward">
                          +{1000 - (index * 200)} bonus points
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="points-col">{player.points.toLocaleString()}</div>
                  <div className="xp-col">{player.xp.toLocaleString()}</div>
                  <div className="level-col">{player.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Giveaways & Raffles */}
          <div className="giveaways-section">
            <h2 className="section-title">
              <Gift size={28} />
              Giveaways & Raffles
            </h2>
            
            <div className="giveaways-grid">
              {giveaways.map(giveaway => (
                <div key={giveaway.id} className="giveaway-card">
                  <div className="giveaway-image">
                    <img src={giveaway.image} alt={giveaway.title} />
                    <div className="giveaway-status">{giveaway.status}</div>
                  </div>
                  <div className="giveaway-content">
                    <h3 className="giveaway-title">{giveaway.title}</h3>
                    <p className="giveaway-description">{giveaway.description}</p>
                    <div className="giveaway-prize">
                      <Gift size={16} />
                      <span>{giveaway.prize}</span>
                    </div>
                    <div className="giveaway-meta">
                      <div className="participants">
                        <Users size={14} />
                        <span>{giveaway.participants} participants</span>
                      </div>
                      <div className="end-date">
                        <Calendar size={14} />
                        <span>Ends: {giveaway.endDate}</span>
                      </div>
                    </div>
                    <button className="join-btn">Join Giveaway</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="past-winners">
              <h3>Past Winners</h3>
              <div className="winners-list">
                {pastWinners.map((winner, index) => (
                  <div key={index} className="winner-item">
                    <div className="winner-month">{winner.month}</div>
                    <div className="winner-details">
                      <span className="winner-name">{winner.winner}</span>
                      <span className="winner-prize">{winner.prize}</span>
                      <span className="winner-points">+{winner.points.toLocaleString()} points</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="activity-section">
            <h2 className="section-title">
              <Clock size={28} />
              Recent Activity
            </h2>
            <div className="activity-list">
              {recentActivity.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="activity-content">
                    <h4 className="activity-action">{activity.action}</h4>
                    <p className="activity-description">{activity.description}</p>
                  </div>
                  <div className="activity-amount">
                    <span className={`amount ${activity.type}`}>{activity.amount}</span>
                  </div>
                  <div className="activity-time">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
