export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/lib/posts/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = "ramblings" + path.slice(14, -3)
  
        return {
          ...metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }

  