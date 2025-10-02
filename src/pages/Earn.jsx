import { useState } from 'react'
import { Gift, RotateCcw, Star, Trophy, Coins, Zap, Crown, Award, Target, TrendingUp, Users, Calendar, Clock } from 'lucide-react'
import { FaBitcoin, FaMobile, FaVideo, FaGift, FaTrophy, FaCrown } from 'react-icons/fa'

const Earn = () => {
  const [spinResult, setSpinResult] = useState(null)
  const [isSpinning, setIsSpinning] = useState(false)
  const [canSpin, setCanSpin] = useState(true)
  const [wheelRotation, setWheelRotation] = useState(0)

  const user = {
    level: 15,
    xp: 8500,
    nextLevelXp: 10000,
    points: 12450,
    totalEarnings: 25000,
    spinsUsed: 7,
    maxSpins: 30
  }

  const offerwalls = [
    { name: 'BitLabs', description: 'Complete surveys and earn points', points: '50-500', icon: <FaBitcoin size={24} />, xpReward: '25-250' },
    { name: 'Lootably', description: 'Download apps and get rewards', points: '100-1000', icon: <FaMobile size={24} />, xpReward: '50-500' },
    { name: 'AdGate Media', description: 'Watch videos and earn coins', points: '25-250', icon: <FaVideo size={24} />, xpReward: '10-100' }
  ]

  const spinWheelItems = [
    { id: 1, name: '100 Points', value: 100, color: '#FF6B6B', probability: 30, xp: 50 },
    { id: 2, name: '250 Points', value: 250, color: '#4ECDC4', probability: 25, xp: 125 },
    { id: 3, name: '500 Points', value: 500, color: '#45B7D1', probability: 20, xp: 250 },
    { id: 4, name: '1000 Points', value: 1000, color: '#96CEB4', probability: 15, xp: 500 },
    { id: 5, name: 'Bonus Spin', value: 'bonus', color: '#FFEAA7', probability: 7, xp: 0 },
    { id: 6, name: 'Jackpot!', value: 5000, color: '#DDA0DD', probability: 3, xp: 2500 }
  ]

  const xpLevels = [
    { level: 1, xpRequired: 0, bonusPoints: 0 },
    { level: 5, xpRequired: 1000, bonusPoints: 100 },
    { level: 10, xpRequired: 3000, bonusPoints: 300 },
    { level: 15, xpRequired: 6000, bonusPoints: 600 },
    { level: 20, xpRequired: 10000, bonusPoints: 1000 },
    { level: 25, xpRequired: 15000, bonusPoints: 1500 },
    { level: 30, xpRequired: 22000, bonusPoints: 2200 },
    { level: 35, xpRequired: 30000, bonusPoints: 3000 },
    { level: 40, xpRequired: 40000, bonusPoints: 4000 },
    { level: 50, xpRequired: 60000, bonusPoints: 6000 }
  ]

  const handleSpin = () => {
    if (!canSpin || isSpinning) return
    
    setIsSpinning(true)
    setCanSpin(false)
    
    // Calculate random rotation (multiple full rotations + random angle)
    const randomAngle = Math.random() * 360
    const fullRotations = 5 + Math.random() * 5 // 5-10 full rotations
    const totalRotation = wheelRotation + (fullRotations * 360) + randomAngle
    
    setWheelRotation(totalRotation)
    
    // Simulate spin delay
    setTimeout(() => {
      const random = Math.random() * 100
      let cumulativeProbability = 0
      
      for (const item of spinWheelItems) {
        cumulativeProbability += item.probability
        if (random <= cumulativeProbability) {
          setSpinResult(item)
          break
        }
      }
      
      setIsSpinning(false)
      
      // Reset spin availability after 24 hours (in real app)
      setTimeout(() => setCanSpin(true), 1000)
    }, 3000)
  }

  const xpProgress = ((user.xp / user.nextLevelXp) * 100).toFixed(1)
  const currentLevelData = xpLevels.find(level => level.level === user.level) || xpLevels[0]
  const nextLevelData = xpLevels.find(level => level.level === user.level + 1) || xpLevels[xpLevels.length - 1]

  return (
    <div className="earn-page">
      <section className="section hero" style={{backgroundImage: "url('/assets/images/hero-bg.jpg')"}}>
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">Earn & Win</p>
            <h1 className="h1 hero-title">
              Earn <span className="span">Points</span> Daily
            </h1>
            <p className="hero-text">
              Complete offers, spin the wheel, and earn points to redeem amazing rewards!
            </p>
          </div>
        </div>
      </section>

      {/* XP Leveling System */}
      <section className="section xp-section">
        <div className="container">
          <h2 className="h2 section-title">
            <Target size={28} />
            XP Leveling System
          </h2>
          <p className="section-text">
            Earn XP by completing tasks and level up to unlock bonus points and exclusive rewards!
          </p>

          <div className="xp-leveling-container">
            <div className="current-level-card">
              <div className="level-info">
                <div className="level-badge">
                  <Crown size={24} />
                  <span>Level {user.level}</span>
                </div>
                <div className="xp-stats">
                  <div className="xp-current">
                    <span className="xp-value">{user.xp.toLocaleString()}</span>
                    <span className="xp-label">Current XP</span>
                  </div>
                  <div className="xp-next">
                    <span className="xp-value">{user.nextLevelXp.toLocaleString()}</span>
                    <span className="xp-label">Next Level</span>
                  </div>
                </div>
              </div>
              
              <div className="xp-progress-container">
                <div className="xp-progress-header">
                  <span className="progress-label">Progress to Level {user.level + 1}</span>
                  <span className="progress-percentage">{xpProgress}%</span>
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

            <div className="level-benefits">
              <h3>Level Benefits</h3>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Coins size={20} />
                  </div>
                  <div className="benefit-content">
                    <h4>Bonus Points</h4>
                    <p>Level up grants {nextLevelData.bonusPoints} bonus points</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Star size={20} />
                  </div>
                  <div className="benefit-content">
                    <h4>Extra Spins</h4>
                    <p>Higher levels unlock more daily spins</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <Trophy size={20} />
                  </div>
                  <div className="benefit-content">
                    <h4>Exclusive Rewards</h4>
                    <p>Access to special items and giveaways</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Spin Wheel Section - Completely Redesigned */}
      <section className="section spin-section">
        <div className="container">
          <h2 className="h2 section-title">
            Daily <span className="span">Spin Wheel</span>
          </h2>
          <p className="section-text">
            Spin once per day to win amazing prizes and bonus rewards!
          </p>

          <div className="spin-wheel-container-new">
            <div className="wheel-wrapper-new">
              <div 
                className="spin-wheel-new" 
                style={{ transform: `rotate(${wheelRotation}deg)` }}
              >
                {spinWheelItems.map((item, index) => {
                  const angle = (360 / spinWheelItems.length) * index
                  const segmentAngle = 360 / spinWheelItems.length
                  return (
                    <div 
                      key={item.id}
                      className="wheel-segment-new"
                      style={{
                        '--segment-color': item.color,
                        '--segment-angle': angle,
                        '--segment-index': index,
                        '--total-segments': spinWheelItems.length,
                        '--segment-width': segmentAngle
                      }}
                    >
                      <div className="segment-content-new">
                        <div className="segment-icon-new">
                          {item.value === 'bonus' ? <RotateCcw size={20} /> : 
                           item.value === 5000 ? <Crown size={20} /> : 
                           <Coins size={20} />}
                        </div>
                        <div className="segment-text-new">{item.name}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="wheel-pointer-new">
                <div className="pointer-arrow-new"></div>
              </div>
            </div>
            
            <button 
              className={`spin-button-new ${!canSpin ? 'disabled' : ''}`}
              onClick={handleSpin}
              disabled={!canSpin || isSpinning}
            >
              {isSpinning ? (
                <RotateCcw className="spinning-icon-new" size={24} />
              ) : (
                <Gift size={24} />
              )}
              {canSpin ? 'Spin Now!' : 'Come Back Tomorrow'}
            </button>
          </div>

          {spinResult && (
            <div className="spin-result-new">
              <div className="result-header-new">
                <Trophy size={32} className="result-trophy-new" />
                <h3>Congratulations!</h3>
              </div>
              <div className="result-item-new" style={{backgroundColor: spinResult.color}}>
                <div className="result-icon-new">
                  {spinResult.value === 'bonus' ? <RotateCcw size={24} /> : 
                   spinResult.value === 5000 ? <Crown size={24} /> : 
                   <Coins size={24} />}
                </div>
                <div className="result-text-new">{spinResult.name}</div>
                {spinResult.xp > 0 && (
                  <div className="result-xp-new">+{spinResult.xp} XP</div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Offerwalls Section */}
      <section className="section offerwalls-section">
        <div className="container">
          <h2 className="h2 section-title">
            Complete <span className="span">Offers</span>
          </h2>
          <p className="section-text">
            Complete various tasks and earn points + XP instantly!
          </p>

          <div className="offerwalls-grid">
            {offerwalls.map((offer, index) => (
              <div key={index} className="offer-card">
                <div className="offer-icon">{offer.icon}</div>
                <h3 className="offer-name">{offer.name}</h3>
                <p className="offer-description">{offer.description}</p>
                <div className="offer-rewards">
                  <div className="reward-item">
                    <Coins size={16} />
                    <span>{offer.points} points</span>
                  </div>
                  <div className="reward-item">
                    <Star size={16} />
                    <span>{offer.xpReward} XP</span>
                  </div>
                </div>
                <button className="btn skewBg">Start Earning</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Summary */}
      <section className="section earnings-summary">
        <div className="container">
          <h2 className="h2 section-title">
            Your <span className="span">Earnings</span>
          </h2>
          <div className="earnings-stats">
            <div className="stat-card">
              <Trophy size={32} />
              <h3>Total Points</h3>
              <p className="stat-value">{user.points.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <Star size={32} />
              <h3>Current Level</h3>
              <p className="stat-value">{user.level}</p>
            </div>
            <div className="stat-card">
              <TrendingUp size={32} />
              <h3>Total XP</h3>
              <p className="stat-value">{user.xp.toLocaleString()}</p>
            </div>
            <div className="stat-card">
              <Gift size={32} />
              <h3>Spins Used</h3>
              <p className="stat-value">{user.spinsUsed}/{user.maxSpins}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Earn
