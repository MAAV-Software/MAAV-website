import { NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getPostById, updatePost, deletePost } from '@/lib/blogs'

// GET /api/blogs/[id] - Get single post
export async function GET(request, { params }) {
  try {
    const { id } = await params
    const post = await getPostById(id)

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    // If post is unpublished, require auth
    if (!post.published) {
      const session = await getSession()
      if (!session) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        )
      }
    }

    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    )
  }
}

// PUT /api/blogs/[id] - Update post (requires auth)
export async function PUT(request, { params }) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    const updates = await request.json()

    const updatedPost = await updatePost(id, updates)
    return NextResponse.json({ post: updatedPost })
  } catch (error) {
    if (error.message === 'Post not found') {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    )
  }
}

// DELETE /api/blogs/[id] - Delete post (requires auth)
export async function DELETE(request, { params }) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id } = await params
    await deletePost(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error.message === 'Post not found') {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    )
  }
}
