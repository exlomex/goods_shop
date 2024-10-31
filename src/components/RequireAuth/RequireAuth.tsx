import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { getUserAuth } from '@/store/selectors/getUserAuth';
import {jwtDecode} from "jwt-decode";
import {USER_LOCALSTORAGE_KEY} from "@/consts/localStorage";
import {UserRoles} from "@/store/reducers/UserSliceSchema";


interface RequireAuthProps {
    children: ReactElement;
    role: UserRoles;
}

export function RequireAuth(props: RequireAuthProps) {
    const {role, children} = props

    const auth = useSelector(getUserAuth);
    const location = useLocation();

    // if (auth) {
    //     const token = localStorage.getItem(USER_LOCALSTORAGE_KEY)
    //     const info = jwtDecode(token || '')
    //     console.log(info)
    // }

    if (!auth) {
        return (
            <Navigate to={'/'} state={{ from: location }} replace />
        );
    }

    return children;
}
