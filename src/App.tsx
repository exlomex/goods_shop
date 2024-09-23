import { classNames } from '@/lib/classNames';
import cls from './App.module.scss';
import {AppRouter} from "@/components/AppRouter/AppRouter";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import React, {Suspense, useEffect, useState} from "react";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";


export const App = () => {
    const dispatch = useAppDispatch()

    const [inited, setInited] = useState(false)

    useEffect(() => {
        if (!inited) {
            dispatch(UserSliceActions.initAuth())
            setInited(true)
        }
    }, [dispatch, inited]);

    if (!inited) return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <CircularProgress />
        </Box>
    )

    return (
        <div className={classNames(cls.App, {}, ['wrapper'])}>
            <Suspense fallback={''}>
                <AppRouter/>
            </Suspense>
        </div>
    )
};
