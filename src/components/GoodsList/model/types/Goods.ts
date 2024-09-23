import {Review} from "@/components/GoodReviews/model/types/Review";

export interface Good {
    id: string;
    title: string;
    price: number
    reviews: Review[]
}