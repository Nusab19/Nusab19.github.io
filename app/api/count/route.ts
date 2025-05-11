import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { username, repo } = await req.json()

  if (!username || !repo) {
    return new NextResponse('Missing username or repo', { status: 400 })
  }

  const res = await fetch(`https://badges.pufler.dev/visits/${username}/${repo}`)

  if (!res.ok) {
    return new NextResponse('Failed to fetch badge', { status: res.status })
  }

  const svg = await res.text()

  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-store'
    }
  })
}
