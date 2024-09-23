import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import React, { ChangeEvent, useCallback } from 'react';
import { loginByUsername, loginByUsernameProps } from '@/store/services/loginByUsername';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { getLoginIsloading, getLoginPassword, getLoginUsername } from '@/store/selectors/getLoginValues';
import { LoginFormActions } from '@/store/reducers/LoginFormSlice';

export const LoginForm = () => {

    const userPassword = useSelector(getLoginPassword);
    const userUsername = useSelector(getLoginUsername);
    const userIsloading = useSelector(getLoginIsloading);

    const dispatch = useAppDispatch();

    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(LoginFormActions.setPassword(e.target.value));
    }, [dispatch]);

    const onUsernameChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(LoginFormActions.setLogin(e.target.value));
    }, [dispatch]);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const authData: loginByUsernameProps = {
            username: userUsername,
            password: userPassword,
        };

        dispatch(loginByUsername(authData));
    }

    return (
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Your login"
                            name="login"
                            autoComplete="login"
                            autoFocus
                            value={userUsername}
                            onChange={onUsernameChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color="primary"
                            value={userPassword}
                            onChange={onPasswordChange}
                        />
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 1,
                                color: '#fff',
                                bgcolor: '#FF636C',
                                boxShadow: 'none',
                                ':hover': { bgcolor: '#ffb4b9', boxShadow: 'none' },
                                fontWeight: '500',
                                borderRadius: '8px',
                            }}
                            disabled={userIsloading}
                        >
                            Войти
                        </Button>
                    </Box>
                    <Typography component="h5" variant="h5" sx={{ fontSize: '0.875em', marginTop: '9px', color: '#525252' }}>
                        for example: login: test1, password: test1
                    </Typography>
                </Box>
            </Container>
    );
};
