export interface Review {
    id: string;
    description: string;
    rating: number;
    userAccount: {
        firstName: string;
        lastName: string;
    }
}

export interface newReview {
    description: string;
    rating: number;
    goodId: string;
}