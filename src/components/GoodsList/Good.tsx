import {Good as GoodType} from "./model/types/Goods";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

export const Good = (props: Partial<GoodType>) => {
    const { id, title, price } = props;

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
                    bgcolor: '#3333',
                    borderRadius: '12px',
                    transition: 'transform .3s ease',
                    ':hover': {transform: 'scale(0.95)'},
                }}>
            </Box>
            <Typography
                sx={{
                    mt: '10px',
                    fontSize: '1.25em',
                    color: '#7A2841',
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    mt: '10px',
                    fontSize: '1.125em',
                    color: '#D0B0AB',
                    mb: '10px'
                }}>
                {price} руб.
            </Typography>
        </Box>
    )
};
