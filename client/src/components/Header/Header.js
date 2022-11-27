import React from 'react'
import {Link} from 'react-router-dom' 
import './headerStyle.scss'
import images from '../../assets/img'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose, faMoon, faBars} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className='header' id='header'>
        <nav className='nav wide'>
            <Link to='/' className='nav__logo'>
                <img src={images.logo}/>
                <h2 className='nav__heading'>sushi</h2>
            </Link>
            <div className='nav__menu'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                    <Link to='/' className='nav__link'>home</Link>
                    </li>
                    <li className='nav__item'>
                    <Link to='/' className='nav__link'>about us</Link>
                    </li>
                    <li className='nav__item'>
                    <Link to='/' className='nav__link'>popular</Link>
                    </li>
                    <li className='nav__item'>
                    <Link to='/' className='nav__link'>recently</Link>
                    </li>
                </ul>
                {/* close button */}
                <div className="nav__close" id="nav-close">
                    <FontAwesomeIcon icon={faClose}/>
                </div>
                <img src={images.nav_img_1} alt="nav  image" className='nav__img1'/>
                <img src={images.nav_img_2} alt="nav  image" className='nav__img2'/>
            </div>
            <div className="nav__buttons">
                {/* theme change button */}
                {/* <FontAwesomeIcon icon={faMoon} className='change-theme' id='theme-button'/> */}
                {/* toggle button */}
                <div className="nav__tonggle" id='nav-toggle'>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
