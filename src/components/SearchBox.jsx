import { Search } from 'lucide-react'

const SearchBox = ({ isOpen, onClose }) => {
  return (
    <div className={`search-container ${isOpen ? 'active' : ''}`}>
      <div className="input-wrapper">
        <input 
          type="search" 
          name="search" 
          aria-label="search" 
          placeholder="Search here..." 
          className="search-field"
        />
        <button className="search-submit" aria-label="submit search" onClick={onClose}>
          <Search size={25} />
        </button>
        <button className="search-close" aria-label="close search" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default SearchBox
