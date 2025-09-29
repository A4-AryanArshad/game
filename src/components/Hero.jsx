import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section 
      className="section hero" 
      id="home" 
      aria-label="home"
      style={{backgroundImage: "url('/assets/images/hero-bg.jpg')"}}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Gaming Rewards Platform</p>
          <h1 className="h1 hero-title">
            Earn <span className="span">Points</span> & Win Rewards
          </h1>
          <p className="hero-text">
            Complete offers, spin the wheel, and earn points to redeem amazing gaming rewards. 
            Trade items with other players and climb the leaderboards!
          </p>
          <div className="hero-actions">
            <Link to="/earn" className="btn skewBg">Start Earning</Link>
            <Link to="/marketplace" className="btn-outline">Browse Rewards</Link>
          </div>
        </div>

        <figure className="hero-banner img-holder" style={{'--width': '700', '--height': '700'}}>
          <img 
            src="/assets/images/hero-banner.png" 
            width="700" 
            height="700" 
            alt="hero banner" 
            className="w-100"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
