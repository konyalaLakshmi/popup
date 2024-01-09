// Write your code here
import Header from '../Header'

import './index.css'

const NotFound = () => (
  <div className="notFound-container">
    <Header />
    <div className="inner">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="img"
      />
      <h1 className="h1">Lost Your Way?</h1>
      <p className="p">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
