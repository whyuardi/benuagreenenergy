import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Benua Green Energy',
  description: 'Green Energy Solutions for Industrial Future',
}

export default function RootPage() {
  redirect('/id')
}
