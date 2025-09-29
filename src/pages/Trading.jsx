import { useState, useEffect } from 'react'
import { MessageSquare, Send, Plus, Search, Filter, Bell, AlertCircle, CheckCircle, XCircle, Crown, Star, Coins, Users, Clock, Eye, RefreshCw, TrendingUp, Shield, Zap, Target, Award, Gamepad2, Sparkles, Flame, Diamond, ArrowRight, ArrowLeft, Heart, ThumbsUp, ThumbsDown, Edit3, Trash2, MoreHorizontal } from 'lucide-react'

const Trading = () => {
  const [activeTab, setActiveTab] = useState('browse')
  const [myListings, setMyListings] = useState([])
  const [tradingListings, setTradingListings] = useState([])
  const [offers, setOffers] = useState([])
  const [messages, setMessages] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [showListModal, setShowListModal] = useState(false)
  const [showOfferModal, setShowOfferModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [notifications, setNotifications] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [currentUser] = useState({
    id: 1,
    name: 'GamerPro123',
    avatar: '/assets/images/live-match-player-1.png'
  })

  // Sample data
  useEffect(() => {
    setMyListings([
      {
        id: 1,
        title: "Golden Dragon Pet",
        description: "Rare pet with special powers and abilities. Perfect for any collection!",
        itemType: "pets",
        game: "Grow a Garden",
        image: "/assets/images/shop-img-1.jpg",
        rarity: "legendary",
        listedDate: "2024-01-15",
        status: "active",
        views: 45,
        offers: 3
      },
      {
        id: 2,
        title: "Devil Fruit Pack",
        description: "Collection of powerful devil fruits for Blox Fruits",
        itemType: "fruits",
        game: "Blox Fruits",
        image: "/assets/images/shop-img-2.jpg",
        rarity: "epic",
        listedDate: "2024-01-14",
        status: "active",
        views: 32,
        offers: 1
      }
    ])

    setTradingListings([
      {
        id: 3,
        title: "Blox Fruits Gamepass",
        description: "Unlock special abilities and features in Blox Fruits",
        itemType: "gamepasses",
        game: "Blox Fruits",
        image: "/assets/images/shop-img-3.jpg",
        rarity: "epic",
        owner: {
          id: 2,
          name: "TradeMaster",
          avatar: "/assets/images/live-match-player-2.png",
          rating: 4.8
        },
        listedDate: "2024-01-14",
        views: 67,
        offers: 5
      },
      {
        id: 4,
        title: "Premium Tools Set",
        description: "Advanced tools for better gameplay in Grow a Garden",
        itemType: "tools",
        game: "Grow a Garden",
        image: "/assets/images/shop-img-4.jpg",
        rarity: "rare",
        owner: {
          id: 3,
          name: "GardenGuru",
          avatar: "/assets/images/featured-game-1.jpg",
          rating: 4.5
        },
        listedDate: "2024-01-13",
        views: 28,
        offers: 2
      },
      {
        id: 5,
        title: "Legendary Sword",
        description: "Powerful weapon with special abilities",
        itemType: "weapons",
        game: "Adopt Me",
        image: "/assets/images/featured-game-2.jpg",
        rarity: "legendary",
        owner: {
          id: 4,
          name: "WeaponSmith",
          avatar: "/assets/images/featured-game-3.jpg",
          rating: 4.9
        },
        listedDate: "2024-01-12",
        views: 89,
        offers: 8
      }
    ])

    setOffers([
      {
        id: 1,
        listing: {
          id: 1,
          title: "Golden Dragon Pet",
          image: "/assets/images/shop-img-1.jpg"
        },
        from: {
          id: 5,
          name: "OfferMaker",
          avatar: "/assets/images/featured-game-4.jpg",
          rating: 4.2
        },
        offeredItems: [
          {
            name: "Rare Sword",
            image: "/assets/images/shop-img-3.jpg",
            rarity: "rare"
          },
          {
            name: "Magic Potion",
            image: "/assets/images/shop-img-4.jpg",
            rarity: "epic"
          }
        ],
        message: "Would you trade this for my rare sword and magic potion? I can add some points too!",
        status: "pending",
        date: "2024-01-16",
        amount: 500
      },
      {
        id: 2,
        listing: {
          id: 2,
          title: "Devil Fruit Pack",
          image: "/assets/images/shop-img-2.jpg"
        },
        from: {
          id: 6,
          name: "FruitCollector",
          avatar: "/assets/images/blog-1.jpg",
          rating: 4.7
        },
        offeredItems: [
          {
            name: "Golden Apple",
            image: "/assets/images/blog-2.jpg",
            rarity: "legendary"
          }
        ],
        message: "I have a golden apple that might interest you!",
        status: "accepted",
        date: "2024-01-15",
        amount: 0
      }
    ])

    setMessages([
      {
        id: 1,
        from: {
          id: 5,
          name: "OfferMaker",
          avatar: "/assets/images/featured-game-4.jpg"
        },
        message: "Hi! I'm interested in your Golden Dragon Pet. Would you consider trading it?",
        timestamp: "2024-01-16 14:30",
        unread: true,
        listingId: 1
      },
      {
        id: 2,
        from: {
          id: 6,
          name: "FruitCollector",
          avatar: "/assets/images/blog-1.jpg"
        },
        message: "Thanks for accepting my trade offer! When can we complete the trade?",
        timestamp: "2024-01-15 16:45",
        unread: false,
        listingId: 2
      }
    ])
  }, [])

  const handleCreateListing = (newListing) => {
    const listing = {
      ...newListing,
      id: Date.now(),
      listedDate: new Date().toISOString().split('T')[0],
      status: 'active',
      views: 0,
      offers: 0
    }
    setMyListings(prev => [...prev, listing])
    setShowListModal(false)
  }

  const handleSendOffer = (offeredItems, message, amount) => {
    const newOffer = {
      id: Date.now(),
      listing: selectedItem,
      from: currentUser,
      offeredItems: offeredItems,
      message: message,
      status: "pending",
      date: new Date().toISOString().split('T')[0],
      amount: amount || 0
    }
    setOffers(prev => [...prev, newOffer])
    setShowOfferModal(false)
    setSelectedItem(null)
    
    if (notifications) {
      alert('Offer sent successfully!')
    }
  }

  const handleAcceptOffer = (offerId) => {
    setOffers(prev => 
      prev.map(offer => 
        offer.id === offerId 
          ? { ...offer, status: "accepted" }
          : offer
      )
    )
  }

  const handleRejectOffer = (offerId) => {
    setOffers(prev => 
      prev.map(offer => 
        offer.id === offerId 
          ? { ...offer, status: "rejected" }
          : offer
      )
    )
  }

  const handleSendMessage = (userId, message) => {
    const newMessage = {
      id: Date.now(),
      from: currentUser,
      to: { id: userId },
      message: message,
      timestamp: new Date().toLocaleString(),
      unread: false
    }
    setMessages(prev => [...prev, newMessage])
    setNewMessage('')
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#F59E0B'
      case 'accepted': return '#10B981'
      case 'rejected': return '#EF4444'
      default: return '#9CA3AF'
    }
  }

  const filteredListings = tradingListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || listing.itemType === filterType
    return matchesSearch && matchesFilter
  })

  const itemTypes = ['all', 'pets', 'fruits', 'gamepasses', 'tools', 'weapons', 'cosmetics']

  const tabs = [
    { id: 'browse', name: 'Browse Items', icon: <Eye size={20} />, count: filteredListings.length },
    { id: 'my-listings', name: 'My Listings', icon: <Plus size={20} />, count: myListings.length },
    { id: 'offers', name: 'Trade Offers', icon: <MessageSquare size={20} />, count: offers.filter(o => o.status === 'pending').length },
    { id: 'messages', name: 'Messages', icon: <MessageSquare size={20} />, count: messages.filter(m => m.unread).length }
  ]

  return (
    <div className="modern-trading-page">
      {/* Hero Section */}
      <div className="trading-hero-modern">
        <div className="hero-background-modern">
          <div className="gradient-mesh"></div>
          <div className="floating-elements">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="trading-header-modern">
            <div className="header-content-modern">
              <div className="title-section-modern">
                <div className="title-icon-modern">
                  <RefreshCw size={48} />
                </div>
                <h1 className="main-title-modern">Trading System</h1>
                <p className="subtitle-modern">Trade items with other players and build your collection</p>
                <div className="trading-stats-modern">
                  <div className="stat-item-modern">
                    <div className="stat-icon-modern">
                      <TrendingUp size={24} />
                    </div>
                    <div className="stat-content-modern">
                      <span className="stat-value-modern">1,247</span>
                      <span className="stat-label-modern">Active Trades</span>
                    </div>
                  </div>
                  <div className="stat-item-modern">
                    <div className="stat-icon-modern">
                      <Users size={24} />
                    </div>
                    <div className="stat-content-modern">
                      <span className="stat-value-modern">892</span>
                      <span className="stat-label-modern">Traders Online</span>
                    </div>
                  </div>
                  <div className="stat-item-modern">
                    <div className="stat-icon-modern">
                      <Award size={24} />
                    </div>
                    <div className="stat-content-modern">
                      <span className="stat-value-modern">98.5%</span>
                      <span className="stat-label-modern">Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs-section-modern">
        <div className="container">
          <div className="tabs-container-modern">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-modern ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-icon-modern">{tab.icon}</div>
                <span className="tab-text-modern">{tab.name}</span>
                {tab.count > 0 && (
                  <div className="tab-badge-modern">{tab.count}</div>
                )}
                {activeTab === tab.id && <div className="tab-indicator-modern"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section-modern">
        <div className="container">
          {/* Browse Items Tab */}
          {activeTab === 'browse' && (
            <div className="browse-modern">
              <div className="search-filters-modern">
                <div className="search-bar-modern">
                  <Search size={20} />
                  <input 
                    type="text" 
                    placeholder="Search items, games, or traders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input-modern"
                  />
                </div>
                <div className="filter-group-modern">
                  <Filter size={20} />
                  <select 
                    value={filterType} 
                    onChange={(e) => setFilterType(e.target.value)}
                    className="filter-select-modern"
                  >
                    {itemTypes.map(type => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="listings-grid-modern">
                {filteredListings.map(listing => (
                  <div key={listing.id} className="listing-card-modern">
                    <div className="listing-image-modern">
                      <img src={listing.image} alt={listing.title} />
                      <div 
                        className="rarity-badge-modern"
                        style={{ backgroundColor: getRarityColor(listing.rarity) }}
                      >
                        {listing.rarity}
                      </div>
                      <div className="listing-stats-modern">
                        <div className="stat-modern">
                          <Eye size={14} />
                          <span>{listing.views}</span>
                        </div>
                        <div className="stat-modern">
                          <MessageSquare size={14} />
                          <span>{listing.offers}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="listing-content-modern">
                      <h4 className="listing-title-modern">{listing.title}</h4>
                      <p className="listing-description-modern">{listing.description}</p>
                      <div className="listing-meta-modern">
                        <span className="item-type-modern">{listing.itemType}</span>
                        <span className="game-modern">{listing.game}</span>
                      </div>
                      
                      <div className="owner-info-modern">
                        <img src={listing.owner.avatar} alt={listing.owner.name} className="owner-avatar-modern" />
                        <div className="owner-details-modern">
                          <span className="owner-name-modern">{listing.owner.name}</span>
                          <div className="owner-rating-modern">
                            <Star size={12} />
                            <span>{listing.owner.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="listing-actions-modern">
                        <button 
                          className="offer-btn-modern"
                          onClick={() => {
                            setSelectedItem(listing)
                            setShowOfferModal(true)
                          }}
                        >
                          <MessageSquare size={16} />
                          Send Offer
                        </button>
                        <button 
                          className="message-btn-modern"
                          onClick={() => {
                            setSelectedUser(listing.owner)
                            setActiveTab('messages')
                          }}
                        >
                          <Send size={16} />
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My Listings Tab */}
          {activeTab === 'my-listings' && (
            <div className="my-listings-modern">
              <div className="my-listings-header-modern">
                <div className="header-content-modern">
                  <h3 className="section-title-modern">My Trading Listings</h3>
                  <p className="section-subtitle-modern">Manage your active trading listings</p>
                </div>
                <button 
                  className="create-listing-btn-modern"
                  onClick={() => setShowListModal(true)}
                >
                  <Plus size={20} />
                  Create New Listing
                </button>
              </div>
              
              <div className="listings-grid-modern">
                {myListings.map(listing => (
                  <div key={listing.id} className="listing-card-modern my-listing-modern">
                    <div className="listing-image-modern">
                      <img src={listing.image} alt={listing.title} />
                      <div 
                        className="rarity-badge-modern"
                        style={{ backgroundColor: getRarityColor(listing.rarity) }}
                      >
                        {listing.rarity}
                      </div>
                      <div className="listing-stats-modern">
                        <div className="stat-modern">
                          <Eye size={14} />
                          <span>{listing.views}</span>
                        </div>
                        <div className="stat-modern">
                          <MessageSquare size={14} />
                          <span>{listing.offers}</span>
                        </div>
                      </div>
                      <div className={`status-badge-modern ${listing.status}`}>
                        {listing.status === 'active' ? 'Active' : 'Inactive'}
                      </div>
                    </div>
                    
                    <div className="listing-content-modern">
                      <h4 className="listing-title-modern">{listing.title}</h4>
                      <p className="listing-description-modern">{listing.description}</p>
                      <div className="listing-meta-modern">
                        <span className="item-type-modern">{listing.itemType}</span>
                        <span className="game-modern">{listing.game}</span>
                      </div>
                      
                      <div className="listing-date-modern">
                        Listed: {new Date(listing.listedDate).toLocaleDateString()}
                      </div>
                      
                      <div className="listing-actions-modern">
                        <button className="edit-btn-modern">
                          <Edit3 size={16} />
                          Edit
                        </button>
                        <button className="delete-btn-modern">
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Offers Tab */}
          {activeTab === 'offers' && (
            <div className="offers-modern">
              <div className="section-header-modern">
                <h3 className="section-title-modern">Trade Offers</h3>
                <p className="section-subtitle-modern">Manage incoming and outgoing trade offers</p>
              </div>
              
              <div className="offers-list-modern">
                {offers.map(offer => (
                  <div key={offer.id} className="offer-card-modern">
                    <div className="offer-header-modern">
                      <div className="offer-from-modern">
                        <img src={offer.from.avatar} alt={offer.from.name} className="user-avatar-modern" />
                        <div className="user-info-modern">
                          <h4 className="user-name-modern">{offer.from.name}</h4>
                          <div className="user-rating-modern">
                            <Star size={14} />
                            <span>{offer.from.rating}</span>
                          </div>
                          <span className="offer-date-modern">{offer.date}</span>
                        </div>
                      </div>
                      <div 
                        className={`offer-status-modern ${offer.status}`}
                        style={{ color: getStatusColor(offer.status) }}
                      >
                        {offer.status}
                      </div>
                    </div>
                    
                    <div className="offer-content-modern">
                      <div className="trade-items-modern">
                        <div className="offering-modern">
                          <h5 className="trade-section-title-modern">They're offering:</h5>
                          <div className="items-list-modern">
                            {offer.offeredItems.map((item, index) => (
                              <div key={index} className="offered-item-modern">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details-modern">
                                  <span className="item-name-modern">{item.name}</span>
                                  <span 
                                    className="item-rarity-modern"
                                    style={{ color: getRarityColor(item.rarity) }}
                                  >
                                    {item.rarity}
                                  </span>
                                </div>
                              </div>
                            ))}
                            {offer.amount > 0 && (
                              <div className="points-offer-modern">
                                <Coins size={16} />
                                <span>+{offer.amount} points</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="arrow-modern">
                          <ArrowRight size={24} />
                        </div>
                        
                        <div className="requesting-modern">
                          <h5 className="trade-section-title-modern">For your:</h5>
                          <div className="requested-item-modern">
                            <img src={offer.listing.image} alt={offer.listing.title} />
                            <span className="item-name-modern">{offer.listing.title}</span>
                          </div>
                        </div>
                      </div>
                      
                      {offer.message && (
                        <div className="offer-message-modern">
                          <strong>Message:</strong> {offer.message}
                        </div>
                      )}
                      
                      {offer.status === 'pending' && (
                        <div className="offer-actions-modern">
                          <button 
                            className="accept-btn-modern"
                            onClick={() => handleAcceptOffer(offer.id)}
                          >
                            <CheckCircle size={16} />
                            Accept
                          </button>
                          <button 
                            className="reject-btn-modern"
                            onClick={() => handleRejectOffer(offer.id)}
                          >
                            <XCircle size={16} />
                            Reject
                          </button>
                          <button 
                            className="message-btn-modern"
                            onClick={() => {
                              setSelectedUser(offer.from)
                              setActiveTab('messages')
                            }}
                          >
                            <MessageSquare size={16} />
                            Message
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="messages-modern">
              <div className="messages-container-modern">
                <div className="messages-list-modern">
                  <h3 className="section-title-modern">Conversations</h3>
                  {messages.map(message => (
                    <div 
                      key={message.id} 
                      className={`message-item-modern ${message.unread ? 'unread' : ''}`}
                      onClick={() => setSelectedUser(message.from)}
                    >
                      <img src={message.from.avatar} alt={message.from.name} className="user-avatar-modern" />
                      <div className="message-info-modern">
                        <h4 className="user-name-modern">{message.from.name}</h4>
                        <p className="message-preview-modern">{message.message}</p>
                        <span className="message-time-modern">{message.timestamp}</span>
                      </div>
                      {message.unread && <div className="unread-indicator-modern"></div>}
                    </div>
                  ))}
                </div>
                
                {selectedUser && (
                  <div className="chat-container-modern">
                    <div className="chat-header-modern">
                      <img src={selectedUser.avatar} alt={selectedUser.name} className="user-avatar-modern" />
                      <h4 className="user-name-modern">{selectedUser.name}</h4>
                    </div>
                    
                    <div className="chat-messages-modern">
                      {messages
                        .filter(m => m.from.id === selectedUser.id || m.to?.id === selectedUser.id)
                        .map(message => (
                          <div key={message.id} className={`chat-message-modern ${message.from.id === currentUser.id ? 'sent' : 'received'}`}>
                            <p className="message-text-modern">{message.message}</p>
                            <span className="message-time-modern">{message.timestamp}</span>
                          </div>
                        ))
                      }
                    </div>
                    
                    <div className="chat-input-modern">
                      <input 
                        type="text" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="message-input-modern"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && newMessage.trim()) {
                            handleSendMessage(selectedUser.id, newMessage)
                          }
                        }}
                      />
                      <button 
                        className="send-btn-modern"
                        onClick={() => {
                          if (newMessage.trim()) {
                            handleSendMessage(selectedUser.id, newMessage)
                          }
                        }}
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create Listing Modal */}
      {showListModal && (
        <div className="modal-overlay-modern">
          <div className="modal-content-modern">
            <div className="modal-header-modern">
              <h3 className="modal-title-modern">Create New Listing</h3>
              <button 
                className="modal-close-modern"
                onClick={() => setShowListModal(false)}
              >
                <XCircle size={24} />
              </button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const newListing = Object.fromEntries(formData.entries())
              handleCreateListing(newListing)
            }} className="modal-form-modern">
              <div className="form-group-modern">
                <label className="form-label-modern">Item Title</label>
                <input type="text" name="title" required className="form-input-modern" />
              </div>
              <div className="form-group-modern">
                <label className="form-label-modern">Description</label>
                <textarea name="description" required className="form-textarea-modern"></textarea>
              </div>
              <div className="form-row-modern">
                <div className="form-group-modern">
                  <label className="form-label-modern">Item Type</label>
                  <select name="itemType" required className="form-select-modern">
                    {itemTypes.filter(t => t !== 'all').map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group-modern">
                  <label className="form-label-modern">Game</label>
                  <select name="game" required className="form-select-modern">
                    <option value="Blox Fruits">Blox Fruits</option>
                    <option value="Grow a Garden">Grow a Garden</option>
                    <option value="Adopt Me">Adopt Me</option>
                    <option value="Tower Defense">Tower Defense</option>
                  </select>
                </div>
              </div>
              <div className="form-row-modern">
                <div className="form-group-modern">
                  <label className="form-label-modern">Rarity</label>
                  <select name="rarity" required className="form-select-modern">
                    <option value="common">Common</option>
                    <option value="rare">Rare</option>
                    <option value="epic">Epic</option>
                    <option value="legendary">Legendary</option>
                  </select>
                </div>
                <div className="form-group-modern">
                  <label className="form-label-modern">Image URL</label>
                  <input type="url" name="image" required className="form-input-modern" />
                </div>
              </div>
              <div className="modal-actions-modern">
                <button type="button" className="btn-secondary-modern" onClick={() => setShowListModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary-modern">Create Listing</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Send Offer Modal */}
      {showOfferModal && selectedItem && (
        <div className="modal-overlay-modern">
          <div className="modal-content-modern">
            <div className="modal-header-modern">
              <h3 className="modal-title-modern">Send Trade Offer</h3>
              <button 
                className="modal-close-modern"
                onClick={() => setShowOfferModal(false)}
              >
                <XCircle size={24} />
              </button>
            </div>
            <div className="offer-form-modern">
              <div className="offering-item-modern">
                <h4 className="form-section-title-modern">You're offering:</h4>
                <div className="items-selection-modern">
                  {myListings.filter(item => item.status === 'active').map(item => (
                    <label key={item.id} className="item-checkbox-modern">
                      <input type="checkbox" />
                      <img src={item.image} alt={item.title} />
                      <span className="item-name-modern">{item.title}</span>
                    </label>
                  ))}
                </div>
                <div className="points-offer-modern">
                  <label className="form-label-modern">Additional Points (optional)</label>
                  <input type="number" placeholder="0" min="0" className="form-input-modern" />
                </div>
              </div>
              
              <div className="requesting-item-modern">
                <h4 className="form-section-title-modern">For their:</h4>
                <div className="requested-item-modern">
                  <img src={selectedItem.image} alt={selectedItem.title} />
                  <span className="item-name-modern">{selectedItem.title}</span>
                </div>
              </div>
              
              <div className="form-group-modern">
                <label className="form-label-modern">Message (optional)</label>
                <textarea placeholder="Add a message to your offer..." className="form-textarea-modern"></textarea>
              </div>
              
              <div className="modal-actions-modern">
                <button className="btn-secondary-modern" onClick={() => setShowOfferModal(false)}>Cancel</button>
                <button className="btn-primary-modern" onClick={() => handleSendOffer([], '', 0)}>Send Offer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Toggle */}
      <div className="notifications-toggle-modern">
        <label className="toggle-label-modern">
          <input 
            type="checkbox" 
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          <Bell size={16} />
          <span>Enable Notifications</span>
        </label>
      </div>
    </div>
  )
}

export default Trading
