import React from "react";
import butyhill from './img/beautiful-hill.jpg';
import hils from './img/hils.jpg';
import mount from './img/mountain-peak.jpg';
import beach from './img/beach.jpg';
import { CarouselItems } from "./CarouselItems";

export const Carousel: React.FC<{}>=()=>{
        let sourc:string='../img/hills.jpg';

    return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="Slide 3"></button>
        </div>
         <div className="carousel-inner ">
         <div className="carousel-item active">
            <img src={butyhill} height={500} className="d-block w-100 " alt="..."></img>
         </div>
         <div className="carousel-item">
            <img src={hils} height={500} className="d-block w-100 " alt="..."></img>
         </div>
         <div className="carousel-item">
            <img src={mount} height={500} className="d-block w-100 " alt="..."></img>
         </div>
         <div className="carousel-item">
            <img src={beach} height={500} className="d-block w-100 " alt="..."></img>
         </div>
         </div>
        
</div>

    )
}