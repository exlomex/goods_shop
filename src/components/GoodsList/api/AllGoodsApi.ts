import { rtkApi } from '@/api/rtkApi';
import { Good } from '../model/types/Goods';

const AllGoodsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllGoods: build.query<Good[], null>({
            query: () => ({
                // company
                url: '/good?companyId=c1bc0911-5427-4946-b86c-7d7ab853fc73',
            }),
            // providesTags: () => ['Board'],
        }),
    }),
});

export const useAllGoods = AllGoodsApi.useGetAllGoodsQuery;
