import { Coins, Star, Trophy, Zap } from 'lucide-react'

const FeaturedGames = () => {
  const games = [
    {
      id: 1,
      image: '/assets/images/blox-fruits.jpg',
      title: 'Blox Fruits',
      platforms: 'Roblox',
      points: '50-500',
      xp: '25-250',
      alt: 'Blox Fruits - One Piece inspired Roblox game'
    },
    {
      id: 2,
      image: '/assets/images/grow-a-garden.jpg',
      title: 'Grow a Garden',
      platforms: 'Roblox',
      points: '100-1000',
      xp: '50-500',
      alt: 'Grow a Garden - Farming simulation Roblox game'
    },
    {
      id: 3,
      image: '/assets/images/adopt-me.jpg',
      title: 'Adopt Me',
      platforms: 'Roblox',
      points: '75-750',
      xp: '35-350',
      alt: 'Adopt Me - Pet adoption Roblox game'
    },
    {
      id: 4,
      image: '/assets/images/arsenal.jpg',
      title: 'Arsenal',
      platforms: 'Roblox',
      points: '60-600',
      xp: '30-300',
      alt: 'Arsenal - FPS shooter Roblox game'
    }
  ]

  return (
    <section className="section featured-games" id="featured-games" aria-label="featured games">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="h2 section-title">
            Featured <span className="span">Roblox Games</span>
          </h2>
          <p className="section-text">
            Earn points and XP by completing offers in these popular Roblox games
          </p>
        </div>

        <ul className="featured-games-list">
          {games.map((game) => (
            <li key={game.id}>
              <div className="featured-game-card">
                <div className="card-banner img-holder" style={{'--width': '300', '--height': '380'}}>
                  <img 
                    src={game.image} 
                    width="300" 
                    height="380" 
                    loading="lazy" 
                    alt={game.alt} 
                    className="img-cover"
                  />
                </div>

                <div className="card-content">
                  <h3 className="h3 card-title">{game.title}</h3>
                  <p className="card-subtitle">{game.platforms}</p>
                  
                  <div className="rewards-info">
                    <div className="reward-item">
                      <Coins size={16} />
                      <span>{game.points} points</span>
                    </div>
                    <div className="reward-item">
                      <Star size={16} />
                      <span>{game.xp} XP</span>
                    </div>
                  </div>

                  <button className="btn skewBg">Start Earning</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FeaturedGames
