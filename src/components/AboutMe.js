import styles from './AboutMe.module.css'
import gif_pedro from '../assets/gifs/mode.gif'

function AboutMe() {
    return (
        <div id='SobreMim' className={styles.aboutMe}>
            <div className={styles.sectionTitle}>
                <h1>Sobre Mim</h1>
            </div>
            <div>
                <img className={styles.gifPedro} src={gif_pedro}></img>
                <p>Me chamo Pedro Henrique Pegado de Sá, tenho 19 anos e sou desenvolvedor desde os 15, minhas principais linguagens de programação utilizadas são Python, JavaScript e SQL, estou em formação para me tornar técnico de infórmatica pelo IFRN campus Ceará-Mirim.</p>
            </div>
        </div>     
    )
}

export default AboutMe