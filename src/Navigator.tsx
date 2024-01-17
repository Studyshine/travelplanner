import React from 'react';
import './asset.scss';
import logoIcon from './img/road-trip.png';

export const Navigator:React.FC<{}>=()=>{

  const logoName="Heaven Holidays"

    return(
        <nav className="navbar navbar-expand-lg bg-body-primary pink shadow-lg p-3 fixed-top">
  <div className="container-fluid">
    <div>
      <img src={logoIcon} width={50} height={50}></img>
      </div>
      <div className='mt-3 ms-2'>
    <a className="navbar-brand text-light permanent-marker" href="#">{logoName}</a>
    </div>
    <button className="navbar-toggler text-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
       
        
      </ul>
      
    </div>
  </div>
</nav>

    );

}