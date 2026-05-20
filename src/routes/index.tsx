import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

type Greeting = {
  message: string
  location: string
  region: string
  requestId: string
}

function HomePage() {
  const [greeting, setGreeting] = useState<Greeting | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/greeting')
      .then((res) => res.json())
      .then((data) => {
        setGreeting(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not reach the edge function.')
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-md p-10 text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Edge Function Demo</h1>
        <p className="text-gray-500 mb-8 text-sm">
          This page calls a Netlify Edge Function at{' '}
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs font-mono">/api/greeting</code>{' '}
          and displays the response below.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 text-left space-y-3 border border-gray-100">
          {loading && (
            <p className="text-gray-400 text-sm animate-pulse">Fetching from the edge…</p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {greeting && (
            <>
              <Row label="Message" value={greeting.message} />
              <Row label="Your location" value={greeting.location} />
              <Row label="Edge region" value={greeting.region} />
              <Row label="Request ID" value={greeting.requestId} mono />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Row({
  label,
  value,
  mono = false,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-gray-500 shrink-0">{label}</span>
      <span
        className={`text-gray-900 text-right break-all ${mono ? 'font-mono text-xs' : 'font-medium'}`}
      >
        {value}
      </span>
    </div>
  )
}
