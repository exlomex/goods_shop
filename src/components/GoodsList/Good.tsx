import {Good as GoodType} from "./model/types/Goods";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import {useTheme} from "@mui/material";
import {useEffect} from "react";

export const Good = (props: Partial<GoodType>) => {
    const { id, title, price, image } = props;

    const theme = useTheme()

    const navigate = useNavigate()

    const handleGoodClick = () => {
        navigate(`/goods/${id}`)
    }

    return (
        <Box
            key={id}
            onClick={handleGoodClick}
            sx={{
                width: '210px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '12px',
                cursor: 'pointer',
            }}
        >
            <Box
                sx={{

                    width: '100%',
                    height: '260px',
                    bgcolor: theme.palette.goodBg,
                    borderRadius: '12px',
                    transition: 'transform .3s ease',
                    ':hover': {transform: 'scale(0.95)'},
                }}>
                {image && <Box component={'img'} src={`data:image/jpg;base64,${image}`} alt="" sx={{width: '100%', height: '260px', borderRadius: '12px'}}/>}
            </Box>
            <Typography
                sx={{
                    mt: '10px',
                    fontSize: '1.25em',
                    color: theme.palette.primary.main,
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    mt: '10px',
                    fontSize: '1.125em',
                    color: theme.palette.secondary.main,
                    mb: '10px'
                }}>
                {price} руб.
            </Typography>
        </Box>
    )
};
