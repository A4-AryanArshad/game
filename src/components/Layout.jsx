import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Coins, Crown, User, Settings, Trophy, Share2, Lock } from 'lucide-react'
import Header from './Header'
import SearchBox from './SearchBox'
import BackToTop from './BackToTop'
import Footer from './Footer'

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  // Mock user data - in real app, this would come from context/state management
  const user = {
    username: 'GamingPro2024',
    email: 'gamingpro@example.com',
    level: 28,
    points: 45230,
    avatar: '/assets/images/live-match-player-1.png'
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsHeaderActive(scrollY >= 50)
      setIsBackToTopVisible(scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const closeSearch = () => setIsSearchOpen(false)

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-container-top-right')) {
        setShowProfileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showProfileMenu])

  const handleLogout = () => {
    alert('Logging out...')
    setShowProfileMenu(false)
  }

  const handleMenuNavigation = (section) => {
    setShowProfileMenu(false)
    
    switch (section) {
      case 'profile':
        // Navigate to dashboard or profile page
        window.location.href = '/dashboard'
        break
      case 'settings':
        window.location.href = '/dashboard'
        break
      case 'achievements':
        window.location.href = '/dashboard'
        break
      case 'referral':
        window.location.href = '/dashboard'
        break
      default:
        break
    }
  }

  return (
    <>
      {/* Profile Section - Top Right */}
      <div className="profile-section-top-right">
        <div className="profile-container-top-right">
          <div className="profile-info-top-right">
            <div className="profile-avatar-top-right">
              <img src={user.avatar} alt={user.username} />
              <div className="online-indicator-top-right"></div>
            </div>
            <div className="profile-details-top-right">
              <div className="profile-points-top-right">
                <Coins size={16} />
                <span>{user.points.toLocaleString()}</span>
              </div>
              <div className="profile-level-top-right">
                <Crown size={14} />
                <span>Lv.{user.level}</span>
              </div>
            </div>
          </div>
          
          <button 
            className="profile-toggle-top-right"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            ▼
          </button>

          {/* Profile Menu Dropdown */}
          {showProfileMenu && (
            <div className="profile-menu-dropdown">
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

      <Header
        isHeaderActive={isHeaderActive}
        isNavOpen={isNavOpen}
        onToggleNav={toggleNav}
        onCloseNav={closeNav}
        onToggleSearch={toggleSearch}
      />
      <SearchBox isOpen={isSearchOpen} onClose={closeSearch} />

      <main>
        <Outlet />
      </main>

      <Footer />
      <BackToTop isVisible={isBackToTopVisible} />
    </>
  )
}

export default Layout
