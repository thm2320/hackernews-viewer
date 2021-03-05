import { objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("title");
    t.string("url");
    t.string("points");
    t.string("author");
    t.string("time");
    t.string("comments");
  }
})
