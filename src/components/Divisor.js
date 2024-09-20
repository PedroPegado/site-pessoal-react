import styles from './Divisor.module.css';
import aboutMeDivisor from '../assets/imgs/SOBREMIM.png';
import curiositiesDivisor from '../assets/imgs/CURIOSIDADES.png';
import portfolioDivisor from '../assets/imgs/PORTFOLIO.png';

function Divisor({ pathImg }) {
  let backgroundImage = '';

  if (pathImg === 'aboutMe') {
    backgroundImage = aboutMeDivisor;
  } else if (pathImg === 'curiosities') {
    backgroundImage = curiositiesDivisor;
  } else if (pathImg === 'portfolio') {
    backgroundImage = portfolioDivisor;
  }

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: '100%',
        minHeight: '80px',
        backgroundRepeat: 'repeat-x'
      }}
      className={styles.divisor}
    >
    </section>
  );
}

export default Divisor;
