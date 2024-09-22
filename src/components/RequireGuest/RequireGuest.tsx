import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { getUserAuth } from '@/store/selectors/getUserAuth';

interface RequireAuthProps {
    children: ReactElement;
}

export function RequireGuest({ children }: RequireAuthProps) {
    const auth = useSelector(getUserAuth);
    const location = useLocation();

    if (auth) {
        return (
            <Navigate to={'/about'} state={{ from: location }} replace />
        );
    }

    return children;
}
