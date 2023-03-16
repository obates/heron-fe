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
- More/better example transaction descriptions to showcase the API better
- Handle the case where an extracted merchant doesn't have a payment processor (or merchant). It's currently just showing an empty box which isn't ideal!
- Make the Enter button work to submit the raw bank transaction!
- The typings for the API and the request/response should/could be driven by the OpenAPI spec. Saves typing the parameters & response manually on the frontend. This would also add a layer of protection to the frontend in-case the request or response object changed.
