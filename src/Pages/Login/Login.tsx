import { FormEvent, useCallback, useState } from "react";
import LoginView from "./view/LoginView";
import { useNavigate } from "react-router-dom";
import { MAIN_LINK } from "../../utils/links";

export enum LoginErrorVariant {
    Pass,
    Login,
}

export type LoginError = {
    variant: LoginErrorVariant;
    text: string;
} | undefined;

export default function Login(){
    const [error, setError] = useState<LoginError>(undefined)
    const navigate = useNavigate()
    const handleSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const login = formData.get('login') as string;
        const pass = formData.get('pass') as string;
        if(!login){
            setError({variant: LoginErrorVariant.Login, text: 'Обязательное поле'})
            return;
        }
        if(!pass){
            setError({variant: LoginErrorVariant.Pass, text: 'Обязательное поле'})
            return;
        }

        // eslint-disable-next-line
        if(!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(login)){
            setError({variant: LoginErrorVariant.Login, text: 'Введите корректный email'})
            return;
        }

        if(/[А-Яа-я]/gi.test(pass) || pass.length < 8){
            setError({variant: LoginErrorVariant.Pass, text: 'Введите корректный пароль'})
            return;
        }
        window.localStorage.setItem('auth', 'true')
        navigate(MAIN_LINK)
    }, [navigate])
    return <LoginView error={error} onSubmit={handleSubmit}/>
}
