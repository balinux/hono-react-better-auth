import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { auth } from './lib/auth'
import { todos } from './routes/todo.routes'

const app = new Hono().basePath('/api')

app.use(cors({
  origin: process.env.CLIENT_URL!,
  allowMethods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
}))

const router = app
  .on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw))
  .route('/todos', todos)
  .get('/users', (c) => {
    return c.json([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ])
  })

export type AppType = typeof router
export default app
