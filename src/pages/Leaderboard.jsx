import { useState } from 'react'
import { Trophy, Medal, Crown, Star, TrendingUp, Users } from 'lucide-react'

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all-time')

  const periods = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'all-time', name: 'All Time' }
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
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="section leaderboard-section">
        <div className="container">
          <div className="leaderboard-container">
            <div className="leaderboard-header-row">
              <div className="rank-col">Rank</div>
              <div className="player-col">Player</div>
              <div className="points-col">Points</div>
              <div className="level-col">Level</div>
            </div>
            
            {leaderboardData.map((player, index) => (
              <div key={player.rank} className={`leaderboard-item ${index < 3 ? 'top-three' : ''}`}>
                <div className="rank-col">
                  {getRankIcon(player.rank)}
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
                <div className="points-col">
                  <div className="points-value">{player.points.toLocaleString()}</div>
                  <div className="points-label">points</div>
                </div>
                <div className="level-col">
                  <div className="level-badge">
                    <Crown size={16} />
                    <span>Level {player.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rewards Info */}
          <div className="rewards-info">
            <h3>Ranking Rewards</h3>
            <div className="rewards-grid">
              <div className="reward-tier">
                <div className="tier-icon gold">
                  <Crown size={24} />
                </div>
                <div className="tier-info">
                  <h4>1st Place</h4>
                  <p>1000 bonus points + Exclusive badge</p>
                </div>
              </div>
              <div className="reward-tier">
                <div className="tier-icon silver">
                  <Medal size={24} />
                </div>
                <div className="tier-info">
                  <h4>2nd Place</h4>
                  <p>800 bonus points + Premium badge</p>
                </div>
              </div>
              <div className="reward-tier">
                <div className="tier-icon bronze">
                  <Medal size={24} />
                </div>
                <div className="tier-info">
                  <h4>3rd Place</h4>
                  <p>600 bonus points + Elite badge</p>
                </div>
              </div>
              <div className="reward-tier">
                <div className="tier-icon">
                  <Trophy size={24} />
                </div>
                <div className="tier-info">
                  <h4>Top 10</h4>
                  <p>200 bonus points + Special badge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leaderboard
