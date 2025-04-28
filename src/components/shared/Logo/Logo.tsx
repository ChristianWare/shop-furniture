import styles from './Logo.module.css'
import Shine from '../../../../public/icons/shineSolid.svg'

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      Furnitlure <Shine className={styles.shine} />
    </div>
  );
}