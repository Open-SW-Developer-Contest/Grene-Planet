// router
import { BrowserRouter as Router} from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div id="container">
    <Router>
      <main>{children}</main>
    </Router>
    </div>
  )
}

export default Layout
