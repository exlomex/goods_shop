import Box from "@mui/material/Box";
import {newReview} from "@/components/GoodReviews/model/types/Review";
import Typography from "@mui/material/Typography";
import {Rating, useTheme} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserAuth";
import {useAddNewReview} from "@/components/GoodReviews/api/AddReviewApi";
import {useState} from "react";
import {Review} from "@/components/GoodReviews/Review";
import { Review as ReviewsType } from './model/types/Review';

interface GoodReviewsProps {
    id: string
    reviews: ReviewsType[]
}

export const GoodReviews = (props: GoodReviewsProps) => {
    const { id, reviews } = props;

    const theme = useTheme()


    const isAuth = useSelector(getUserAuth)

    const [addReview, {}] = useAddNewReview()

    const [rating, setRating] = useState<number>(1)
    const [description, setDescription] = useState<string>('')

    const handleReviewSubmit = () => {
        const reviewBody: newReview = {
            rating: rating,
            goodId: id,
            description: description
        }

        if (description.trim().length >= 2) {
            addReview(reviewBody)
        }
    }

    return (
        <Box>
            <Typography sx={{
                color: theme.palette.primary.main,
                fontSize: '1.35em',
                mb: '10px'}}
            > Отзывы:
            </Typography>

            {reviews && reviews.length === 0 && <Typography>Ничего не найдено</Typography>}

            {reviews && reviews.map(review => (
                <Review key={review.id} rating={review.rating} id={review.id} description={review.description} user={review.user}/>
            ))}

            <Box
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                <TextField
                    color={"primary"}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder={'Введите отзыв'}
                    fullWidth rows={2} multiline
                    disabled={!isAuth}
                    sx={{mt: '10px'}}
                />
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '20px', mt: '10px'}}>
                    <Rating
                        disabled={!isAuth}
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue as number);
                        }}
                    />
                    <Button
                        onClick={handleReviewSubmit}
                        disabled={!isAuth}
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.fontColors.white,
                            mt: 1,
                            boxShadow: 'none',
                            ':hover': { bgcolor: theme.palette.hover.mediumLight, boxShadow: 'none' },
                            fontWeight: '500',
                            borderRadius: '8px',
                            textTransform: 'none',
                            padding: '6px 15px',
                            ':disabled': {bgcolor: theme.palette.hover.light, color: theme.palette.secondary.main}
                        }}>Отправить</Button>
                </Box>
            </Box>
        </Box>
    )
};
