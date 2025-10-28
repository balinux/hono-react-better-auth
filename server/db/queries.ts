import { desc } from "drizzle-orm";
import { db } from "./db";
import { todosTable } from "./schema";

export const getTodos = async () => {
    return await db.select().from(todosTable).orderBy(desc(todosTable.createdAt))
}
