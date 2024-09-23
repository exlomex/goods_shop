import {Header} from "@/components/Header";
import {GoodsList} from "@/components/GoodsList";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import {GoodDescription} from "@/components/GoodDescription";


export const GoodPage = () => {
    const {id} = useParams<{id: string}>()

    return (
        <Box>
            <Header/>
            {id && <GoodDescription id={id}/>}
        </Box>
    )
};
