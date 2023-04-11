import React, { useEffect } from 'react'
import './scrollUpStyle.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
function ScrollUp() {
  useEffect(() => {
    const handleScrollUp = () => {
      const scrollUp = document.getElementById('scrollUp');
      window.scrollY >= 400 ? scrollUp.classList.add('show__scroll'):scrollUp.classList.remove('show__scroll')
    }
    window.addEventListener('scroll', handleScrollUp)
    // /clean up
    return () => {
      window.removeEventListener('scroll', handleScrollUp)
    }
  }, [])

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0
    })
  }
  return (
    <div className='scrollUp' id='scrollUp' onClick={handleScrollUp}>
      <div className="scrollUp__container">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  )
}

export default ScrollUp
