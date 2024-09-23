import { classNames } from '@/lib/classNames';
import cls from './Header.module.scss';
import goodsLogo from '@/assets/goods.svg'
import {Link, useNavigate} from "react-router-dom";
import {AppBar, Toolbar} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {StyledLink} from "@/components/Link";
import {useCallback} from "react";



export const Header = () => {
    const navItems: {title: string, to: string}[] = [
        {title: 'Каталог товаров', to: '/'}
    ]

    const navigate = useNavigate();

    const handleAuthButtonClick = useCallback(() => {
        navigate('/login')
    }, [])


    return (
        <AppBar position="static" sx={{
            backgroundColor: 'transparent',
            boxShadow: 0
        }}>
            <Toolbar>
                <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <StyledLink to="/">
                        <img src={goodsLogo} alt="goods" />
                    </StyledLink>
                    <nav>
                        {navItems.map((item, index) => (
                            <StyledLink key={index} to={item.to}><Typography sx={{
                                transition: 'all, 0.2s, easy',
                                color: '#830e0e',
                                ':hover': { color: 'rgba(131,14,14,0.64)' },
                            }}>{item.title}</Typography></StyledLink>
                        ))}
                    </nav>
                    <Button
                        onClick={handleAuthButtonClick}
                        type="button"
                        variant="text"
                        sx={{
                            width: '150px',
                            mt: 1,
                            color: '#830e0e',
                            bgcolor: 'transparent',
                            boxShadow: 'none',
                            ':hover': { bgcolor: 'rgba(131,14,14,0.05)', boxShadow: 'none' },
                            fontWeight: '500',
                            borderRadius: '100px',
                            border: '1px solid #830E0EFF'
                        }}
                        // disabled={}
                    >
                        Войти
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    )
};
