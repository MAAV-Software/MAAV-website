import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'blogs.json')

export async function readBlogsData() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, return empty structure
    return { posts: [] }
  }
}

export async function writeBlogsData(data) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8')
}

export async function getAllPosts(includeUnpublished = false) {
  const data = await readBlogsData()
  if (includeUnpublished) {
    return data.posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  return data.posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostById(id) {
  const data = await readBlogsData()
  return data.posts.find(post => post.id === id) || null
}

export async function getPostBySlug(slug) {
  const data = await readBlogsData()
  return data.posts.find(post => post.slug === slug) || null
}

export async function createPost(postData) {
  const data = await readBlogsData()

  const newPost = {
    id: Date.now().toString(),
    title: postData.title,
    slug: postData.slug || generateSlug(postData.title),
    excerpt: postData.excerpt || '',
    content: postData.content || '',
    author: postData.author || 'MAAV Team',
    date: postData.date || new Date().toISOString().split('T')[0],
    image: postData.image || '/images/maav-mair.png',
    published: postData.published ?? false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  data.posts.push(newPost)
  await writeBlogsData(data)

  return newPost
}

export async function updatePost(id, updates) {
  const data = await readBlogsData()
  const index = data.posts.findIndex(post => post.id === id)

  if (index === -1) {
    throw new Error('Post not found')
  }

  // If title changed and no custom slug provided, regenerate slug
  if (updates.title && !updates.slug) {
    updates.slug = generateSlug(updates.title)
  }

  data.posts[index] = {
    ...data.posts[index],
    ...updates,
    updatedAt: new Date().toISOString()
  }

  await writeBlogsData(data)
  return data.posts[index]
}

export async function deletePost(id) {
  const data = await readBlogsData()
  const index = data.posts.findIndex(post => post.id === id)

  if (index === -1) {
    throw new Error('Post not found')
  }

  const deleted = data.posts.splice(index, 1)[0]
  await writeBlogsData(data)

  return deleted
}

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
