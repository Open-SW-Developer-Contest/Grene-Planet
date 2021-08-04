// router
import { BrowserRouter as Router} from 'react-router-dom'
import './Layout.css'
import Header from './page/Header'
import Footer from './page/Footer'

const Layout = ({ children }) => {
  return (
    <div id="container">
    <Router>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </Router>
    </div>
  )
}

export default Layout
