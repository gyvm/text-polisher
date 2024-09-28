import { useState } from 'hono/jsx'

export default function Counter({ init = 0 }: { init?: number }) {
  const [count, setCount] = useState(init)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
