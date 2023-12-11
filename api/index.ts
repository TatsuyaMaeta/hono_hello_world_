// import { Hono } from 'hono'
// import { handle } from 'hono/vercel'

// export const config = {
//   runtime: 'edge',
// }

// const app = new Hono().basePath('/api')

// app.get('/', (c) => c.json({ message: 'Hello Hono!' }))

// export default handle(app)


import { NextRequest } from 'next/server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hooo!!!!!' })
})

export default (req) => app.request(req)

export const config = {
  runtime: 'experimental-edge',
}