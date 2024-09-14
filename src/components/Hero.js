import styles from './Hero.module.css'

function Hero() {
    // document.addEventListener('DOMContentLoaded', function() {
    //     const elements = document.querySelectorAll('.element')
    
    //     function showOnScroll() {
    //       elements.forEach(el => {
    //         const elementTop = el.getBoundingClientRect().top
    //         const windowHeight = window.innerHeight;
            
    //         if (elementTop < windowHeight - 100) {
    //           el.classList.add('show')
    //         }
    //       })
    //     }
    
    //     window.addEventListener('scroll', showOnScroll);
    //     showOnScroll()
    //   })
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