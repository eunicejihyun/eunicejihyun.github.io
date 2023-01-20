
// import readingTime from 'reading-time';

export const prerender = true

export async function load({ params }) {
  const post = await import(`/src/lib/posts/${params.slug}.md`)
  const { title, date, tags } = post.metadata
  const content = post.default

  // const time = readingTime(content).text

  return {
    content,
    title,
    date,
    tags
  }
}