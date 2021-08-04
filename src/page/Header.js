import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
        return (
        <header>
            <div id="logo">
                <Link to="#">
                    <h1>Grene Planet</h1>
                </Link>
            </div>
            <nav>
            <ul id="topMenu">
                <li><Link to="#">환경 게시판 <span>▼</span></Link>
                    <ul>
                        <li><Link to="#">전염병</Link></li>
                        <li><Link to="#">미세먼지</Link></li>
                        <li><Link to="#">자연재해</Link></li>
                        <li><Link to="#">물, 식량 부족</Link></li>
                    </ul>
                </li>
                <li><Link to="#">News <span>▼</span></Link>
                    <ul>
                        <li><Link to="#">전염병</Link></li>
                        <li><Link to="#">미세먼지</Link></li>
                        <li><Link to="#">자연재해</Link></li>
                        <li><Link to="#">물, 식량 부족</Link></li>
                    </ul>
                </li>
                <li><Link to="#">펀딩 <span>▼</span></Link>
                    <ul>
                        <li><Link to="#">환경 굿즈</Link></li>
                        <li><Link to="#">환경 운동</Link></li>
                    </ul>
                </li>

                <li><Link to="#">홍보 게시판</Link></li>
            </ul>
        </nav>
        </header>
        )
}

export default Header;