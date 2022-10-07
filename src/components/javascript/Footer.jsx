import React from 'react';

import "../styles/Footer.css"

function Footer () {
    return (
        <footer className="max_width footer">
            <div className="container">
                    <div className="Content">
                        <h3>Cise Business Center</h3>
                        <p>Unistay Rooms A CISE Company</p>
                    </div>
                    <div className="Content">
                        <h3>Unistay Business Center</h3>
                        <div className='services'>
                            <div className='Links'>
                                <span><a href="#">LandLord</a></span>
                            </div>
                            <div className='Links'>
                                <a href="#">Tenants</a>
                            </div>
                            <div className='Links'>
                                <a href="#">Referral</a>
                            </div>
                            <div className='Links'>
                                <a href="#">Affiliate</a>
                            </div>
                            <div className='Links'>
                                <a href="#">Partnerships</a>
                            </div>
                        </div>
                    </div>
                    <div className="Content">
                        <h3>Follow Us On</h3>
                        <div className="social-links">
                            <div className='social'>
                                <span><a href="#">Facebook</a></span>
                            </div>
                            <div className='social'>
                                <span><a href="#">Instagram</a></span>
                            </div>
                            <div className='social'>
                                <span><a href="#">What's up</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="Content">
                        <h3>Contact</h3>
                        <div className='Contacts'>
                            <div className='Contact-Phone'>
                            <h3>Phone Numbers</h3>
                                <div className='Phone'>
                                    <a href='#'>+260 967 5708 56</a>
                                </div>
                                <div className='Phone'>
                                    <a href='#'>+260 975 4725 33</a>
                                </div>
                                <div className='Phone'>
                                    <a href='#'>+260 978 7589 60</a>
                                </div>
                            </div>
                            <div className='Contact-Email'>
                            <h3>Email Addresses</h3>
                                <div className='Email'>
                                    <a href='#'>unistayroomsbusiness@cisetechnologies.xyz</a>
                                </div>
                                <div className='Email'>
                                    <a href='#'>unistayroomsmarketing@cisetechnologies.xyz</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="Trademark">
                <h4>Unistay Rooms Copyright @ 2022</h4>
            </div>
        </footer>
    )
}

export default Footer 