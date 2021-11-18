import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style001.css";
import VideoCard from "../../Assets/VideoCard-3.png";
import VideoCard1 from "../../Assets/VideoCard-1.png";
import VideoCard2 from "../../Assets/VideoCard-2.png";
import VideoCard3 from "../../Assets/VideoCard-4.png";
import VideoCard5 from "../../Assets/VideoCard-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data/games.json'


class Carousel extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
        };

        return (
            <section className="carousel">
                <Slider {...settings}>
                    {/* {data.map((item, index) => {
                        return (
                            <img src={item.imagem1} alt="" key={index} />
                        )
                    })} */}
                    <div>
                        <Link to="/Detalhes"><img src={VideoCard} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard1} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard2} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard3} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard5} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard1} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard2} alt="jogo" /></Link>
                    </div><div>
                        <Link to="/Detalhes"><img src={VideoCard3} alt="jogo" /></Link>
                    </div>
                </Slider>
            </section>
            
        );
    }
}

export default Carousel;