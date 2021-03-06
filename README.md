This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction of this project

- To learn backend server and frontend UI with Next.js
- Build graphql api with Apollo Server
- Use Puppeteer and Cheerio to scrape content from Hackernews (https://news.ycombinator.com/news)

## Instruction to start at local development server

1. run following cmd:

```
git clone https://github.com/thm2320/hackernews-viewer.git
cd hackernews-viewer
npm install
npm run dev
```

2. open http://localhost:3000/api/graphql/ . It will show graphql playground.
1. open http://localhost:3000/ . It will show the Page displaying hackernews posts in cards list

## How it works

1. Nexus is used to build the graphql schema using code first approach
1. Apollo Server will serve as graphql api
1. Every time Apollo Client queries the api, it will start scraping content from Hackernews
1. Puppeteer will scrape the html content and Cheerio will load the content and extract the required data
1. The data will be stored in memory with an Array of "Post" Type which can fit the graphql schema. And the list will be sorted by comments in descending order
1. The frontend page will render the data using React and Material UI

## Known issues and possible improvement

| Item         | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Problem:     | The cards showing in the UI are just first 30 news in hackernews.                                                                                                                                                                                                                                                                                                                                                    |
| Improvement: | `It is possible to do the scraping simultaneously for different pages in hackernews with an async method. And use promise to group all news. So that it is possible to display more than 30 news`                                                                                                                                                                                                                    |
| Problem:     | The api response time is quite slow due to the scraping process. And it is possible to duplicate the scraping process if users do the query concurrently.                                                                                                                                                                                                                                                            |
| Improvement: | `The problems can be solved by using event bus and cache system. Event bus can queue up the scraping request and scraping service will only start one process for multiple requests. And cache system can store the news so that reduce the frequency to request hackernews. It can speed up the request and prevent the heavy processing on scraping. Some open source project like "Redis" can serve this purpose` |
| Problem:     | The comments cannot be read in the site.                                                                                                                                                                                                                                                                                                                                                                             |
| Improvement: | `A comments page can be implemented in the UI. It can display the comments by scraping`                                                                                                                                                                                                                                                                                                                              |
| Problem:     | The source content are based on the html content from hackernews. If the html structure is changed by hackernews. The data display in the site will be incorrect.                                                                                                                                                                                                                                                    |
| Improvement: | `Try to request the hackernews api to get the data instead of scraping`                                                                                                                                                                                                                                                                                                                                              |
