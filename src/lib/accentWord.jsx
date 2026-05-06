import React from 'react'

export function accentWord(title, accent) {
  if (!title || !accent || !title.includes(accent)) return title
  const parts = title.split(accent)
  return (
    <>
      {parts[0]}
      <span className="text-accent">{accent}</span>
      {parts[1]}
    </>
  )
}
