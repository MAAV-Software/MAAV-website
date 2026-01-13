import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getAllPosts, createPost } from '@/lib/blogs'

// GET /api/blogs - Get all posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const includeUnpublished = searchParams.get('all') === 'true'

    // Only include unpublished if authenticated
    if (includeUnpublished) {
      const session = await getSession()
      if (!session) {
        const posts = await getAllPosts(false)
        return NextResponse.json({ posts })
      }
    }

    const posts = await getAllPosts(includeUnpublished)
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/blogs - Create new post (requires auth)
export async function POST(request) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const postData = await request.json()

    if (!postData.title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      )
    }

    const newPost = await createPost(postData)
    return NextResponse.json({ post: newPost }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
