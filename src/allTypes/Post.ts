import { objectType } from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.string("title");
    t.string("url");
    t.int("points");
    t.string("author");
    t.string("time");
    t.int("comments");
  }
})
