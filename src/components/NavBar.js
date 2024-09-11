import styles from './NavBar.module.css'

function NavBar() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.navbar}>
                <div className={styles.headerName}>
                    <h1><a href='#'>Pedro Pegado</a></h1>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li><a href='#'>Sobre mim</a></li>
                        <li><a href='#'>Curiosidades</a></li>
                        <li><a href='#'>Portfólio</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar