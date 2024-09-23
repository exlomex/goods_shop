import Box from "@mui/material/Box";
import {useAllGoods} from "@/components/GoodsList/api/AllGoodsApi";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";


export const GoodsList = () => {
    const {data: goods, isLoading} = useAllGoods(null)

    const navigate = useNavigate()

    const handleGoodClick = (id: string) => () => {
        navigate(`/goods/${id}`)
    }

    return (
        <Container component={"section"}  maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px 40px'}}>
            {goods && goods.map(good => (
                <Box
                    key={good.id}
                    onClick={handleGoodClick(good.id)}
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
                            ':hover': { transform: 'scale(0.95)'},
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
                        {good.title}
                    </Typography>
                    <Typography
                        sx={{
                            mt: '10px',
                            fontSize: '1.125em',
                            color: '#D0B0AB',
                            mb: '10px'
                        }}>
                        {good.price} руб.
                    </Typography>
                </Box>
            ))}
        </Container>
    )
};
