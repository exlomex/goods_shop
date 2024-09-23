import Box from "@mui/material/Box";
import {newReview, Review} from "@/components/GoodReviews/model/types/Review";
import {useInfoGood} from "@/components/GoodDescription/api/GoodInfoApi";
import {useAllGoodReviews} from "@/components/GoodReviews/api/AllGoodReviewsApi";
import Typography from "@mui/material/Typography";
import {Input, Rating} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserAuth";
import {useAddNewReview} from "@/components/GoodReviews/api/AddReviewApi";
import {useState} from "react";

interface GoodReviewsProps {
    id: string
}

export const GoodReviews = (props: GoodReviewsProps) => {
    const { id } = props;

    const {isLoading, data: reviews} = useAllGoodReviews({id: id})

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
                color: '#7A2841',
                fontSize: '1.35em',
                mb: '10px'
            }}>Отзывы:</Typography>

            {reviews && reviews.length === 0 && <Typography>Ничего не найдено</Typography>}

            {reviews && reviews.map(review => (
                <Box key={review.id} sx={{mb: '10px'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography sx={{fontSize: '1.3em', mb: '5px'}}>{review.userAccount.firstName}</Typography>
                        <Typography sx={{color: '#7A2841', fontWeight: '600', fontSize: '1.25em'}}>{review.rating} / 5</Typography>
                    </Box>
                    <Typography
                        sx={{fontSize: '1.25em', padding: '15px', bgcolor: 'rgba(51, 51, 51, 0.05)', borderRadius: '10px'}}
                    >
                        {review.description}
                    </Typography>
                </Box>
            ))}
            <Box
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                <TextField
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
                            mt: 1,
                            color: '#fff',
                            bgcolor: '#FF636C',
                            boxShadow: 'none',
                            ':hover': { bgcolor: '#ffb4b9', boxShadow: 'none' },
                            fontWeight: '500',
                            borderRadius: '8px',
                            textTransform: 'none',
                            padding: '6px 15px',
                            ':disabled': {bgcolor: 'rgba(255,99,108,0.22)'}
                        }}>Отправить</Button>
                </Box>
            </Box>
        </Box>
    )
};
