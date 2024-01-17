import React from "react";
import boat from "./img/boathos.jpg"

export const Card:React.FC<{}>=()=>{
    return(
            <div className="container-fluid">
            <div className="card">
                <img src={boat} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"></p>
                    <a href="#" className="btn pink">Go somewhere</a>
                </div>
            </div>
            </div>
       
    )
}