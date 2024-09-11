import styles from './NavBar.module.css'

function NavBar() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.navbar}>
                <div className={styles.headerName}>
                    <h1><a href='#'>Pedro Pegado</a></h1>
                </div>
            </div>
        </header>
    )
}

export default NavBar