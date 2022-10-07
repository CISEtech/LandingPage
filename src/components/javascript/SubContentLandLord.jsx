import React from 'react'
import '../styles/Maincontent.css'

//images
import Mobile001 from '../elements/contentimages/mobile001.png'

function Maincontent () {
    return (
        <div className="max_width Container">
            <div className="LeftContainer">
                <div className="Content">
                    <h3>You Have A Place To Offer</h3>
                    <p>Be a LandLord and get tenants from all over the continent, to come to your boarding house just by a click of a button</p>
                </div>
            </div>
            <div className='RightContainer'>
            <div className="Content">
                    <div className='image'>
                        <img src={Mobile001} alt="Mobile"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent 