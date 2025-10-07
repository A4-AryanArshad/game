import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X, Coins, Crown, User, Settings, Trophy, Share2, Lock } from 'lucide-react'

const Header = ({ 
  isHeaderActive, 
  isNavOpen, 
  onToggleNav, 
  onCloseNav, 
  onToggleSearch,
  user,
  showProfileMenu,
  setShowProfileMenu,
  handleMenuNavigation,
  handleLogout
}) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="countdown-text">
            Welcome to <span className="span skewBg">Gamics</span> - Your Gaming Rewards Platform
          </div>

          <div className="social-wrapper">
            <p className="social-title">Follow us on :</p>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-tiktok"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`header-bottom skewBg ${isHeaderActive ? 'active' : ''}`}>
        <div className="container">
        {/* Logo - positioned top-left by default. 
            Add 'center' class to id="logo12" to switch to center positioning */}
        <Link to="/" id="logo12">
          <img src="./logo.png" alt="Logo" />
        </Link>

          <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/" className="navbar-link skewBg" onClick={onCloseNav}>Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/earn" className="navbar-link skewBg" onClick={onCloseNav}>Earn</Link>
              </li>
              <li className="navbar-item">
                <Link to="/marketplace" className="navbar-link skewBg" onClick={onCloseNav}>Marketplace</Link>
              </li>
              <li className="navbar-item">
                <Link to="/trading" className="navbar-link skewBg" onClick={onCloseNav}>Trading</Link>
              </li>
              <li className="navbar-item">
                <Link to="/leaderboard" className="navbar-link skewBg" onClick={onCloseNav}>Leaderboard</Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            {/* Profile Section */}
            <div className="profile-section-header">
              <div className="profile-container-header">
                <div className="profile-info-header">
                  <div className="profile-avatar-header">
                    <img src={user.avatar} alt={user.username} />
                    <div className="online-indicator-header"></div>
                  </div>
                  <div className="profile-details-header">
                    <div className="profile-points-header">
                      <Coins size={16} />
                      <span>{user.points.toLocaleString()}</span>
                    </div>
                    <div className="profile-level-header">
                      <Crown size={14} />
                      <span>Lv.{user.level}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="profile-toggle-header"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  ▼
                </button>

                {/* Profile Menu Dropdown */}
                {showProfileMenu && (
                  <div className="profile-menu-dropdown-header">
                    <div className="profile-menu-header">
                      <div className="menu-user-info">
                        <img src={user.avatar} alt={user.username} />
                        <div>
                          <h4>{user.username}</h4>
                          <p>{user.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="profile-menu-items">
                      <button 
                        className="profile-menu-item" 
                        onClick={() => handleMenuNavigation('profile')}
                      >
                        <User size={16} />
                        <span>View Profile</span>
                      </button>
                      <button 
                        className="profile-menu-item" 
                        onClick={() => handleMenuNavigation('settings')}
                      >
                        <Settings size={16} />
                        <span>Settings</span>
                      </button>
                      <button 
                        className="profile-menu-item" 
                        onClick={() => handleMenuNavigation('achievements')}
                      >
                        <Trophy size={16} />
                        <span>Achievements</span>
                      </button>
                      <button 
                        className="profile-menu-item" 
                        onClick={() => handleMenuNavigation('referral')}
                      >
                        <Share2 size={16} />
                        <span>Referral Code</span>
                      </button>
                      <div className="profile-menu-divider"></div>
                      <button className="profile-menu-item logout" onClick={handleLogout}>
                        <Lock size={16} />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button className="cart-btn" aria-label="cart">
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </button>

            <button className="search-btn" aria-label="open search" onClick={onToggleSearch}>
              <Search size={20} />
            </button>

            <button 
              className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`} 
              aria-label="toggle menu" 
              onClick={onToggleNav}
            >
              <Menu className="menu" size={30} />
              <X className="close" size={30} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
