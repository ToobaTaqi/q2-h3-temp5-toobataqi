import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { team } from "./team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, team],
};
