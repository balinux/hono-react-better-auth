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

# auth with better auth
## references
- [better auth](https://www.better-auth.com/docs/installation)

## setup better auth
```sh
bun add better-auth
```
## generate better auth
```sh
bunx @better-auth/cli generate --config ./server/lib/auth.ts
```

## copy auth schema
copy auth schema to general chema

## run db generation
```sh
bun run db:generate
```
## run db migration
```sh
bun run db:migrate
```
## run db studio
```sh
bun run db:studio
``` 

