import styles from './Card.module.css'
import { HiX } from 'react-icons/hi';

function Card({ img, text }) { 
    return (
        <div className={styles.card}>
            <div className={styles.headerCard}>
                <h1>Curiosidade</h1>
                <div><HiX /></div>
            </div>
            <div className={styles.contentCard}>
                <img className={styles.imgCard} src={img} alt="Imagem da curiosidade"></img>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card;
