import styles from './LoginView.module.scss';
import bg from '../../../assets/login-bg.png';
import LoginInput from './LoginInput/LoginInput';
import Button from '../../../components/Button/Button';
import { FormEvent } from 'react';
import { LoginError, LoginErrorVariant } from '../Login';

export type LoginViewProps = {
    error: LoginError;
    onSubmit: (e: FormEvent) => void;
}

export default function LoginView({onSubmit, error}: LoginViewProps){
    return (
        <div className={styles.container} style={{backgroundImage: `url(${bg})`}}>
            <div className={styles.card}>
                <h2 className={styles.card__title}>Simple Hotel Check</h2>
                <form onSubmit={onSubmit}>
                    <LoginInput
                        label='Логин'
                        name='login'
                        error={error?.variant === LoginErrorVariant.Login ? error : undefined}
                    />
                    <LoginInput
                        label='Пароль'
                        name='pass'
                        type='password'
                        error={error?.variant === LoginErrorVariant.Pass ? error : undefined}
                    />
                    <Button
                        type='submit'
                        title='Войти'
                        offsetTop={34}
                    />
                </form>
            </div>
            <div className={styles.decoration}></div>
        </div>
    )
}
