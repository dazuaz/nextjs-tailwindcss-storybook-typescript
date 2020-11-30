## nextjs-tailwindcss-storybook-typescript

This package aims to be a flexible starting point if you want to use Nextjs, TailwindCSS, Storybook and typescript.

### TailwindCSS

It is built by nextjs pipeline and included independently in Storybook.

Please review `package.json` and make changes according your needs

```
"tailwind-storybook": "tailwind build ./styles/tailwind.css -o ./public/storybook/tailwind.storybook.css",
"storybook": "npm run tailwind-storybook && start-storybook -s ./public -p 6006",
"build-storybook": "build-storybook"
```

## NextJS default Readme...

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
