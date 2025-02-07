import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
      title: "Description",
    }),
    defineField({
      name: "productImage",
      type: "image",
      validation: (rule) => rule.required(),
      title: "Product Image",
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (rule) => rule.required(),
      title: "Price",
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "dicountPercentage",
      type: "number",
      title: "Discount Percentage",
    }),
    defineField({
      name: "isNew",
      type: "boolean",
      title: "New Badge",
    }),
    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      to: {
        type: "category",
      },
    }),
    defineField({
      name: "bestseller",
      type: "boolean",
      title: "Best Seller",
    }),
  ],
});
