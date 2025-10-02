import { useState, useEffect } from 'react'
import { Coins, ShoppingCart, Plus, Edit, Trash2, Crown, Star, Filter, Search } from 'lucide-react'

const Marketplace = () => {
  const [selectedGame, setSelectedGame] = useState('all')
  const [selectedItemType, setSelectedItemType] = useState('all')
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [userPoints, setUserPoints] = useState(1250)

  // Sample marketplace data
  const [marketplaceItems, setMarketplaceItems] = useState([
    {
      id: 1,
      name: "Blox Fruits Gamepass",
      description: "Unlock special abilities and features in Blox Fruits",
      game: "Blox Fruits",
      itemType: "gamepasses",
      price: 500,
      image: "/assets/images/featured-game-1.jpg",
      rarity: "epic"
    },
    {
      id: 2,
      name: "Golden Dragon Pet",
      description: "Rare pet with special powers and abilities",
      game: "Grow a Garden",
      itemType: "pets",
      price: 800,
      image: "/assets/images/featured-game-2.jpg",
      rarity: "legendary"
    },
    {
      id: 3,
      name: "Devil Fruit Pack",
      description: "Collection of powerful devil fruits",
      game: "Blox Fruits",
      itemType: "fruits",
      price: 300,
      image: "/assets/images/featured-game-3.jpg",
      rarity: "rare"
    },
    {
      id: 4,
      name: "Premium Tools Set",
      description: "Advanced tools for better gameplay",
      game: "Grow a Garden",
      itemType: "tools",
      price: 200,
      image: "/assets/images/featured-game-4.jpg",
      rarity: "common"
    },
    {
      id: 5,
      name: "Legendary Sword",
      description: "Powerful weapon with special abilities",
      game: "Blox Fruits",
      itemType: "weapons",
      price: 1200,
      image: "/assets/images/blog-1.jpg",
      rarity: "legendary"
    },
    {
      id: 6,
      name: "Magic Seeds Pack",
      description: "Rare seeds for growing special plants",
      game: "Grow a Garden",
      itemType: "seeds",
      price: 150,
      image: "/assets/images/blog-2.jpg",
      rarity: "rare"
    }
  ])

  const games = ['all', 'Blox Fruits', 'Grow a Garden']
  const itemTypes = ['all', 'gamepasses', 'pets', 'fruits', 'tools', 'weapons', 'seeds']

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#95A5A6'
      case 'rare': return '#3498DB'
      case 'epic': return '#9B59B6'
      case 'legendary': return '#F39C12'
      default: return '#95A5A6'
    }
  }

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'common': return '⚪'
      case 'rare': return '🔵'
      case 'epic': return '🟣'
      case 'legendary': return '🟡'
      default: return '⚪'
    }
  }

  const filteredItems = marketplaceItems.filter(item => {
    const gameMatch = selectedGame === 'all' || item.game === selectedGame
    const typeMatch = selectedItemType === 'all' || item.itemType === selectedItemType
    return gameMatch && typeMatch
  })

  const handleRedeem = (item) => {
    if (userPoints >= item.price) {
      setUserPoints(userPoints - item.price)
      alert(`Successfully redeemed ${item.name} for ${item.price} points!`)
    } else {
      alert('Insufficient points! Complete more offers to earn points.')
    }
  }

  const handleAddItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(),
      rarity: 'common'
    }
    setMarketplaceItems([...marketplaceItems, item])
    setShowAddItem(false)
  }

  const handleEditItem = (item) => {
    setEditingItem(item)
    setShowAddItem(true)
  }

  const handleDeleteItem = (itemId) => {
    setMarketplaceItems(marketplaceItems.filter(item => item.id !== itemId))
  }

  const handleUpdateItem = (updatedItem) => {
    setMarketplaceItems(marketplaceItems.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ))
    setShowAddItem(false)
    setEditingItem(null)
  }

  return (
    <div className="marketplace-page">
      {/* Filters Section */}
      <div className="marketplace-content">
        <div className="filters-section">
          <div className="filters-row">
            <div className="filter-group">
              <label>Filter by Game</label>
              <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
                {games.map(game => (
                  <option key={game} value={game}>
                    {game === 'all' ? 'All Games' : game}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label>Filter by Item Type</label>
              <select value={selectedItemType} onChange={(e) => setSelectedItemType(e.target.value)}>
                {itemTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="marketplace-items">
        <div className="container">
          <div className="marketplace-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="marketplace-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <div className="rarity-badge" style={{backgroundColor: getRarityColor(item.rarity)}}>
                    {getRarityIcon(item.rarity)} {item.rarity.toUpperCase()}
                  </div>
                </div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="item-game">{item.game}</span>
                    <span className="item-type">{item.itemType}</span>
                  </div>
                  <div className="item-footer">
                    <div className="item-price">
                      <Coins size={20} />
                      <span>{item.price}</span>
                    </div>
                    <button 
                      className="redeem-btn"
                      onClick={() => handleRedeem(item)}
                      disabled={userPoints < item.price}
                    >
                      {userPoints >= item.price ? 'Redeem' : 'Insufficient Points'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
