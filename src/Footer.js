import {Link} from 'react-router-dom'
import IMG1 from './img/sns-1.png';
import IMG2 from './img/sns-2.png';
import IMG3 from './img/sns-3.png';
import './Footer.css';


function Footer(){
        return (
        <footer>
            <div id="bottomMenu">
                <ul>
                    <li><Link to="#">회사 소개</Link></li>
                    <li><Link to="#">개인정보처리방침</Link></li>
                    <li><Link to="#">펀딩약관</Link></li>
                    <li><Link to="#">사이트맵</Link></li>
                </ul>
                <div id="sns">
                    <ul>
                        <li><Link to="#"><img src={IMG1} alt=""/></Link></li>
                        <li><Link to="#"><img src={IMG2} alt=""/></Link></li>
                        <li><Link to="#"><img src={IMG3} alt=""/></Link></li>
                    </ul>
                </div>
            </div>
            <div id="company">
                <p>경기도 성남시 분당구 ***동 ****로 *** (대표전화) 123-456-7890</p>
            </div>
        </footer>  
        );
}

export default Footer;