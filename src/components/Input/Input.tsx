import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input({type = 'text', className, ...rest}: InputProps){
    return(
        <input type={type} className={`${styles.input} ${className}`} {...rest} />
    )
}
