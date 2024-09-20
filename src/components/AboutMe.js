import styles from './AboutMe.module.css'
import gif_pedro from '../assets/gifs/mode.gif'
import { HiX } from 'react-icons/hi';

function AboutMe() {
    return (
        <div id='SobreMim' className={styles.aboutMe}>
            <div className={styles.cardAboutMe}>
                <div className={styles.headerCard}>
                    <h1>QUEM SOU EU?</h1>
                    <div><HiX /></div>
                </div>
                <div className={styles.contentCard}>
                    <img className={styles.gifPedro} src={gif_pedro}></img>
                    <p>Me chamo Pedro Henrique Pegado de Sá, tenho 19 anos e sou desenvolvedor desde os 15, minhas principais linguagens de programação utilizadas são Python, JavaScript e SQL, estou em formação para me tornar técnico de infórmatica pelo IFRN campus Ceará-Mirim. Pretendo continuar na carreira de programador, mas também tenho muitas curiosidades em relação ao teatro, história e ciência política.</p>
                </div>
            </div>
        </div>   
    )
}

export default AboutMe