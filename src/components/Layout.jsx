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
      if (showProfileMenu && !event.target.closest('.profile-container-header')) {
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
      <Header
        isHeaderActive={isHeaderActive}
        isNavOpen={isNavOpen}
        onToggleNav={toggleNav}
        onCloseNav={closeNav}
        onToggleSearch={toggleSearch}
        user={user}
        showProfileMenu={showProfileMenu}
        setShowProfileMenu={setShowProfileMenu}
        handleMenuNavigation={handleMenuNavigation}
        handleLogout={handleLogout}
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
