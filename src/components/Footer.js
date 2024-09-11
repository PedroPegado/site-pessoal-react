import styles from './Footer.module.css'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <footer>
            <div className={styles.socialInfos}>
                <div className={styles.email}>
                    <div>
                        <a target='_blank' href='mailto:pedrohenri1529@gmail.com'>
                            <MdEmail className={styles.emailIcon} />
                        </a>
                    </div>
                    <h2>Email</h2>
                    <p>pedrohenri1529@gmail.com</p>
                </div>
                <div className={styles.github}>
                    <div>
                        <a target='_blank' href='github.com/pedropegado'>
                            <FaGithub className={styles.githubIcon}/>
                        </a>
                    </div>
                    <h2>Github</h2>
                    <p>pedropegado</p>
                </div>
                <div className={styles.instagram}>
                    <div>
                        <a target='_blank' href='github.com/pedropegado'>
                            <FaInstagram className={styles.instagramIcon}/>
                        </a>
                    </div>
                    <h2>Instagram</h2>
                    <p>pedropegado_</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer