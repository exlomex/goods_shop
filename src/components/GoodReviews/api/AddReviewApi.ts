import {rtkApi} from "@/api/rtkApi";
import {newReview} from "@/components/GoodReviews/model/types/Review";
import {USER_LOCALSTORAGE_KEY} from "@/consts/localStorage";


const AddReviewApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addNewReview: build.mutation<null, newReview>({
            query: (body) => ({
                url: '/review',
                method: 'POST',
                body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''}`
                }
            }),
            invalidatesTags: ['Review'],
        }),
    }),
});

export const useAddNewReview = AddReviewApi.useAddNewReviewMutation;
