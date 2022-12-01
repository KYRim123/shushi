import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './layoutDefaultStyle.scss'

function LayoutDefault({children}) {
  return (
    <article className='wrapper'>
      <Header />
        <main className='main'>
          {children}
        </main>
      <Footer />  
    </article>
  )
}

export default LayoutDefault
