const AdSpace = ({ 
  type = 'banner', 
  title = 'Ad Area', 
  className = '', 
  size = 'medium',
  children 
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'ad-space-small'
      case 'large': return 'ad-space-large'
      default: return ''
    }
  }

  return (
    <div className={`ad-space ad-space-${type} ${getSizeClass()} ${className}`}>
      <div className="ad-space-content">
        <p className="ad-space-text">{title}</p>
        {children && (
          <div className="ad-space-children">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

// Layout Components for easy ad placement
export const AdLayout = ({ children, showSidebar = true }) => {
  return (
    <div className="ad-layout">
      <div className="ad-layout-main">
        {children}
      </div>
      {showSidebar && (
        <div className="ad-layout-sidebar">
          <AdSpace type="sidebar" title="Advertisement" />
        </div>
      )}
    </div>
  )
}

export const AdBanner = ({ className = '', children }) => {
  return (
    <AdSpace type="banner" title="Banner Ad" className={className}>
      {children}
    </AdSpace>
  )
}

export const AdSquare = ({ className = '', children }) => {
  return (
    <AdSpace type="square" title="Square Ad" className={className}>
      {children}
    </AdSpace>
  )
}

export const AdSidebar = ({ className = '', children }) => {
  return (
    <AdSpace type="sidebar" title="Sidebar Ad" className={className}>
      {children}
    </AdSpace>
  )
}

export default AdSpace
