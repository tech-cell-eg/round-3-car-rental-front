export type Review = {
    id: number;
    client: {
        name: string;
        job: string;
    };
    description: string;
    rating: number;
    created_at: string;
};