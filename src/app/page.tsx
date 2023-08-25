'use client'

import { useCompletion } from 'ai/react'

export default function Home() {
  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: '/api/generate-sql',
    body: {
      schema: ''
    },
  })

  const result = completion

  return (
    <main></main>
  )
}
