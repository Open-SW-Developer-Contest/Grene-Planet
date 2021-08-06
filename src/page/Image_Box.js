import Img1 from '../img/photo-1.jpg';
import Img2 from '../img/photo-2.jpg';
import Img3 from '../img/photo-3.jpg';
import './Image_Box.css';


function Image_Box() {
    return (
        <div id="slideShow">
            <div id="slides">
                <img src={Img1} alt=""/>
                <img src={Img2} alt=""/>
                <img src={Img3} alt=""/>
            </div>
        </div>
        );
}

export default Image_Box;