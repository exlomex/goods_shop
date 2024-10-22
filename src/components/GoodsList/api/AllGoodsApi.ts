import { rtkApi } from '@/api/rtkApi';
import { Good } from '../model/types/Goods';

const AllGoodsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllGoods: build.query<Good[], null>({
            query: () => ({
                // company
                url: '/goods/test1',
            }),
            // providesTags: () => ['Board'],
        }),
    }),
});

export const useAllGoods = AllGoodsApi.useGetAllGoodsQuery;
