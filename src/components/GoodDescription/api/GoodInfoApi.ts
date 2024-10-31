import { rtkApi } from '@/api/rtkApi';
import { Good } from '@/components/GoodsList/model/types/Goods';

const GoodInfoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getGoodInfo: build.query<Good, {id: string}>({
            query: ({id}) => ({
                // company
                url: `/goods/${id}`,
            }),
        }),
    }),
});

export const useInfoGood = GoodInfoApi.useGetGoodInfoQuery;
