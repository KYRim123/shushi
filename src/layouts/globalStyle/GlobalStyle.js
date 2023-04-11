import ScrollUp from '../../components/ScrollUp/ScrollUp'
import './globalStyle.scss'
import './responsive.scss'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

function GlobalStyle({children}) {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 300,
      
    })
    sr.reveal('.home__img')
    sr.reveal('.home__data', {origin: 'bottom'})
    sr.reveal('.about__data, .recently__img', {origin: 'left'})
    sr.reveal('.about__img, .recently__data, .newsletter', {origin: 'right'})
    sr.reveal('.popular__card, .footer__content>div', {interval: 100})
  }, [])

  return (
    <div>
      {children}
      <ScrollUp />
    </div>
  )
}

export default GlobalStyle
