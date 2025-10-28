To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

## setup drizzle
```sh
bun add drizzle-orm pg dotenv
bun add -D drizzle-kit tsx @types/pg
```

## add .env
```sh
DATABASE_URL=postgresql://user:password@localhost:5432/todos
```

## references
- [drizzle for postgresql](https://orm.drizzle.team/docs/get-started/postgresql-new)

## setup drizzle seed
```sh
bun add -D drizzle-seed
```

## references for db seed
- [drizzle seed](https://orm.drizzle.team/docs/seed-overview#installation)



