import React from 'react';

import '../styles/SubContentReach.css'
import Reach from '../elements/contentimages/reach.png'

function SubConetentWhole () {
    return (
        <div className="max_width subContainerReach">
            <div className="image-reach">
                    <img src={Reach} alt="Reach"/>
            </div>
            <div className="subContent">
                <h3>Unistay - Quick, Secure and Affordable,</h3>
                <p>This is an online platform that will help you reach your destination at the click of a button, We are here to give you quick, fast and affordable solutions to your accomodation problems and questions. 
                We provide you with boarding houses from all over the country and help you pick your favourite one from our choices, We filter for you your best choice of selection. Our Clients are the most important people to
                us so we make sure they are satisfied.</p>
            </div>
        </div>
    )
}

export default SubConetentWhole