import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {useInfoGood} from "@/components/GoodDescription/api/GoodInfoApi";
import Typography from "@mui/material/Typography";
import {GoodReviews} from "@/components/GoodReviews";
import {useTheme} from "@mui/material";

interface GoodDescriptionProps {
    id: string
}

export const GoodDescription = (props: GoodDescriptionProps) => {
    const { id } = props;

    const {isLoading, data: good} = useInfoGood({id: id})

    const theme = useTheme()

    if (!isLoading && !good) return (
        <Box sx={{}}><Typography sx={{textAlign: 'center', fontSize: '2em', color: theme.palette.hover.darker}}>No data</Typography></Box>
    )

    return (
        <Container component={"section"}  maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', gap: '40px 40px', flexDirection: 'column'}}>
                {good && (
                    <Box sx={{
                        display: 'flex',
                        gap: '30px 30px'
                    }}>
                        <Box sx={{
                            width: '300px',
                            height: '400px',
                            bgcolor: theme.palette.goodBg,
                            borderRadius: '12px'
                        }}></Box>
                        <Box>
                            <Typography sx={{
                                fontSize: '2em',
                                fontWeight: '600',
                                color: theme.palette.primary.main,
                                mb: '5px'
                            }}>{good.title}</Typography>

                            <Typography sx={{
                                fontSize: '1.125em',
                                fontWeight: '400',
                                color: theme.palette.secondary.main
                            }}>{good.price} руб.</Typography>
                        </Box>
                    </Box>

            )}

            {!isLoading && <GoodReviews id={id}/>}
        </Container>
    )
};
