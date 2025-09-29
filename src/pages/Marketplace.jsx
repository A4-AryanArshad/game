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
      image: "/assets/images/shop-img-1.jpg",
      rarity: "epic"
    },
    {
      id: 2,
      name: "Golden Dragon Pet",
      description: "Rare pet with special powers and abilities",
      game: "Grow a Garden",
      itemType: "pets",
      price: 800,
      image: "/assets/images/shop-img-2.jpg",
      rarity: "legendary"
    },
    {
      id: 3,
      name: "Devil Fruit Pack",
      description: "Collection of powerful devil fruits",
      game: "Blox Fruits",
      itemType: "fruits",
      price: 300,
      image: "/assets/images/shop-img-3.jpg",
      rarity: "rare"
    },
    {
      id: 4,
      name: "Premium Tools Set",
      description: "Advanced tools for better gameplay",
      game: "Grow a Garden",
      itemType: "tools",
      price: 200,
      image: "/assets/images/shop-img-4.jpg",
      rarity: "common"
    }
  ])

  const games = ['all', 'Blox Fruits', 'Grow a Garden', 'Adopt Me', 'Tower Defense']
  const itemTypes = ['all', 'gamepasses', 'pets', 'fruits', 'tools', 'weapons', 'cosmetics']

  const filteredItems = marketplaceItems.filter(item => {
    const gameMatch = selectedGame === 'all' || item.game === selectedGame
    const typeMatch = selectedItemType === 'all' || item.itemType === selectedItemType
    return gameMatch && typeMatch
  })

  const handleRedeem = (item) => {
    if (userPoints >= item.price) {
      setUserPoints(prev => prev - item.price)
      alert(`Successfully redeemed ${item.name} for ${item.price} points!`)
    } else {
      alert('Insufficient points!')
    }
  }

  const handleAddItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(),
      price: parseInt(newItem.price)
    }
    setMarketplaceItems(prev => [...prev, item])
    setShowAddItem(false)
  }

  const handleEditItem = (updatedItem) => {
    setMarketplaceItems(prev => 
      prev.map(item => 
        item.id === updatedItem.id ? { ...updatedItem, price: parseInt(updatedItem.price) } : item
      )
    )
    setEditingItem(null)
  }

  const handleDeleteItem = (itemId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setMarketplaceItems(prev => prev.filter(item => item.id !== itemId))
    }
  }

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
    <div className="marketplace-page">
      {/* Header Section */}
      <div className="marketplace-header">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title">
              <span className="title-icon"><ShoppingCart size={48} className="title-icon" /></span>
              Marketplace
            </h2>
            <p className="section-text">
              Redeem your earned points for amazing in-game items and rewards
            </p>
          </div>
          
          {/* Points Display */}
          <div className="points-display">
            <span className="points-icon"><Coins size={20} /></span>
            <span className="points-text">Your Points: {userPoints.toLocaleString()}</span>
          </div>
        </div>
      </div>

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

      {/* Admin Controls */}
      {isAdmin && (
        <div className="admin-controls">
          <div className="container">
            <div className="admin-header">
              <h3>Admin Controls</h3>
              <button 
                className="admin-btn add-btn"
                onClick={() => setShowAddItem(true)}
              >
                <Plus size={20} /> Add New Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Items Grid */}
      <div className="marketplace-items">
        <div className="container">
          <div className="marketplace-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="marketplace-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                  <div 
                    className="rarity-badge"
                    style={{ backgroundColor: getRarityColor(item.rarity) }}
                  >
                    {item.rarity}
                  </div>
                  {isAdmin && (
                    <div className="admin-actions">
                      <button 
                        className="admin-action-btn edit-btn"
                        onClick={() => setEditingItem(item)}
                      >
                        <Edit size={16} />
                      </button>
                      <button 
                        className="admin-action-btn delete-btn"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="item-content">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="item-game">{item.game}</span>
                    <span className="item-type">{item.itemType}</span>
                  </div>
                  
                  <div className="item-footer">
                    <div className="item-price">
                      <Coins size={16} className="price-icon" />
                      <span className="price-amount">{item.price.toLocaleString()}</span>
                    </div>
                    <button 
                      className={`redeem-btn ${userPoints < item.price ? 'disabled' : ''}`}
                      onClick={() => handleRedeem(item)}
                      disabled={userPoints < item.price}
                    >
                      {userPoints < item.price ? 'Insufficient Points' : 'Redeem'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Item Modal */}
      {showAddItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Item</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const newItem = Object.fromEntries(formData.entries())
              handleAddItem(newItem)
            }}>
              <div className="form-group">
                <label>Item Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" required></textarea>
              </div>
              <div className="form-group">
                <label>Game</label>
                <select name="game" required>
                  <option value="">Select Game</option>
                  {games.filter(g => g !== 'all').map(game => (
                    <option key={game} value={game}>{game}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Item Type</label>
                <select name="itemType" required>
                  <option value="">Select Type</option>
                  {itemTypes.filter(t => t !== 'all').map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Price (Points)</label>
                <input type="number" name="price" required min="1" />
              </div>
              <div className="form-group">
                <label>Rarity</label>
                <select name="rarity" required>
                  <option value="common">Common</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                </select>
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input type="url" name="image" required />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setShowAddItem(false)}>Cancel</button>
                <button type="submit">Add Item</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Item Modal */}
      {editingItem && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Item</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const updatedItem = Object.fromEntries(formData.entries())
              handleEditItem({ ...updatedItem, id: editingItem.id })
            }}>
              <div className="form-group">
                <label>Item Name</label>
                <input type="text" name="name" defaultValue={editingItem.name} required />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" defaultValue={editingItem.description} required></textarea>
              </div>
              <div className="form-group">
                <label>Game</label>
                <select name="game" defaultValue={editingItem.game} required>
                  {games.filter(g => g !== 'all').map(game => (
                    <option key={game} value={game}>{game}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Item Type</label>
                <select name="itemType" defaultValue={editingItem.itemType} required>
                  {itemTypes.filter(t => t !== 'all').map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Price (Points)</label>
                <input type="number" name="price" defaultValue={editingItem.price} required min="1" />
              </div>
              <div className="form-group">
                <label>Rarity</label>
                <select name="rarity" defaultValue={editingItem.rarity} required>
                  <option value="common">Common</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                </select>
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input type="url" name="image" defaultValue={editingItem.image} required />
              </div>
              <div className="modal-actions">
                <button type="button" onClick={() => setEditingItem(null)}>Cancel</button>
                <button type="submit">Update Item</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Toggle (for demo purposes) */}
      <div className="admin-toggle">
        <button 
          className={`admin-toggle-btn ${isAdmin ? 'active' : ''}`}
          onClick={() => setIsAdmin(!isAdmin)}
        >
          {isAdmin ? '👑 Admin Mode' : '🔓 Enable Admin'}
        </button>
      </div>
    </div>
  )
}

export default Marketplace
