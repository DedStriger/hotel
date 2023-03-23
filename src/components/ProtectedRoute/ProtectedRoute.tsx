import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export type ProtectedRouteProps =  PropsWithChildren<{
    notAuthRedirect: string;
}>

export default function ProtectedRoute({notAuthRedirect, children}: ProtectedRouteProps){
    if(!!window.localStorage.getItem('auth')){
        return <>{children}</>
    }

    return <Navigate to={notAuthRedirect} />;
}
