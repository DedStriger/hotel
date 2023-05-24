import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';


export default function Footer(){
    return(
        <div className={styles.container}>
            <span>&copy; {new Date().getFullYear()} Find Your Home Service</span>
        </div>
    )
}
