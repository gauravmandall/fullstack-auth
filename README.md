# Full stack Authentication with Next.js, Prisma, Next-auth, and Tailwind CSS

## Getting Started


Key Features:
- 🔐 Next-auth v5 (Auth.js)
- 🚀 Next.js 14 with server actions
- 🔑 Credentials Provider
- 🌐 OAuth Provider (Social login with Google & GitHub)
- 🔒 Forgot password functionality
- ✉️ Email verification
- 📱 Two factor verification
- 👥 User roles (Admin & User)
- 🔓 Login component (Opens in redirect or modal)
- 📝 Register component
- 🤔 Forgot password component
- ✅ Verification component
- ⚠️ Error component
- 🔘 Login button
- 🚪 Logout button
- 🚧 Role Gate
- 🔍 Exploring next.js middleware
- 📈 Extending & Exploring next-auth session
- 🔄 Exploring next-auth callbacks
- 👤 useCurrentUser hook
- 🛂 useRole hook
- 🧑 currentUser utility
- 👮 currentRole utility
- 🖥️ Example with server component
- 💻 Example with client component
- 👑 Render content for admins using RoleGate component
- 🛡️ Protect API Routes for admins only
- 🔐 Protect Server Actions for admins only
- 📧 Change email with new verification in Settings page
- 🔑 Change password with old password confirmation in Settings page
- 🔔 Enable/disable two-factor auth in Settings page
- 🔄 Change user role in Settings page (for development purposes only)

### Prerequisites

**Node version 18.7.x**

### Cloning the repository

```shell
git clone https://github.com/gauravmandall/fullstack-auth.git
```

### Install packages

```shell
npm i

# or

yarn install

# or

pnpm install
```

### Setup .env file
rename `.env.example` to `.env` and fill in the values


```js
DATABASE_URL=
DIRECT_URL=

AUTH_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

RESEND_API_KEY=

NEXT_PUBLIC_APP_URL="http://localhost:3000" # or your production domain
```

### To obtain these values follow the steps below

Resend Api: https://resend.com/api-keys

To obtain these values follow the `url` below

| variables           | url                                                 |
| :--------------     | :------------------------------------------------   |
| `Database key`      | https://console.neon.tech/                          |
| `Github oauth key`  | https://github.com/settings/applications/new        |
| `Google api key`    | https://console.cloud.google.com/apis/credentials/  |
| `Resend api key`    | https://resend.com/api-keys                         |




### Setup Prisma
```shell
npx prisma generate
npx prisma db push
```
to clean prisma db
```shell
npx prisma migrate reset  # danger zone
```

### Start the app

```shell
npm run dev

# or

yarn dev

# or

pnpm dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |