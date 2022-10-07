import React from 'react'
import '../styles/SubContentStatic.css'

import Referral from '../elements/contentimages/referral.png'

function SubContentSlider () {
    return (
        <div className="max_width ContainerStatic">
            <div className="CarrierLeftContainer">
                <div className="Content">
                    <div className='image-container'>
                        <img src={Referral} alt="Referral"/>
                    </div>
                </div>
            </div>
            <div className='CarrierRightContainer'>
                <div className="Content">
                    <div className="item-data">
                            <h3>Be a Referal and Earn Something Worth your time</h3>
                            <div className="text">
                                <p>The referal section is there to let you help us get clients and we will compaset you for the valuable time and effort you have taken to get us that clients.
                                We do value our referals and make sure from every referal we give them a point of interest for the valuable time taken.</p>
                            </div>
                            <button className="">Join the waiting List</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubContentSlider 