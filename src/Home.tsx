import React from "react";
import { Navigator} from "./Navigator";
import { Carousel } from "./Carousel";
import { Card } from "./Card";


export const Home:React.FC<{}>=()=>{
    let txt="FEATURED TOURS PACKAGES";
    return(
        <div>
        <Navigator/>
        <Carousel />
            <div className="h4 text-center mt-2">{txt}
            </div>
            <div className="row">
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            </div>
        </div>
    )
}