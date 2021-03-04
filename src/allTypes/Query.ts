import { queryType, stringArg } from 'nexus';

export const Query = queryType({
  definition(t) {
    t.string("title", {
      resolve: () => "Some topic"
    });
  },
});