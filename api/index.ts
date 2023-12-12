// import { Hono } from 'hono'
// import { handle } from 'hono/vercel'

// export const config = {
//   runtime: 'edge',
// }

// const app = new Hono().basePath('/api')

// app.get('/', (c) => c.json({ message: 'Hello Hono!' }))

// export default handle(app)


// ===========================================
// https://zenn.dev/yusukebe/articles/47dea431a00752

// import { NextRequest } from 'next/server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hooo!!!!!' })
})

app.get('/api/vercel', (c) => {
  return c.json({ message: 'API in Vercel' })
})

export default (req:any) => app.request(req)

export const config = {
  runtime: 'experimental-edge',
}