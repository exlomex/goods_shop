import goodsLogo from '@/assets/goods.svg'
import { useNavigate} from "react-router-dom";
import {AppBar, SxProps, Theme, useTheme} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ReactNode, useCallback} from "react";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserAuth";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';


export const Header = () => {
    // const navItems: {title: string, to: string}[] = [
    //     {title: 'Каталог товаров', to: '/'}
    // ]

    const theme = useTheme();

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const isAuth = useSelector(getUserAuth)

    const handleAuthButtonClick = useCallback(() => {
        navigate('/login')
    }, [])

    const handleLogoutButtonClick = useCallback(() => {
        dispatch(UserSliceActions.logout())
    }, [])

    const AuthButtonStyles: SxProps<Theme> = {
        color: theme.palette.primary.main,
        width: '150px',
        mt: 1,
        bgcolor: 'transparent',
        boxShadow: 'none',
        ':hover': { bgcolor: theme.palette.hover.light, boxShadow: 'none' },
        fontWeight: '500',
        borderRadius: '100px',
        border: `1px solid ${theme.palette.primary.main}`
    }

    const AuthButton = ({children, onClick}: {children: ReactNode, onClick: () => void}) => (
        <Button
            onClick={onClick}
            type="button"
            variant="text"
            sx={AuthButtonStyles}
        >
            {children}
        </Button>
    )

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'transparent',
            boxShadow: 0,
            mt: '10px',
            mb: '40px'
        }}>
            <Container maxWidth="lg" >
            <Box
                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0'}}
            >
                    <MuiLink component={RouterLink} to="/" sx={{width: '80px', m: 'auto 0'}}>
                        <Box component={'img'} loading={'lazy'} src={goodsLogo} alt="goods" sx={{display: 'block'}}/>
                    </MuiLink>

                    {
                        !isAuth ? (<AuthButton onClick={handleAuthButtonClick}>Войти</AuthButton>)
                            : (<AuthButton onClick={handleLogoutButtonClick}>Выйти</AuthButton>)
                    }

                </Box>
            </Container>
        </AppBar>
    )
};
