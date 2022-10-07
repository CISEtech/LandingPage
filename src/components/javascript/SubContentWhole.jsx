import React from 'react';

import '../styles/SubContentWhole.css'
import Fast from '../elements/contentimages/fast.png'
import Security from '../elements/contentimages/secure.png'
import Affordable from '../elements/contentimages/affordable.png'

function SubConetentWhole () {
    return (
        <div className="max_width subContainer">
            <div className="subContent">
                <h3>Unistay Rooms - Quick, Secure and Affordable,</h3>
                <p>This is an online platform that will help you reach your destination at the click of a button, We are here to give you quick, fast and affordable solutions to your accomodation problems and questions. 
                We provide you with boarding houses from all over the country and help you pick your favourite one from our choices, We filter for you your best choice of selection. Our Clients are the most important people to
                us so we make sure they are satisfied.</p>
                <div className="image-container">
                    <div className="image-sector-1">
                        <img src={Fast} alt="Fast"/>
                        <h4>Quick Access</h4>
                    </div>
                    <div className="image-sector-2">
                        <img src={Fast} alt="Secure"/>
                        <h4>Secure Access</h4>
                    </div>
                    <div className="image-sector-2">
                        <img src={Fast} alt="Fast"/>
                        <h4>Affordable Access</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubConetentWhole