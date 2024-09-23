import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {useInfoGood} from "@/components/GoodDescription/api/GoodInfoApi";
import Typography from "@mui/material/Typography";
import {GoodReviews} from "@/components/GoodReviews";

interface GoodDescriptionProps {
    id: string
}

export const GoodDescription = (props: GoodDescriptionProps) => {
    const { id } = props;

    const {isLoading, data: good} = useInfoGood({id: id})

    if (!isLoading && !good) return (
        <Box sx={{}}><Typography sx={{textAlign: 'center', fontSize: '2em', color: 'rgba(122,40,65,0.25)'}}>No data</Typography></Box>
    )

    return (
        <Container component={"section"}  maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', gap: '40px 40px', flexDirection: 'column'}}>
                {good && (
                    <Box sx={{
                        display: 'flex',
                        gap: '30px 30px'
                    }}>
                        {/*<img src="" alt="goodPhoto"/>*/}
                        <Box sx={{
                            width: '300px',
                            height: '400px',
                            bgcolor: '#3333',
                            borderRadius: '12px'
                        }}></Box>
                        <Box>
                            <Typography sx={{
                                fontSize: '2em',
                                fontWeight: '600',
                                color: '#7A2841',
                                mb: '5px'
                            }}>{good.title}</Typography>

                            <Typography sx={{
                                fontSize: '1.125em',
                                fontWeight: '400',
                                color: '#D0B0AB'
                            }}>{good.price} руб.</Typography>
                        </Box>
                    </Box>

            )}

            {!isLoading && <GoodReviews id={id}/>}
        </Container>
    )
};
