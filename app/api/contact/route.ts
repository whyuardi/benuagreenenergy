import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const SUBMISSIONS_FILE = path.join(process.cwd(), 'contact-submissions.jsonl')

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'company', 'department', 'subject', 'message'] as const

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    for (const field of REQUIRED_FIELDS) {
      if (!body[field] || typeof body[field] !== 'string' || body[field].trim() === '') {
        return NextResponse.json(
          { success: false, error: `Field "${field}" is required` },
          { status: 400 }
        )
      }
    }

    // Build submission record with timestamp
    const submission = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      company: body.company.trim(),
      department: body.department.trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
    }

    // Append to JSONL file (create dir if needed)
    await fs.mkdir(path.dirname(SUBMISSIONS_FILE), { recursive: true })
    await fs.appendFile(SUBMISSIONS_FILE, JSON.stringify(submission) + '\n', 'utf-8')

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 400 }
    )
  }
}
