import React from 'react'
import '../styles/Maincontent.css'

//images
import Mobile001 from '../elements/contentimages/mobile001.png'

function Maincontent () {
    return (
        <div className="max_width Container">
            <div className="LeftContainer">
                <div className="Content">
                    <h3>A Place You'll Love</h3>
                    <p>This is place to help students find accommodation</p>
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