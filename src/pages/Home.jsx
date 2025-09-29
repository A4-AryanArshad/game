import Hero from '../components/Hero'
import Brand from '../components/Brand'
import LatestGames from '../components/LatestGames'
import LiveMatch from '../components/LiveMatch'

import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <Hero />
          <Brand />
                <div className="section-wrapper">
            <LatestGames />
            <LiveMatch />
          </div>
    
          <Blog />
          <Newsletter />
        </>
  )
}

export default Home
