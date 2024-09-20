import styles from './Container.module.css'

function Container() {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container
