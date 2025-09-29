import { Link } from 'react-router-dom'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

const Header = ({ isHeaderActive, isNavOpen, onToggleNav, onCloseNav, onToggleSearch }) => {
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
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`header-bottom skewBg ${isHeaderActive ? 'active' : ''}`}>
        <div className="container">
        <Link to="/" id="logo12">
  <img src="./logo.png" alt="Logo" style={{ height: "90px" }} />
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
                <Link to="/dashboard" className="navbar-link skewBg" onClick={onCloseNav}>Dashboard</Link>
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
              <li className="navbar-item">
                <Link to="/profile" className="navbar-link skewBg" onClick={onCloseNav}>Profile</Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
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
