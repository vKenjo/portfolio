import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Kenjo</h1>

                {/*<ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>*/}

                <div className="footer_social">
                    <a href='https://www.instagram.com/vkenjo/' className='home_social-icon' target='_blank'>
                        <i class='bx bxl-instagram'></i>
                    </a>

                    <a href='www.linkedin.com/in/vkenjo' className='home_social-icon' target='_blank'>
                        <i class='bx bxl-linkedin'></i>
                    </a>

                    <a href='https://twitter.com/vKenjo' className='home_social-icon' target='_blank'>
                        <i class='bx bxl-twitter'></i>
                    </a>
                </div>

                <span className="footer_copy">
                    Josh Kenn Viray. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer