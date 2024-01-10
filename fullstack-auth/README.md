This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Full stack Authentication

## Getting Started

First, initialize the shadcn sdk:

```bash
pnpm dlx shadcn-ui@latest init
```

Then, run the development server:

```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Now add shadcn packages:

```bash
pnpm dlx shadcn-ui@latest add button card form input
```

Add React Icons:
```bash
pnpm add react-icons
```

Add prisma:
```bash
npm i -D prisma
npm i @prisma/client
```

add .env in gitignore and add .env file.

now run following commands:
```bash
npx prisma init
```
it generates prisma folder, prisma/schema.prisma file and fill the .env file with fake DATABASE_URL.

after changing the scheme.prisma and .env file run following commands:
```bash
npx prisma generate
```
and if runs successfully then run:
```bash
npx prisma db push
npx i @auth/prisma-adapter
```

now copy User and Account model from @auth/prisma-adapter to schema.prisma file and add   password      String?
to User model. then run following commands:
```bash
npx prisma generate
npx prisma db push
```


now add bcrypt or bcryptjs:
```bash
npm i bcrypt
npm i -D @types/bcrypt

or

npm i bcryptjs
npm i -D @types/bcryptjs

```


Timestamp: 2:17:57