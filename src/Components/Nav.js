import React from 'react'
import './styles/nav.css'
function Nav() {
  return (
  <>
  
    <header>
        {/* <img src="banner.jpg" class="banner"> */}
        <a href="#" className="logo">LOGO.</a>
        <div className="toggle"></div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Feed</a></li>
                
            </ul>
          
        </nav>
    </header>



  </>
  )
}

export default Nav

