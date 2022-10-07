import React from 'react'
import '../styles/SubContent.css'

//images
import Abassordor from '../elements/contentimages/ambassadors.png'

function Maincontent () {
    return (
        <div className="max_width Container">
            <div className="Left">
                <div className="Content">
                    <div className='image'>
                        <img src={Abassordor} alt="Mobile"/>
                    </div>
                </div>
            </div>
            <div className='Right'>
            <div className="Content">
                    <h3>Be An Ambassador</h3>
                    <p>We pay you to be an ambassador for unistay</p>
                </div>
            </div>
        </div>
    )
}

export default Maincontent 