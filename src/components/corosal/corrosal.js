import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/p12.jpg';
import img2 from '../../assets/p14.jpg';

 
class DemoCarousel extends Component {
    render(){
        return (
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                </div>
            </Carousel>
        );
    }
};


export default DemoCarousel