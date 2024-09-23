import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {GoodsList} from "@/components/GoodsList";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    return (
        <Box>
            <Header/>
            <GoodsList/>
        </Box>
    )
};
