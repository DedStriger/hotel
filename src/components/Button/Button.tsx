import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    offsetTop?: number;
}

export default function Button({type = 'button', title, style, offsetTop, className, ...rest}:ButtonProps){
    return(
        <button
            type={type}
            style={{marginTop: offsetTop || 0, ...style}}
            className={`${styles.btn} ${className}`}
            {...rest}
        >
            {title}
        </button>
    )
}
