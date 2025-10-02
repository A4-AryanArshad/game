import { User, Calendar, ChevronRight } from 'lucide-react'

const Blog = () => {
  const updates = [
    { 
      id: 1, 
      image: '/assets/images/blog-1.jpg', 
      title: 'New Roblox Games Added', 
      date: '2024-01-15', 
      alt: 'New Roblox Games Added',
      description: 'We\'ve added 5 new Roblox games to our platform including Blox Fruits and Grow a Garden!'
    },
    { 
      id: 2, 
      image: '/assets/images/blog-2.jpg', 
      title: 'Daily Wheel Redesign', 
      date: '2024-01-10', 
      alt: 'Daily Wheel Redesign',
      description: 'The daily wheel has been completely redesigned with a cleaner look and better animations.'
    },
    { 
      id: 3, 
      image: '/assets/images/blog-3.jpg', 
      title: 'Leaderboard Updates', 
      date: '2024-01-05', 
      alt: 'Leaderboard Updates',
      description: 'Simplified leaderboard now shows rankings only by points earned for better clarity.'
    }
  ]

  return (
    <section className="section blog" id="blog" aria-label="latest updates">
      <div className="container">
        <h2 className="h2 section-title">Latest <span className="span">Updates</span></h2>
        <p className="section-text">Stay updated with the latest changes and improvements to our gaming platform</p>
        <ul className="blog-list">
          {updates.map((update) => (
            <li key={update.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{'--width': '400', '--height': '290'}}>
                  <img src={update.image} width="400" height="290" loading="lazy" alt={update.alt} className="img-cover" />
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item"><User size={14} /><a href="#" className="item-text">Admin</a></li>
                    <li className="card-meta-item"><Calendar size={14} /><time dateTime={update.date} className="item-text">{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></li>
                  </ul>
                  <h3><a href="#" className="card-title">{update.title}</a></h3>
                  <p className="card-text">{update.description}</p>
                  <a href="#" className="card-link"><span className="span">Read More</span><ChevronRight size={16} /></a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Blog
