import { desc, eq } from "drizzle-orm";
import { db } from "./db";
import { todosTable } from "./schema";

export const getTodosByUserId = async (userId: string) => {
    return await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, userId))
    .orderBy(desc(todosTable.createdAt))
}
