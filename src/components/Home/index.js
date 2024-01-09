// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="inner-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="mobile-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="desktop-img"
      />
    </div>
  </div>
)

export default Home
