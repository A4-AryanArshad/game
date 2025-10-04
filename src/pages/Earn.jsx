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
    { id: 1, name: '5', value: 5, color: '#FF8C42', probability: 8.33, xp: 2 },
    { id: 2, name: '10', value: 10, color: '#FF6B35', probability: 8.33, xp: 5 },
    { id: 3, name: '15', value: 15, color: '#FF8C42', probability: 8.33, xp: 7 },
    { id: 4, name: '20', value: 20, color: '#FF6B35', probability: 8.33, xp: 10 },
    { id: 5, name: '25', value: 25, color: '#FF8C42', probability: 8.33, xp: 12 },
    { id: 6, name: '30', value: 30, color: '#FF6B35', probability: 8.33, xp: 15 },
    { id: 7, name: '35', value: 35, color: '#FF8C42', probability: 8.33, xp: 17 },
    { id: 8, name: '40', value: 40, color: '#FF6B35', probability: 8.33, xp: 20 },
    { id: 9, name: '45', value: 45, color: '#FF8C42', probability: 8.33, xp: 22 },
    { id: 10, name: '50', value: 50, color: '#FF6B35', probability: 8.33, xp: 25 },
    { id: 11, name: '100', value: 100, color: '#FF8C42', probability: 8.33, xp: 50 },
    { id: 12, name: '150', value: 150, color: '#FF6B35', probability: 8.33, xp: 75 }
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
      // Calculate which segment the pointer is pointing to
      const normalizedRotation = ((totalRotation % 360) + 360) % 360
      const segmentAngle = 360 / spinWheelItems.length
      
      // Find which segment the pointer is pointing to (top is 0 degrees)
      // We need to account for the fact that segments start at different angles
      let segmentIndex = Math.floor((360 - normalizedRotation + (segmentAngle / 2)) / segmentAngle)
      segmentIndex = segmentIndex % spinWheelItems.length
      
      const result = spinWheelItems[segmentIndex]
      setSpinResult(result)
      
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

      {/* Daily Spin Wheel Section */}
    {/* Daily Spin Wheel Section */}
<section className="section spin-section">
  <div className="container">
    <h2 className="h2 section-title">
      Daily <span className="span">Spin Wheel</span>
    </h2>
    <p className="section-text">
      Spin once per day to win amazing prizes and bonus rewards!
    </p>

    <div style={{ display: "flex", justifyContent: "center", margin: "60px 0 20px 0" }}>
      <div style={{ position: "relative", width: "450px", height: "450px" }}>
        
        {/* Wheel */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "6px solid #333",
            transform: `rotate(${wheelRotation}deg)`,
            transition: isSpinning ? "transform 3s ease-out" : "none",
            background: `conic-gradient(
              ${spinWheelItems
                .map(
                  (item, i) =>
                    `${item.color} ${(360 / spinWheelItems.length) * i}deg ${(360 / spinWheelItems.length) * (i + 1)}deg`
                )
                .join(", ")}
            )`
          }}
        >
          {spinWheelItems.map((item, index) => {
            const segmentAngle = 360 / spinWheelItems.length
            const startAngle = segmentAngle * index
            const centerAngle = startAngle + (segmentAngle / 2)
            
            // Calculate position for center of segment
            const radius = 170 // Distance from center
            const radians = (centerAngle * Math.PI) / 180
            const x = Math.sin(radians) * radius
            const y = -Math.cos(radians) * radius
            
            return (
              <div
                key={item.id}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(${x}px, ${y}px) rotate(${-wheelRotation}deg)`,
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  textAlign: "center",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pointerEvents: "none",
                  transition: isSpinning ? "transform 3s ease-out, opacity 0.3s ease" : "opacity 0.3s ease",
                  opacity: isSpinning ? 0 : 1
                }}
              >
                {item.name}
              </div>
            )
          })}
        </div>

        {/* Pointer */}
        <div
          style={{
            position: "absolute",
            top: "-35px",
            left: "50%",
            transform: "translateX(-50%) rotate(180deg)",
            width: "0",
            height: "0",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "50px solid red",
            zIndex: 10
          }}
        ></div>
      </div>
    </div>

    {/* Spin Button */}
    <button
      className={`spin-button-single ${!canSpin ? "disabled" : ""}`}
      onClick={handleSpin}
      disabled={!canSpin || isSpinning}
      style={{
        marginTop: "20px",
        padding: "12px 24px",
        background: "#ff6b35",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
      }}
    >
      {isSpinning ? (
        <RotateCcw className="spinning-icon-single" size={24} />
      ) : (
        <Gift size={24} />
      )}
      {canSpin ? "Spin Now!" : "Come Back Tomorrow"}
    </button>

    {/* Spin Result */}
    {spinResult && (
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: spinResult.color,
          color: "#fff",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        🎉 You won: {spinResult.name} Points (+{spinResult.xp} XP)
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
