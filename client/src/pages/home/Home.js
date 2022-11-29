import React from 'react'
import { Link } from 'react-router-dom'
import './homeStyle.scss'
import images from '../../assets/img'
import fonts from '../../assets/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faShoppingBag, faPaperPlane} from '@fortawesome/free-solid-svg-icons'


function Home() {
  const popularCard = [
    { name: 'Onigiri',img: images.popularOnigiri, des: 'Japanese Dish', price: '$10.99' },
    { name: 'Spring Rolls',img: images.popularSpringRols, des: 'Japanese Dish', price: '$15.99' },
    { name: 'Sushi Rolls',img: images.popularSushiRolls, des: 'Japanese Dish', price: '$19.99' },
  ]
  const footerData = [
    {title: "Main Menu", nameLinks: ["About","Menus", "Offer", "Events"]},
    {title: "Information", nameLinks: ["Contact","Order & Returns", "Videos", "Reservation"]}
  ]
  return (
    <>
      {/* ==================Home======================= */}
      <section className='home wide' >
        <div className="home__container grid">
          <img src={images.homeImg} alt="home" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              enjoy delicious
              <div>
                <img src={images.sushiTitle} alt="sushi title" />
                shushi food
              </div>
            </h1>
            <p className="home__description">
              Enjoy a good dinner with the best dishes in
              the restaurant and improve your day.
            </p>
            <Link to='/' className='button'>
              order now
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </Link>
          </div>
        </div>
        <img src={images.leafBranch2} alt="nav" className='home__leaf1' />
        <img src={images.leafBranch4} alt="nav" className='home__leaf2' />
      </section>
      {/* ==================About======================= */}
      <section className='about wide'>
        <div className="about__container grid">
          <div className="about__data">
            <span className="section__subtitle">about us</span>
            <h2 className="section__title about__title">
              <div>
                We Provide
                <img src={images.aboutSushiTitle} alt="about sushi" />
              </div>

              Healthy Food
            </h2>
            <p className="about__description">
              Food comes to us from our relatives, whether they
              have wings or roots. This is how we consider food,
              it also has a culture. It has a history that passes
              from generation to generation.
            </p>
          </div>
          <img src={images.aboutSushi} alt="about" className='about__img' />
        </div>
        <img src={images.leafBranch1} alt="leaf1" className='about__leaf' />
      </section>
      {/* ==================Popular======================= */}
      <section className='popular wide'>
        <span className="section__subtitle">The Best Food</span>
        <h2 className="section__title">Popular Dishes</h2>
        <div className="popular__container grid">
          {
            popularCard.map((item, index) =>
            (
              <article key={index} className='popular__card'>
                <img src={item.img} alt="popularImg" className='popular__img' />
                <h3 className="poplular__name">{item.name}</h3>
                <p className="popular__description">{item.des}</p>
                <span className="popular__price">{item.price}</span>
                <button className="popular__button">
                  <FontAwesomeIcon icon={faShoppingBag} />
                </button>
              </article>
            )
            )
          }
        </div>
      </section>
      {/* ==================Recently======================= */}
      <section className="recently wide">
        <div className="recently__container grid">
          <div className="recently__data">
            <span className="section__subtitle">Recently Added</span>
            <h2 className="section__title">Sushi Samurai <br/> Salmón Cheese</h2>
            <p className="recently__description">Take a look at what's new. And do not deprive yourself of a good meal, enjoy and be happy.</p>
            <Link to='/' className='button'>
              order now
              <FontAwesomeIcon icon={faArrowRight} className='icon' />
            </Link>
            <img src={images.spinachLeaf} alt="recentlyDataImg" className='recently__data--img'/>
          </div>
          <img src={images.recentlySalmonSushi} alt="recentlyImg" className="recently__img" />
        </div>
        <img src={images.leafBranch2} alt="recentlyImg"  className='recently__img--leaf1'/>
        <img src={images.leafBranch3} alt="recentlyImg"  className='recently__img--leaf2'/>
      </section>
      {/* ==================newsletter======================= */}
      <section className="newsletter wide">
        <div className="newsletter__container">
          <div className="newsletter__content grid">
            <img src={images.newsletterSushi} alt="" className="newsletter__img"></img>
            <div className="newsletter__data">
              <span className="section__subtitle">Newsletter</span>
              <h2 className="section__title">
              Subscribe For <br/>
              Offer Updates
              </h2>

              <form action="" className="newsletter__form">
                <input type="email" placeholder='Enter Email' className='newsletter__input'/>
                <button className="button newsletter__button">
                 Subscribe
                 <FontAwesomeIcon icon={faPaperPlane} className='icon' />
                </button>
              </form>
            </div>
          </div>
          <img src={images.spinachLeaf} alt="spinach" className="newsletter__spinach" />
        </div>
      </section>
      {/* ========================newsletter================ */}
      <footer className="footer wide">
        <div className="footer__container grid">
          <div>
            <Link className="footer__logo">
              <img src={images.logo} alt="logo" />
              sushi
            </Link>
            <p className="footer__description">
              Food for the body is not <br/>
              enough. There must be food <br/>
              for the soul.
            </p>
          </div>

          <div className="footer__content">
            {
              footerData.map((item, index) => (
                <div key={index}>
                  <h3 className="footer__title">{item.title}</h3>
                  <ul className="footer__links">
                    {
                      item.nameLinks.map((link, index) => (
                        <li key={index}>
                          <Link className="footer__link">{link}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }

             <div>
                <h3 className="footer__title">Address</h3>
                <ul className="footer__links">
                  <li>
                    <Link className="footer__information">Av. Hacienda 1234 <br/> Lima 4321, Perú </Link>
                  </li>
                  <li>
                    <Link className="footer__information">9AM - 11PM</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="footer__title">Social Media</h3>
                <ul className="footer__social">
                  <li>
                    <a href='https://www.facebook.com/' className="footer__social--link">
                      <img className='icon' src={fonts.facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/' className="footer__social--link">
                      <img className='icon' src={fonts.instagram} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/' className="footer__social--link">
                      <img className='icon' src={fonts.twitter} alt="" />
                    </a>
                  </li>
        
                </ul>
              </div>
           
          </div>
          <img src={images.springOnion} alt="spring Onion" className="footer__onion" />
          <img src={images.spinachLeaf} alt="spinach" className="footer__spinach" />
          <img src={images.leafBranch4} alt="leaf4" className="footer__leaf4" />
        </div>
        <div className="footer__infor">
          <div className="footer__card">
            <img src={images.footerCard1} alt="footer Card1" />
            <img src={images.footerCard2} alt="footer Card2" />
            <img src={images.footerCard3} alt="footer Card3" />
            <img src={images.footerCard4} alt="footer Card4" />
          </div>
          <span className="footer__copy">
            @NguyenThanhLuong16012001
          </span>
        </div>
      </footer>
    </>
  )
}

export default Home
