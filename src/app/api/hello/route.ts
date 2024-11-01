import { NextResponse } from 'next/server';

// Define GET request handler
export async function GET() {
  const userData = { id: 1, name: 'John Doe', email: 'john@example.com' };
  return NextResponse.json(userData);
}
