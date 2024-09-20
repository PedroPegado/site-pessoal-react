import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    const [showNavLinks, setShowNavLinks] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000 && window.innerWidth > 768) {
                setShowNavLinks(true);
            } else {
                setShowNavLinks(false);
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={styles.headerContainer}>
            <div className={styles.navbar}>
                <div className={styles.headerName}>
                    <h1><a href='#'>Pedro Pegado</a></h1>
                </div>
                <button className={styles.hamburger} onClick={toggleMobileMenu}>
                    &#9776;
                </button>
                <div className={`${styles.navLinks} ${showNavLinks || isMobileMenuOpen ? styles.visible : ''}`}>
                    <ul>
                        <li><a href='#SobreMim'>Sobre mim</a></li>
                        <li><a href='#Curiosidades'>Curiosidades</a></li>
                        <li><a href='#Portfolio'>Portfólio</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
