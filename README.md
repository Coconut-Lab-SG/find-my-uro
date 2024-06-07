# FindMyUro Front End

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

- Node.js (latest LTS version)
- PNPM package manager

If you don't have PNPM installed, you can install it globally using npm:

```bash
npm install -g pnpm
```

For more information on installing PNPM, please refer to the [official PNPM documentation](https://pnpm.io/installation).

## Getting Started

1. Install the dependencies using PNPM:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Building for Production

To build the project for production, run:

```bash
pnpm build
```

After the build process is complete, you can start the production server using:

```bash
pnpm start
```

## Development

### Environment Variables

This project uses environment variables to configure the API endpoints and secrets.

To set a new environment variables, copy a `.env.local` file in the root of the project and chang the values as needed.

```bash
BASE_URL=http://localhost:3000
```

There are two types of environment variables in this project:

1. Variables that are used in the client-side code, which are prefixed with `NEXT_PUBLIC_`.
2. Variables that are used in the server-side code, which are not prefixed.

To add a new variable, add a new line to the `.env.local` file:

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
