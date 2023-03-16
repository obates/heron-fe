This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Considerations

- I've committed the .env.local file for demo purposes. I would expect this file to be populated by the CI.
- I've installed Prettier (instead of ESLint) for linting as it is out-the-box & opinionated.
- Tests using React Testing Library & Jest. Would obviously make these a lot more substantial. Could also investigate Cypress etc.
- Loading states & skeleton logic started getting slightly messy within the ExtractedMerchantRow component - would probably refactor this

## Future Ideas / Improvements

- 
