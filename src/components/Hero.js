import styles from './Hero.module.css'

function Hero() {
    return(
        <section id='Hero' className={styles.heroPage}>
            <div>
                <h1><a href='#SobreMim'>SOBRE MIM</a></h1>
                <h1><a href='#Curiosidades'>CURIOSIDADES</a></h1>
                <h1><a href='#Portifolio'>PORTIFOLIO</a></h1>
            </div>
        </section>
    )
}

export default Hero