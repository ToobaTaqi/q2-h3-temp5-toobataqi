import { defineField, defineType } from "sanity";

export const team = defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      validation: (rule) => rule.required(),
      type: "string",
    }),
    defineField({
      name: "profession",
      title: "Profession",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "url",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "url",
    }),
  ],
});
