import { queryType } from 'nexus';
import { posts } from 'src/data/posts';
import { Post } from './Post';

export const Query = queryType({
  definition(t) {
    t.list.field("posts", {
      type: Post,
      resolve: () => posts
    });
  },
});