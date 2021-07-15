import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/layout/Footer.module.scss';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.sosmed}>
                <a href="http://hmft.tf.itb.ac.id" aria-label="Website" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon 
                        className={styles.icons} 
                        icon="globe" 
                        size="lg" 
                    />
                </a>
                <a href="https://www.instagram.com/hmft_itb/?igshid=15ig0blth4s6" aria-label="Instagram" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon 
                        className={styles.icons}
                        icon={["fab", "instagram"]} 
                        size="lg" 
                    />
                </a>
                <a href="https://twitter.com/hmft_itb?lang=en" aria-label="Twitter" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon 
                        className={styles.icons} 
                        icon={["fab", "twitter"]} 
                        size="lg" 
                    />
                </a>
            </div>
            <p>&copy; HMFT-ITB 2021</p>
        </div>
    );
}