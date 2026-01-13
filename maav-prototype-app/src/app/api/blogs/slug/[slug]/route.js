import { NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blogs'

// GET /api/blogs/slug/[slug] - Get post by slug
export async function GET(request, { params }) {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    // Only return published posts
    if (!post.published) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}
