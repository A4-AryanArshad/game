import { User, Calendar, ChevronRight } from 'lucide-react'
const Blog = () => {
  const posts = [
    { id: 1, image: '/assets/images/blog-1.jpg', title: 'Shooter Action Video', date: '2022-09-19', alt: 'Shooter Action Video' },
    { id: 2, image: '/assets/images/blog-2.jpg', title: 'The Walking Dead', date: '2022-09-19', alt: 'The Walking Dead' },
    { id: 3, image: '/assets/images/blog-3.jpg', title: 'Defense Of The Ancients', date: '2022-09-19', alt: 'Defense Of The Ancients' }
  ]
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <h2 className="h2 section-title">Latest News & <span className="span">Articles</span></h2>
        <p className="section-text">Compete With 100 Players On A Remote Island For Winner Takes Showdown Known Issue Where Certain Skin Strategic</p>
        <ul className="blog-list">
          {posts.map((p) => (
            <li key={p.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{'--width': '400', '--height': '290'}}>
                  <img src={p.image} width="400" height="290" loading="lazy" alt={p.alt} className="img-cover" />
                </figure>
                <div className="card-content">
                  <ul className="card-meta-list">
                    <li className="card-meta-item"><User size={14} /><a href="#" className="item-text">Admin</a></li>
                    <li className="card-meta-item"><Calendar size={14} /><time dateTime={p.date} className="item-text">September 19, 2022</time></li>
                  </ul>
                  <h3><a href="#" className="card-title">{p.title}</a></h3>
                  <p className="card-text">Compete With 100 Players On A Remote Island Thats Winner Takes Showdown Known Issue.</p>
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
