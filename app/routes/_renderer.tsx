import { jsxRenderer } from 'hono/jsx-renderer'
import {HasIslands} from "honox/server";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        {import.meta.env.PROD ? (
          <HasIslands>
            <script type='module' src='/static/client.js'></script>
          </HasIslands>
        ) : (
          <script type='module' src='/app/client.ts'></script>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
})
