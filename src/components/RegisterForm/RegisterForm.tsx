import { classNames } from '@/lib/classNames';
import cls from './RegisterForm.module.scss';
import {useSelector} from "react-redux";
import {getLoginIsloading, getLoginPassword, getLoginUsername} from "@/store/selectors/getLoginValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import React, {ChangeEvent, useCallback} from "react";
import {LoginFormActions} from "@/store/reducers/LoginFormSlice";
import {useTheme} from "@mui/material";
import {loginByUsername, loginByUsernameProps} from "@/store/services/loginByUsername";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {registerService, registerServiceProps} from "@/store/services/registerService";
import {RegisterFormSliceSchema} from "@/store/reducers/RegisterFormSliceSchema";
import {
    getRegisterFirstName,
    getRegisterLastname,
    getRegisterPassword,
    getRegisterUsername
} from "@/store/selectors/getRegisterValues";
import {RegisterFormActions} from "@/store/reducers/RegisterFormSlice";

interface RegisterFormProps {
}

export const RegisterForm = (props: RegisterFormProps) => {

    const dispatch = useAppDispatch();
    const theme = useTheme();

    const userFirstName = useSelector(getRegisterFirstName);
    const userLastName = useSelector(getRegisterLastname);
    const userUsername = useSelector(getRegisterUsername);
    const userPassword = useSelector(getRegisterPassword);

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const registerData: registerServiceProps = {
            username: userUsername,
            password: userPassword,
            firstName: userFirstName,
            lastName: userLastName,
        }

        dispatch(registerService(registerData));
    }

    enum inputChangeVariants {
        USERNAME = 'username',
        PASSWORD = 'password',
        FIRSTNAME = 'firstName',
        LASTNAME = 'lastName',
    }

    const onChangeHandler = (inputChangeType: inputChangeVariants) => (e: ChangeEvent<HTMLInputElement>) => {
        switch (inputChangeType) {
            case 'username': {
                dispatch(RegisterFormActions.setUsername(e.target.value));
                return
            } case 'password': {
                dispatch(RegisterFormActions.setPassword(e.target.value));
                return;
            } case 'firstName': {
                dispatch(RegisterFormActions.setFirstName(e.target.value));
                return;
            } case 'lastName': {
                dispatch(RegisterFormActions.setLastName(e.target.value));
            }
        }
    };

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
                    Регистрация
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        color="primary"
                        margin="normal"
                        required
                        fullWidth
                        id="firstNameRegister"
                        label="Имя"
                        name="firstNameRegister"
                        autoComplete="login"
                        autoFocus
                        value={userFirstName}
                        onChange={onChangeHandler(inputChangeVariants.FIRSTNAME)}
                    />
                    <TextField
                        color="primary"
                        margin="normal"
                        required
                        fullWidth
                        id="lastNameRegister"
                        label="Фамилия"
                        name="lastNameRegister"
                        autoComplete="login"
                        autoFocus
                        value={userLastName}
                        onChange={onChangeHandler(inputChangeVariants.LASTNAME)}
                    />
                    <TextField
                        color="primary"
                        margin="normal"
                        required
                        fullWidth
                        id="usernameRegister"
                        label="Логин"
                        name="usernameRegister"
                        autoComplete="login"
                        autoFocus
                        value={userUsername}
                        onChange={onChangeHandler(inputChangeVariants.USERNAME)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="passwordRegister"
                        label="Пароль"
                        type="password"
                        id="passwordRegister"
                        autoComplete="current-password"
                        color="primary"
                        value={userPassword}
                        onChange={onChangeHandler(inputChangeVariants.PASSWORD)}
                    />
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color={"primary"}
                        sx={{
                            mt: 1,
                            color: theme.palette.fontColors.white,
                            boxShadow: 'none',
                            ':hover': { bgcolor: theme.palette.hover.mediumLight, boxShadow: 'none' },
                            fontWeight: '500',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '1em'
                        }}
                        // disabled={userIsloading}
                    >
                        Зарегистрироваться
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
