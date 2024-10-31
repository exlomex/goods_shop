import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { getUserAuth } from '@/store/selectors/getUserAuth';

interface RequireGuestProps {
    children: ReactElement;
}

export function RequireGuest({ children }: RequireGuestProps) {
    const auth = useSelector(getUserAuth);
    const location = useLocation();

    if (auth) {
        return (
            <Navigate to={'/'} state={{ from: location }} replace />
        );
    }

    return children;
}
