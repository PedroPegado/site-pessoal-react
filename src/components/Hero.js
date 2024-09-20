import styles from './Hero.module.css'

function Hero() {
    return(
        <section id='Hero' className={styles.heroPage}>
            <div>
                <h1><a className='element' href='#SobreMim'>SOBRE MIM</a></h1>
                <h1><a className='element' href='#Curiosidades'>CURIOSIDADES</a></h1>
                <h1><a className='element' href='#Portifolio'>PORTIFÓLIO</a></h1>
            </div>
        </section>
    )
}

export default Hero