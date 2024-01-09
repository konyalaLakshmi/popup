// Write your code here
import './index.css'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {withRouter, Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <div className="nav">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="b"
            aria-label="Toggle Menu"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-container"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              aria-label="Close Menu"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>

            <ul className="ul">
              <li className="li">
                <Link to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="p">Home</p>
                </Link>
              </li>
              <li className="li">
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="36" />
                  <p className="p">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
