import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
// import Counter from '../islands/counter'
import { getCookie, setCookie } from 'hono/cookie'

const className = css`
  font-family: sans-serif;
`

export const POST = createRoute(async (c) => {
  const { name } = await c.req.parseBody<{ name: string }>()
  setCookie(c, 'name', name)
  return c.redirect('/')
})

export default createRoute((c) => {
  const name = getCookie(c, 'name') ?? 'no name'
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <form method='post'>
        <input type={'text'} name={'name'} placeholder={'name'} />
        <input type='submit' />
      </form>
    </div>,
  )
})
