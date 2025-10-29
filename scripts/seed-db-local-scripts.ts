import { db, pool } from "../server/db/db";
import { seed } from "drizzle-seed";
import * as schema from "../server/db/schema";

const seedDB = async () => {
    console.log("clearing db");
    await db.delete(schema.todosTable);

    await seed(db, schema).refine((funcs) => ({
        user: {
            columns:{},
            count: 10,
            with:{
                todosTable: 10
            }
        },
        todosTable: {
            columns: {
                title: funcs.valuesFromArray({
                    values: ["buy groceries", " call mom", "read a book", "do laundry", "clean room"]
                }),
                description: funcs.valuesFromArray({
                    values: ["at 5 pm", "at 6 pm", "at 7 pm", "weekly", undefined]
                }),
            },
        },
    }));
}

seedDB().then(() => {
    console.log("seeded");
    return pool.end();
}).catch((e) => {
    console.error(e);
    return pool.end();
});