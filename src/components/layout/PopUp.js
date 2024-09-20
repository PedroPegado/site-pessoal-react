import styles from './PopUp.module.css'

function PopUp({ img1, img2, img3, text, tecs }) {
    return (
        <div className={styles.popUpContainer}>
            <div className={styles.images}>
                <img src={img1}></img>
                <img src={img2}></img>
                <img src={img3}></img>
            </div>
            <div className={styles.texts}>
                <div className={styles.textAboutProject}>
                    <h1>Sobre o projeto</h1>
                    <p>{text}</p>
                </div>
                <div className={styles.textAboutProject}>
                    <p><span>Tecnologias utilizadas:</span>{tecs}</p>
                </div>
            </div>
        </div>
    )
}

export default PopUp