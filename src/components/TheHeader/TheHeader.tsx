import { ThemeSwitcher } from 'components/TheSwitcher';
import styles from './TheHeader.module.scss';

export const TheHeader = () => (
  <div className={styles.theHeader}>
    <div className={styles.logo}>DevFinder</div>
    <ThemeSwitcher />
  </div>
);
