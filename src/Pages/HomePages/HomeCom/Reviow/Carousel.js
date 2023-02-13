import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Bennar from "../Bennar";
import bikeImg from "../../../../assets/bikeImg.jpg";
import bikeimg2 from "../../../../assets/bikeimg2.jpg";
import bikeimg3 from "../../../../assets/bikeimg3.jpg";
import bikeimg4 from "../../../../assets/bikeimg4.jpg";
import bikeimg5 from "../../../../assets/bikeimg5.jpg";
import bikeimg6 from "../../../../assets/bikeimg6.jpg";
import bikeimg7 from "../../../../assets/bikeimg7.jpg";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper  my-10">
            <Carousel showArrows={false} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <Bennar bikeImg={bikeImg}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg2}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg3}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg4}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg5}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg6}/>
                </div>
                <div>
                    <Bennar bikeImg={bikeimg7}/>
                </div>
            </Carousel>
        </div>
    );
}
