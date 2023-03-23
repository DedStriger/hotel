import Input, { InputProps } from '../../../../components/Input/Input';
import { LoginError } from '../../Login';
import styles from './LoginInput.module.scss';

export type LoginInputProps = InputProps & {
    label: string;
    error?: LoginError;
}

export default function LoginInput({label, error, name, ...rest}:LoginInputProps){
    return(
        <div className={`${styles.container} ${error && styles.container__error}`}>
            <label htmlFor={name}>{label}</label>
            <Input 
                name={name}
                {...rest}
            />
            {error && <div className={styles.error}>{error.text}</div>}
        </div>
    )
}
