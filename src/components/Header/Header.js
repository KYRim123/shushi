import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.scss'
import images from '../../assets/img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMoon, faBars, faSun } from '@fortawesome/free-solid-svg-icons'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [iconTheme, setIconTheme] = useState(faMoon)
    const [reload, setReload] = useState(false)
    const navItem = [
        { to: '#home', name: 'home' },
        { to: '#about', name: 'about us' },
        { to: '#popular', name: 'popular' },
        { to: '#recently', name: 'recently' },
    ]
    const handleShowMenu = () => {
        setShowMenu(true)
    }

    const handleCloseMenu = () => {
        setShowMenu(false)
    }
    //scroll add box shadow for header
    const handleScrollHeader = () => {
        const header = document.getElementById('header')
        window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader);
        // clean up
        return () => {
            window.removeEventListener('scroll', handleScrollHeader);
        };
    }, []);
    
    // //get theme from local Storage
    useEffect(() => {
        const themeLocal = JSON.parse(localStorage.getItem("select-theme")) || iconTheme
        setIconTheme(themeLocal)
        themeLocal.iconName === "sun" ? document.body.classList.add("dark--theme"):
        document.body.classList.remove("dark--theme")
      }, [reload])

    // //handle change theme 
      const handleChangeTheme =() => {
        let currentIcon;  
        iconTheme.iconName === "moon" ? currentIcon = faSun : currentIcon = faMoon
        localStorage.setItem("select-theme", JSON.stringify(currentIcon))
        setReload(!reload)
      }

      
    return (
        <header className='header' id='header' >
            <nav className='nav wide'>
                <Link to='/' className='nav__logo'>
                    <img src={images.logo} alt='logo' />
                    <h2 className='nav__heading'>sushi</h2>
                </Link>
                <div className={`nav__menu ${showMenu ? 'show--menu' : ''}`}>
                    <ul className='nav__list'>
                        {
                            navItem.map((item, index) =>
                                <li className='nav__item' key={index} onClick={handleCloseMenu}>
                                    <a href={item.to} className='nav__link'>{item.name}</a>
                                </li>
                            )
                        }
                    </ul>
                    {/* close button */}
                    <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                    <img src={images.leafBranch1} alt="navimage" className='nav__img1' />
                    <img src={images.leafBranch2} alt="navimage" className='nav__img2' />
                </div>
                <div className="nav__buttons" >
                    {/* theme change button */}
                    <FontAwesomeIcon icon={iconTheme} onClick={handleChangeTheme} className='change-theme' id='theme-button' />
                    {/* toggle button */}
                    <div className="nav__tonggle" onClick={handleShowMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
