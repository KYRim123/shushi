import ScrollUp from '../../components/ScrollUp/ScrollUp'
import './globalStyle.scss'
import './responsive.scss'
function GlobalStyle({children}) {
  return (
    <div>
      {children}
      <ScrollUp />
    </div>
  )
}

export default GlobalStyle
