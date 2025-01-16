import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export function GET() {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Kacper Aniecko',
    email: 'anieckok@replient.com',
  }

  let feed = new Feed({
    title: 'Kacper Aniecko Portfolio',
    description: 'Kacper Aniecko Portfolio',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  // Instead of fetching, we'll need to get the content directly
  // You might need to adjust this part based on how your content is structured
  const articles = [
    // Add your articles data here
    // Example:
    // {
    //   id: 'article-1',
    //   title: 'Article 1',
    //   date: '2024-01-16',
    //   content: 'Content of article 1'
    // }
  ]

  articles.forEach(article => {
    feed.addItem({
      title: article.title,
      id: `${siteUrl}/#${article.id}`,
      link: `${siteUrl}/#${article.id}`,
      content: article.content,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}