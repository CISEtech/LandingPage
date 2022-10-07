import {useRef} from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'

import '../styles/TopNav.css'

function TopNav () {

    const navRef = useRef();
    const ShowNavbar = () => {
        navRef.current.classList.toggle("Respond")
    }
    return (
        <div className="max_width container ">
        <nav ref={navRef}>
            <div className="logo">
                <h3>UnistayRooms</h3>
            </div>
            <div className="Options">
                <div className="Listing">
                    <h3>Waiting List</h3>
                </div>
                <div className="Listing">
                    <h3>LandLord</h3>
                </div>
                <div className="Listing">
                    <h3>Referal</h3>
                </div>
                <div className="Listing">
                    <h3>Ambassodors</h3>
                </div>
                <div className="Listing">
                    <h3>Partners</h3>
                </div>
                <button className='nav-btn nav-close-btn' onClick={ShowNavbar}>
                    <FaTimes/>
                </button>
                </div>
                <button className='nav-btn nav-open-btn' onClick={ShowNavbar}>
                    <FaBars/>
                </button>
            </nav>
        </div>
    )
}

export default TopNav 