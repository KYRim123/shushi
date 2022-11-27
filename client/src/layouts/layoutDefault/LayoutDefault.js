import { Fragment } from 'react'
import Header from '../../components/Header'
import './layoutDefaultStyle.scss'

function LayoutDefault({children}) {
  return (
    <Fragment>
      <Header />
      <div className='main'>
        {children}
      </div>
    </Fragment>
  )
}

export default LayoutDefault
