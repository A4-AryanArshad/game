import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import SearchBox from './SearchBox'
import BackToTop from './BackToTop'
import Footer from './Footer'

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isHeaderActive, setIsHeaderActive] = useState(false)
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false)

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

  return (
    <>
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
