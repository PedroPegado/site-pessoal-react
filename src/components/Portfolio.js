import styles from './Portfolio.module.css'
import PyGreenLogo from '../assets/imgs/LogoPygreen.png'
import PyTechLogo from '../assets/imgs/PyTechLogo.png'
import PopUp from './layout/PopUp'

function Portfolio() {
    return (
        <section id='Portfolio' className={styles.portfolio}> 
            <div className={styles.buttons}>
                <div >
                    <img src={ PyGreenLogo }></img>
                    <p>PyGreen - Flask</p>
                    <p>Projeto de site educativo com o objetivo de ensinar programação para jovens.</p>
                    <a target='_blank' href='https://github.com/pygreenIF/PyGreen-Site'>Ver mais</a>
                </div>
                <div className={styles.pytech}>
                    <img src={ PyTechLogo }></img>
                    <p>PyTech - Flask</p>
                    <p>Projeto de um eCommerce para venda de produtos tecnológicos</p>
                    <a target='_blank' href='https://github.com/PedroAug91/PyTech'>Ver mais</a>
                </div>
                <div>
                    <img src={ PyGreenLogo }></img>
                    <p>PyGreen - React</p>
                    <p>Remodelagem do PyGreen (site do primeiro card) utilizando React.</p>
                    <a target='_blank' href='https://github.com/pygreenIF/PyGreen-appweb'>Ver mais</a>
                </div>
            </div>
        </section>
    )   
}

export default Portfolio