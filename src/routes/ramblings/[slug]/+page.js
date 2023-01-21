const postData = import.meta.glob('/src/lib/posts/*.md', { eager: true });

const allPosts = [];
for (let path in postData) {
  const post = postData[path];
  const slug = path.slice(15, -3);
  const postObj = { post, slug };
  allPosts.push(postObj);
}


export function load({ params }) {
  const { slug } = params;

  const requestedPost = allPosts.find((post) => {
    return post.slug === slug;
  });

  const { title, date, tags } = requestedPost.post.metadata
  const content = requestedPost.post.default

  return {
    content,
    title,
    date,
    tags
  };
}
