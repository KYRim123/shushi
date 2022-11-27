import { Fragment } from 'react'
import Header from '../../components/Header'
import './layoutDefaultStyle.scss'

function LayoutDefault({children}) {
  return (
    <Fragment>
      <Header />
        <main className='main'>
          {children}
        </main>
    </Fragment>
  )
}

export default LayoutDefault
