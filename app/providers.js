// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

export function PHProvider({ children }) {
  if (typeof window !== 'undefined') {
    posthog.init('phc_e0WuIHGPtzUDYuuoD884JP5jAJx1iWaDCArKY8h2eSh', {
      api_host: '62051',
    })
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}