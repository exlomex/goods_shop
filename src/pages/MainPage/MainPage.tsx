import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;
    return (
        <Box>
            <Header/>
        </Box>
    )
};
