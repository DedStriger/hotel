import styles from './Header.module.scss';
import {ReactComponent as LogoutSVG} from '../../assets/icon-logout.svg'
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_LINK } from '../../utils/links';

export default function Header(){
    const navigate = useNavigate()
    const onLogout = useCallback(() => {
        window.localStorage.removeItem('auth')
        navigate(LOGIN_LINK)
    }, [navigate])
    return(
        <div className={styles.container}>
            <div className={styles.title}>Simple Hotel Check</div>
            <button onClick={onLogout} className={styles.btn}>
                <span>Выйти</span>
                <LogoutSVG/>
            </button>
        </div>
    )
}
