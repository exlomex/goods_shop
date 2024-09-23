import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Review as ReviewsType } from './model/types/Review';

export const Review = (props: ReviewsType) => {
    const { id, description, rating, userAccount } = props;
    return (
        <Box key={id} sx={{mb: '10px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{fontSize: '1.3em', mb: '5px'}}>{userAccount.firstName}</Typography>
                <Typography sx={{color: '#7A2841', fontWeight: '600', fontSize: '1.25em'}}>{rating} / 5</Typography>
            </Box>
            <Typography
                sx={{fontSize: '1.25em', padding: '15px', bgcolor: 'rgba(51, 51, 51, 0.05)', borderRadius: '10px'}}
            >
                {description}
            </Typography>
        </Box>
    )
};
