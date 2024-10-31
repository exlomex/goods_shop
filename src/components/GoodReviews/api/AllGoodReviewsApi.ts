import { rtkApi } from '@/api/rtkApi';
import {Review} from "@/components/GoodReviews/model/types/Review";

const AllGoodReviewsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllGoodReviews: build.query<Review[], {id: string}>({
            query: ({id}) => ({
                // company
                url: `review/good/${id}`,
            }),
        }),
    }),
});

export const useAllGoodReviews = AllGoodReviewsApi.useGetAllGoodReviewsQuery;
