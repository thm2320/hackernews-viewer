import { queryType } from 'nexus';
import scraper from 'src/data/scraper';
import { Post } from './Post';

export const Query = queryType({
  definition(t) {
    t.list.field("posts", {
      type: Post,
      resolve: async () => {
        const posts = await scraper.scrapeContent();
        return posts.sort((a, b) => {
          return b.comments - a.comments;
        })

      },
    })
  }
});