import scraper from 'src/data/scraper';

export default async function handler(req, res) {
  const posts = await scraper.scrapeContent();
  res.status(200).json(posts);
}