import React from 'react';
import history from '../history';
import './css/Welcome.scss';
import birthday from './image/birthday.jpg';
import first from './image/month1/img2.jpg'


function Welcome(){
    return (
        <div className="welcome-header">
           <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
            </div>
            {/* <img className="img1" src={birthday} alt=""/> */}
            <div className="welcome">
                <p className="kw1">HAPPY BIRTHDAY TO KOMUGHIL</p>
                <img src={first} alt="" className="first"/>
            {/* <p style={{color:'white'}}> Wish you happy birthday</p> */}
            <button onClick={()=>history.push('/Wishes')} className="btn-1"> <span>Next</span></button>
            </div>
        </div>
    )
}
export default Welcome