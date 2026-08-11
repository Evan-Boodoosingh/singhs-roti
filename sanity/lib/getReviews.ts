import { client } from "./client";
import { REVIEWS_QUERY } from "../queries";

export type Review = {
  _id: string;
  author: string;
  quote: string;
  source?: string;
  rating: number;
};

export async function getReviews(): Promise<Review[]> {
  return client.fetch(REVIEWS_QUERY);
}