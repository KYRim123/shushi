import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom' 
import './headerStyle.scss'
import images from '../../assets/img'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClose, faMoon, faBars, faSun} from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [iconTheme, setIconTheme] = useState(faMoon)
    const navItem = [
        {to: '/', name: 'home'},
        {to: '/', name: 'about us'},
        {to: '/', name: 'popular'},
        {to: '/', name: 'recently'},
    ]
    const handleShowMenu = () => {
        setShowMenu(true)
    } 

    const handleCloseMenu = () => {
        setShowMenu(false)
    } 
    //scroll add box shadow for header
    useEffect(() => {
        const handleScrollHeader = () => {
          const header = document.getElementById('header')
          window.scrollY >=50 ? header.classList.add('bg-header'):header.classList.remove('bg-header')
        };
        window.addEventListener('scroll', handleScrollHeader);
        // clean up
        return () => {
          window.removeEventListener('scroll', handleScrollHeader);
        };
      }, []); 

      const handleChangeTheme = () => {
        document.body.classList.toggle('dark--theme')
        document.body.classList.contains('dark--theme')?setIconTheme(faSun):setIconTheme(faMoon)
      }

    return (
    <header className='header' id='header' >
        <nav className='nav wide'>
            <Link to='/' className='nav__logo'>
                <img src={images.logo} alt='logo'/>
                <h2 className='nav__heading'>sushi</h2>
            </Link>
            <div className={`nav__menu ${showMenu ? 'show--menu':''}`}>
                <ul className='nav__list'>
                    {
                        navItem.map((item, index) => 
                            <li className='nav__item' key={index} onClick={handleCloseMenu}>
                                <Link to={item.to} className='nav__link'>{item.name}</Link>
                            </li>
                        )
                    }
                </ul>
                {/* close button */}
                <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
                    <FontAwesomeIcon icon={faClose}/>
                </div>
                <img src={images.leafBranch1} alt="navimage" className='nav__img1'/>
                <img src={images.leafBranch2} alt="navimage" className='nav__img2'/>
            </div>
            <div className="nav__buttons" >
                {/* theme change button */}
                <FontAwesomeIcon icon={iconTheme} onClick={handleChangeTheme} className='change-theme' id='theme-button'/>
                {/* toggle button */}
                <div className="nav__tonggle" onClick={handleShowMenu}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
