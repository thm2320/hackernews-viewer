import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import { posts } from 'src/data/posts';

const extractNum = (str): number => {
  const num = str ? str.match(/\d+/)[0] : 0;
  return +num;
}

const scrapeContent = async () => {
  const browser: puppeteer.Browser = await puppeteer.launch();
  const page: puppeteer.Page = await browser.newPage();
  await page.goto('https://news.ycombinator.com');

  let content = await page.content();
  const $ = cheerio.load(content);
  $('.athing').each((idx, el) => {
    const title = $(el).children('.title').children('.storylink').text();
    const url = $(el).children('.title').children('.storylink').attr('href');

    const subtextEl = $(el).next().children('.subtext');
    const points = extractNum($(subtextEl).children('.score').text());
    const author = $(subtextEl).children('.hnuser').text();
    const time = $(subtextEl).children('.age').text();
    const comments = extractNum($(subtextEl).children('a:contains("comment")').text());

    posts.push({
      title,
      url,
      points,
      author,
      time,
      comments,
    });
  })

  browser.close();
  return posts;
}


export default async function handler(req, res) {
  const posts = await scrapeContent();
  res.status(200).json(posts);
}