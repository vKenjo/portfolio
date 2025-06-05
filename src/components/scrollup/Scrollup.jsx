import React, { useEffect } from 'react';
import './scrollup.css';

const Scrollup = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector('.scrollup');
            if (scrollUp) {
                if (window.scrollY >= 560) {
                    scrollUp.classList.add('show-scroll');
                } else {
                    scrollUp.classList.remove('show-scroll');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="scrollup" onClick={scrollToTop} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <i className="uil uil-arrow-up scrollup_icon"></i>
        </button>
    );
}

export default Scrollup;
