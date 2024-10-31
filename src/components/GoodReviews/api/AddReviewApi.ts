import {rtkApi} from "@/api/rtkApi";
import {newReview} from "@/components/GoodReviews/model/types/Review";
import {USER_LOCALSTORAGE_KEY} from "@/consts/localStorage";


const AddReviewApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        addNewReview: build.mutation<null, newReview>({
            query: (body) => ({
                url: '/reviews',
                method: 'POST',
                body,
                headers: {
                    Auth: `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''}`
                }
            }),
            invalidatesTags: ['Review'],
        }),
    }),
});

export const useAddNewReview = AddReviewApi.useAddNewReviewMutation;
