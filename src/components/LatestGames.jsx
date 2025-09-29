const LatestGames = () => {
    const games = [
      { id: 1, image: '/assets/images/latest-game-1.jpg', title: 'White Walker Daily', category: 'Zombie', price: 'Free', alt: 'White Walker Daily' },
      { id: 2, image: '/assets/images/latest-game-2.jpg', title: 'Hunter Killer II', category: 'Adventure', price: '$25.00', alt: 'Hunter Killer II' },
      { id: 3, image: '/assets/images/latest-game-3.jpg', title: 'Cyberpunk Daily', category: 'Action', price: '$25.00', alt: 'Cyberpunk Daily' }
    ]
    return (
      <section className="section latest-game" aria-label="latest game">
        <div className="container">
          <p className="section-subtitle">Latest Releases</p>
          <h2 className="h2 section-title">Create & <span className="span">Manage</span></h2>
          <ul className="has-scrollbar">
            {games.map((game) => (
              <li key={game.id} className="scrollbar-item">
                <div className="latest-game-card">
                  <figure className="card-banner img-holder" style={{'--width': '400', '--height': '470'}}>
                    <img src={game.image} width="400" height="470" loading="lazy" alt={game.alt} className="img-cover" />
                  </figure>
                  <div className="card-content">
                    <a href="#" className="card-badge skewBg">{game.category}</a>
                    <h3 className="h3"><a href="#" className="card-title">{game.title.replace('Daily','')}<span className="span"> Daily</span></a></h3>
                    <p className="card-price">Entry Fee : <span className="span">{game.price}</span></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  export default LatestGames
  