import React from 'react'
import './footerStyle.scss'
import {Link} from 'react-router-dom'
import images from '../../assets/img'
import fonts from '../../assets/fonts'



function Footer() {
  const footerData = [
    {title: "Main Menu", nameLinks: ["About","Menus", "Offer", "Events"]},
    {title: "Information", nameLinks: ["Contact","Order & Returns", "Videos", "Reservation"]}
  ]
  return (
    <>
      {/* ========================Footer================ */}
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

export default Footer
