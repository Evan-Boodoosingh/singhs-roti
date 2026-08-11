import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { menuItem } from "./menuItem";
import { review } from "./review";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, menuItem, review],
};