import { useState } from 'react'
import { Trophy, Medal, Crown, Star, TrendingUp, Users } from 'lucide-react'

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all-time')
  const [selectedType, setSelectedType] = useState('points')

  const periods = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'all-time', name: 'All Time' }
  ]

  const types = [
    { id: 'points', name: 'Points', icon: <Star size={16} /> },
    { id: 'xp', name: 'XP', icon: <TrendingUp size={16} /> },
    { id: 'level', name: 'Level', icon: <Crown size={16} /> }
  ]

  const leaderboardData = [
    { rank: 1, username: 'ProGamer2024', points: 125000, xp: 50000, level: 45, avatar: '/assets/images/live-match-player-1.png' },
    { rank: 2, username: 'ElitePlayer', points: 118000, xp: 48000, level: 43, avatar: '/assets/images/live-match-player-2.png' },
    { rank: 3, username: 'GameMaster', points: 110000, xp: 46000, level: 42, avatar: '/assets/images/featured-game-1.jpg' },
    { rank: 4, username: 'Skillz99', points: 105000, xp: 44000, level: 41, avatar: '/assets/images/featured-game-2.jpg' },
    { rank: 5, username: 'WinnerTakesAll', points: 98000, xp: 42000, level: 40, avatar: '/assets/images/featured-game-3.jpg' },
    { rank: 6, username: 'ChampionX', points: 95000, xp: 41000, level: 39, avatar: '/assets/images/featured-game-4.jpg' },
    { rank: 7, username: 'GamingLegend', points: 92000, xp: 40000, level: 39, avatar: '/assets/images/blog-1.jpg' },
    { rank: 8, username: 'PointCollector', points: 89000, xp: 39000, level: 38, avatar: '/assets/images/blog-2.jpg' },
    { rank: 9, username: 'RewardHunter', points: 86000, xp: 38000, level: 38, avatar: '/assets/images/blog-3.jpg' },
    { rank: 10, username: 'TopPlayer', points: 83000, xp: 37000, level: 37, avatar: '/assets/images/shop-img-1.jpg' }
  ]

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown size={24} className="gold" />
    if (rank === 2) return <Medal size={24} className="silver" />
    if (rank === 3) return <Medal size={24} className="bronze" />
    return <span className="rank-number">{rank}</span>
  }

  const getRankColor = (rank) => {
    if (rank === 1) return '#FFD700'
    if (rank === 2) return '#C0C0C0'
    if (rank === 3) return '#CD7F32'
    return '#95A5A6'
  }

  const getValue = (user, type) => {
    switch (type) {
      case 'points': return user.points
      case 'xp': return user.xp
      case 'level': return user.level
      default: return user.points
    }
  }

  const sortedData = [...leaderboardData].sort((a, b) => {
    const aValue = getValue(a, selectedType)
    const bValue = getValue(b, selectedType)
    return bValue - aValue
  })

  return (
    <div className="leaderboard-page">
      <section className="section hero" style={{backgroundImage: "url('/assets/images/hero-bg.jpg')"}}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Competition</p>
            <h1 className="h1 hero-title">
              <Trophy size={48} className="hero-icon" />
              Leaderboard
            </h1>
            <p className="hero-text">
              Compete with other players and climb the rankings to earn exclusive rewards!
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section filters-section">
        <div className="container">
          <div className="leaderboard-filters">
            <div className="filter-group">
              <h3>Time Period</h3>
              <div className="filter-buttons">
                {periods.map(period => (
                  <button
                    key={period.id}
                    className={`filter-btn ${selectedPeriod === period.id ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(period.id)}
                  >
                    {period.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <h3>Ranking Type</h3>
              <div className="filter-buttons">
                {types.map(type => (
                  <button
                    key={type.id}
                    className={`filter-btn ${selectedType === type.id ? 'active' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    {type.icon}
                    <span>{type.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="section leaderboard-section">
        <div className="container">
          <h2 className="h2 section-title">
            Top <span className="span">Players</span>
          </h2>

          <div className="leaderboard-container">
            <div className="leaderboard-header">
              <div className="rank-col">Rank</div>
              <div className="player-col">Player</div>
              <div className="points-col">Points</div>
              <div className="xp-col">XP</div>
              <div className="level-col">Level</div>
            </div>

            <div className="leaderboard-list">
              {sortedData.map((user, index) => (
                <div 
                  key={user.rank} 
                  className={`leaderboard-item ${index < 3 ? 'top-three' : ''}`}
                  style={{'--rank-color': getRankColor(user.rank)}}
                >
                  <div className="rank-col">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <div className="player-col">
                    <div className="player-avatar">
                      <img src={user.avatar} alt={user.username} />
                    </div>
                    <div className="player-info">
                      <h4 className="player-name">{user.username}</h4>
                      <p className="player-title">
                        {user.rank === 1 ? 'Champion' : 
                         user.rank === 2 ? 'Runner-up' : 
                         user.rank === 3 ? 'Third Place' : 
                         'Player'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="points-col">
                    <span className="value">{user.points.toLocaleString()}</span>
                  </div>
                  
                  <div className="xp-col">
                    <span className="value">{user.xp.toLocaleString()}</span>
                  </div>
                  
                  <div className="level-col">
                    <span className="value">Level {user.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="h2 section-title">
            Your <span className="span">Stats</span>
          </h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Trophy size={32} />
              </div>
              <h3>Current Rank</h3>
              <p className="stat-value">#15</p>
              <p className="stat-subtitle">Out of 10,000+ players</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Star size={32} />
              </div>
              <h3>Total Points</h3>
              <p className="stat-value">45,230</p>
              <p className="stat-subtitle">Lifetime earned</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={32} />
              </div>
              <h3>XP Level</h3>
              <p className="stat-value">28</p>
              <p className="stat-subtitle">Keep grinding!</p>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <Users size={32} />
              </div>
              <h3>Referrals</h3>
              <p className="stat-value">12</p>
              <p className="stat-subtitle">Friends invited</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leaderboard
