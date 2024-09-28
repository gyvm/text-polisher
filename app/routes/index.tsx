import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'
import { useRequestContext } from 'hono/jsx-renderer'

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hello</h1>
      <Counter />
      <Component />
    </div>
  )
})

// http://localhost:5173/?count=5
export function Component() {
  const c = useRequestContext()
  return <Counter init={parseInt(c.req.query('count') ?? '0', 10)} />
}
