export interface Review {
    id: string;
    description: string;
    rating: number;
    user: {
        firstName: string;
        lastName: string;
    }
}

export interface newReview {
    description: string;
    rating: number;
    goodId: string;
}