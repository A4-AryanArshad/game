import { ChevronUp } from 'lucide-react'

const BackToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a 
      href="#top" 
      className={`back-top-btn ${isVisible ? 'active' : ''}`} 
      aria-label="back to top" 
      onClick={(e) => {
        e.preventDefault()
        scrollToTop()
      }}
    >
      <ChevronUp size={20} />
    </a>
  )
}

export default BackToTop
