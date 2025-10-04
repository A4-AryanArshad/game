import { useState, useEffect } from 'react'
import { Coins, ShoppingCart, Plus, Edit, Trash2, Crown, Star, Filter, Search, Minus, X, CheckCircle, AlertTriangle } from 'lucide-react'
import { AdLayout, AdBanner, AdSquare } from '../components/AdSpace'

const Marketplace = () => {
  const [selectedGame, setSelectedGame] = useState('all')
  const [selectedItemType, setSelectedItemType] = useState('all')
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [userPoints, setUserPoints] = useState(1250)
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [itemToRedeem, setItemToRedeem] = useState(null)

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

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const handleRedeem = (item) => {
    if (userPoints >= item.price) {
      setItemToRedeem(item)
      setShowConfirmation(true)
    } else {
      alert('Insufficient points! Complete more offers to earn points.')
    }
  }

  const confirmRedeem = (item) => {
    setUserPoints(userPoints - item.price)
    alert(`Successfully redeemed ${item.name} for ${item.price} points!`)
    setShowConfirmation(false)
    setItemToRedeem(null)
  }

  const handleCartRedeem = () => {
    const totalCost = getCartTotal()
    if (userPoints >= totalCost) {
      setItemToRedeem({ name: 'Cart Items', price: totalCost, cartItems: cart })
      setShowConfirmation(true)
    } else {
      alert('Insufficient points! Complete more offers to earn points.')
    }
  }

  const confirmCartRedeem = () => {
    const totalCost = getCartTotal()
    setUserPoints(userPoints - totalCost)
    alert(`Successfully redeemed ${cart.length} items for ${totalCost} points!`)
    setCart([])
    setShowCart(false)
    setShowConfirmation(false)
    setItemToRedeem(null)
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
      {/* Cart Button */}
      <div className="cart-button-container">
        <button 
          className="cart-button"
          onClick={() => setShowCart(true)}
        >
          <ShoppingCart size={24} />
          <span>Cart ({getCartItemCount()})</span>
          {getCartItemCount() > 0 && (
            <div className="cart-badge">{getCartItemCount()}</div>
          )}
        </button>
      </div>

      {/* Main Content with Right Sidebar Ad */}
      <AdLayout>
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
                      <div className="item-actions">
                        <button 
                          className="add-to-cart-btn"
                          onClick={() => addToCart(item)}
                        >
                          <Plus size={16} />
                          Add to Cart
                        </button>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdLayout>

      {/* Cart Modal */}
      {showCart && (
        <div className="cart-modal">
          <div className="cart-modal-overlay" onClick={() => setShowCart(false)}></div>
          <div className="cart-modal-content">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button 
                className="close-cart-btn"
                onClick={() => setShowCart(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingCart size={48} />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <div className="cart-item-price">
                        <Coins size={16} />
                        <span>{item.price} points each</span>
                      </div>
                    </div>
                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="cart-item-total">
                      <Coins size={16} />
                      <span>{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <div className="total-row">
                    <span>Items: {getCartItemCount()}</span>
                    <span>{getCartTotal()} points</span>
                  </div>
                  <div className="total-row main-total">
                    <span>Total:</span>
                    <span>{getCartTotal()} points</span>
                  </div>
                </div>
                <div className="cart-actions">
                  <button 
                    className="clear-cart-btn"
                    onClick={() => setCart([])}
                  >
                    Clear Cart
                  </button>
                  <button 
                    className="checkout-btn"
                    onClick={handleCartRedeem}
                    disabled={userPoints < getCartTotal()}
                  >
                    <CheckCircle size={16} />
                    Redeem All ({getCartTotal()} points)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && itemToRedeem && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-overlay" onClick={() => setShowConfirmation(false)}></div>
          <div className="confirmation-modal-content">
            <div className="confirmation-header">
              <AlertTriangle size={32} className="warning-icon" />
              <h3>Confirm Redemption</h3>
            </div>
            
            <div className="confirmation-body">
              <p>Are you sure you want to redeem:</p>
              {itemToRedeem.cartItems ? (
                <div className="redeem-items">
                  <p><strong>{itemToRedeem.name}</strong></p>
                  <div className="items-list">
                    {itemToRedeem.cartItems.map(item => (
                      <div key={item.id} className="redeem-item">
                        <span>{item.name} x{item.quantity}</span>
                        <span>{item.price * item.quantity} points</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="redeem-item-single">
                  <p><strong>{itemToRedeem.name}</strong></p>
                  <p>Cost: <Coins size={16} /> {itemToRedeem.price} points</p>
                </div>
              )}
              <p className="balance-info">
                Your balance: <Coins size={16} /> {userPoints} points
              </p>
            </div>
            
            <div className="confirmation-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowConfirmation(false)}
              >
                Cancel
              </button>
              <button 
                className="confirm-btn"
                onClick={() => itemToRedeem.cartItems ? confirmCartRedeem() : confirmRedeem(itemToRedeem)}
              >
                <CheckCircle size={16} />
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Marketplace
