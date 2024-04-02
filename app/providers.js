// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { cookieConsentGiven } from './banner'

export function PHProvider({ children }) {
  if (typeof window !== 'undefined') {
    posthog.init('phc_e0WuIHGPtzUDYuuoD884JP5jAJx1iWaDCArKY8h2eSh', {
      api_host: '62051',
      persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory'
    })
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
