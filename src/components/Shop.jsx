import { Link } from 'react-router-dom'
import { Coins, Star, Zap } from 'lucide-react'

const Shop = () => {
  const featuredItems = [
    {
      id: 1,
      image: '/assets/images/shop-img-1.jpg',
      title: 'Blox Fruits Gamepass',
      category: 'gamepasses',
      price: 500,
      rarity: 'epic',
      alt: 'Blox Fruits Gamepass'
    },
    {
      id: 2,
      image: '/assets/images/shop-img-2.jpg',
      title: 'Golden Dragon Pet',
      category: 'pets',
      price: 800,
      rarity: 'legendary',
      alt: 'Golden Dragon Pet'
    },
    {
      id: 3,
      image: '/assets/images/shop-img-3.jpg',
      title: 'Devil Fruit Pack',
      category: 'fruits',
      price: 300,
      rarity: 'rare',
      alt: 'Devil Fruit Pack'
    },
    {
      id: 4,
      image: '/assets/images/shop-img-4.jpg',
      title: 'Premium Tools Set',
      category: 'tools',
      price: 200,
      rarity: 'common',
      alt: 'Premium Tools Set'
    }
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

  return (
    <section className="section shop" id="shop" aria-label="shop">
      <div className="container">
        <div className="section-title-wrapper">
          <h2 className="h2 section-title">
            Featured <span className="span">Rewards</span>
          </h2>
          <p className="section-text">
            Redeem your points for amazing in-game items and rewards
          </p>
        </div>

        <ul className="shop-list">
          {featuredItems.map((item) => (
            <li key={item.id}>
              <div className="shop-card">
                <div className="card-banner img-holder" style={{'--width': '300', '--height': '300'}}>
                  <img 
                    src={item.image} 
                    width="300" 
                    height="300" 
                    loading="lazy" 
                    alt={item.alt} 
                    className="img-cover"
                  />
                  <div 
                    className="rarity-badge"
                    style={{ backgroundColor: getRarityColor(item.rarity) }}
                  >
                    {item.rarity}
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="h3 card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.category}</p>
                  
                  <div className="price-info">
                    <div className="price">
                      <Coins size={16} />
                      <span>{item.price.toLocaleString()} points</span>
                    </div>
                  </div>

                  <Link to="/marketplace" className="btn skewBg">View in Marketplace</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="shop-cta">
          <h3>Ready to start earning and spending?</h3>
          <p>Join thousands of players earning points and redeeming rewards!</p>
          <div className="cta-actions">
            <Link to="/earn" className="btn skewBg">Start Earning</Link>
            <Link to="/marketplace" className="btn-outline">Browse All Items</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop
