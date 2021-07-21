import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import image from '../public/logo/sekolahskullers.svg';
import styles from '../styles/layout/Footer.module.scss';

export default function FooterTest() {
  return (
    <div className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.sosmed}>
          <div className={styles.instagram}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={['fab', 'instagram']}
              size="3x"
            />
            <ul className={styles.links}>
              <li>
                <a
                  href="https://www.instagram.com/tf.itb/?hl=en"
                  aria-label="TF ITB"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tf.itb
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/hmft_itb/?hl=en"
                  aria-label="HMFT ITB"
                  target="_blank"
                  rel="noreferrer"
                >
                  @hmft_itb
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sekolahskullers/?hl=en"
                  aria-label="Sekolah Skullers"
                  target="_blank"
                  rel="noreferrer"
                >
                  @sekolahskullers
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tokoskullers/?hl=en"
                  aria-label="Toko Skullers"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tokoskullers
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.twitter}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={['fab', 'twitter']}
              size="3x"
            />
            <ul className={styles.links}>
              <li>
                <a
                  href="https://twitter.com/tfitb?lang=en"
                  aria-label="TF ITB"
                  target="_blank"
                  rel="noreferrer"
                >
                  @tfitb
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/akungimikss"
                  aria-label="Sekolah Skullers"
                  target="_blank"
                  rel="noreferrer"
                >
                  @akungimikss
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.website}>
            <FontAwesomeIcon className={styles.icons} icon="globe" size="3x" />
            <ul className={styles.links}>
              <li>
                <a
                  href="http://hmft.tf.itb.ac.id/"
                  aria-label="HMFT ITB"
                  target="_blank"
                  rel="noreferrer"
                >
                  hmft.tf.itb.ac.id
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.logo}>
          <Image src={image} width="100" height="100" alt="svg" />
            
        </div>
      </div>
      <div className={styles.copyright}>
        <p><span>&copy;</span> HMFT-ITB 2021</p>
      </div>
    </div>
  );
}
