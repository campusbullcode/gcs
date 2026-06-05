import { useEffect, useRef } from 'react'
import { PAGE_HTML } from './markup.js'
import { initInteractions } from './interactions.js'

export default function App() {
  const ref = useRef(null)

  useEffect(() => {
    // markup is already in the DOM via dangerouslySetInnerHTML; wire up interactions
    const cleanup = initInteractions()
    return cleanup
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
}
