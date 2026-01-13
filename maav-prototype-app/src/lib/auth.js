import { cookies } from 'next/headers'
import crypto from 'crypto'

// Session token valid for 24 hours
const SESSION_DURATION = 24 * 60 * 60 * 1000

// Simple session store (in production, use Redis or database)
// For file-based, we'll use a signed cookie approach
const SECRET = process.env.ADMIN_SECRET || 'maav-default-secret-change-me'

export function hashPassword(password) {
  return crypto.createHash('sha256').update(password + SECRET).digest('hex')
}

export function verifyPassword(password) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'maav2024admin'
  return password === adminPassword
}

export function createSessionToken() {
  const timestamp = Date.now()
  const data = `session:${timestamp}`
  const signature = crypto.createHmac('sha256', SECRET).update(data).digest('hex')
  return `${timestamp}:${signature}`
}

export function verifySessionToken(token) {
  if (!token) return false

  const [timestamp, signature] = token.split(':')
  if (!timestamp || !signature) return false

  // Check if expired
  const tokenTime = parseInt(timestamp, 10)
  if (Date.now() - tokenTime > SESSION_DURATION) return false

  // Verify signature
  const data = `session:${timestamp}`
  const expectedSignature = crypto.createHmac('sha256', SECRET).update(data).digest('hex')
  return signature === expectedSignature
}

export async function getSession() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin_session')

  if (!sessionCookie) return null

  if (verifySessionToken(sessionCookie.value)) {
    return { authenticated: true }
  }

  return null
}

export async function requireAuth() {
  const session = await getSession()
  if (!session) {
    throw new Error('Unauthorized')
  }
  return session
}
