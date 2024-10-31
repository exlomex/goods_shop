import {Header} from "@/components/Header";
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
