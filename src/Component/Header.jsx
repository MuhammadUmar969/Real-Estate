import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import logo from '/public/images/logo.png'

const Header = () => {

  const [menuOpened, menuClosed] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right : !menuOpened && "-100%"}
    }
  }

  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src={logo} alt="logo" width={100} />

              <div className="flexCenter h-menu"
               style={getMenuStyles(menuOpened)}>
                <a href="">Residences</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <a href="">
                    <button className="button">
                        Contact
                    </button>
                </a>
              </div>

        <div className="menu-icon" onClick={() => menuClosed((prev) => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
      </section> 
    </>
  )
}

export default Header
