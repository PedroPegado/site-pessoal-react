import styles from './Curiosities.module.css'
import Card from './layout/Card'
import BreakingBad from '../assets/imgs/breakingbad.png'
import Corgi from '../assets/imgs/corgi.png'
import Macaco from '../assets/imgs/macaco.png'
import OnePiece from '../assets/imgs/onepiece.png'
import S1mple from '../assets/imgs/s1mple.png'

function Curiosities() {
    return (
        <section id='Curiosidades' className={styles.curiosities}>
            <div className={styles.containerCards}>
                <Card 
                img={ Macaco } 
                text='Tenho o sonho de ter um macaco'/>
                <Card 
                img={ BreakingBad } 
                text='Minha série preferida é Breaking Bad'/>
                <Card 
                img={ Corgi } 
                text='Tenho o sonho de ter um corgi'/>
                <Card 
                img={ OnePiece } 
                text='Meu anime preferido é One Piece'/>
                <Card 
                img={ S1mple } 
                text='Já ganhei um item de R$300, abrindo uma caixa de skins de R$1,50 no Counter-Strike'/>
            </div>
        </section>
    )
}

export default Curiosities
