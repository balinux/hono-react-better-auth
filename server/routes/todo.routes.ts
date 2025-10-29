import { Hono } from "hono";
import { getTodosByUserId } from "../db/queries";

export const todos = new Hono()
.get('/', async (c) => {
   try {
      const todos = await getTodosByUserId()
      return c.json(todos)
    } catch (error) {
      return c.json({ error: "Failed to fetch todos" }, 500)
    }
})