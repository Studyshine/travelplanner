import React from "react";

export const CarouselItems: React.FC<{imags:string}>=({imags})=>{

    return(

            <>
            <div className="carousel-item active">
            <img src={imags} className="d-block w-100" alt="..."></img>
            </div>
            </>
    );
} 