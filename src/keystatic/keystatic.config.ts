import { collection, config, fields } from "@keystatic/core";

export const showAdminUI = process.env.NODE_ENV !== "production";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/**",
      entryLayout: "content",
      format: { contentField: "content" },
      columns: ["title", "publishedAt"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        publishedAt: fields.date({
          label: "Published at",
          defaultValue: {
            kind: "today",
          },
          validation: {
            isRequired: true,
          },
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Check this box to prevent this post from being published.",
          defaultValue: true,
        }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
