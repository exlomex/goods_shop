import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Review as ReviewsType } from './model/types/Review';
import {useTheme} from "@mui/material";

export const Review = (props: ReviewsType) => {
    const { id, description, rating, userAccount } = props;

    const theme = useTheme()

    return (
        <Box key={id} sx={{mb: '10px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{fontSize: '1.3em', mb: '5px', color: theme.palette.fontColors.black}}>{userAccount.firstName}</Typography>
                <Typography sx={{color: theme.palette.primary.main, fontWeight: '600', fontSize: '1.25em'}}>{rating} / 5</Typography>
            </Box>
            <Typography
                sx={{fontSize: '1.25em', padding: '15px', bgcolor: theme.palette.reviewBg, borderRadius: '10px'}}
            >
                {description}
            </Typography>
        </Box>
    )
};
