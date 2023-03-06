**See [src/pages/api/](src/pages/api/) for API endpoints that call ChatGPT models**

## Local Development

Add a `.env.local` file to the root of the project with your [OpenAI API key](https://platform.openai.com/account/api-keys):

```
OPENAI_API_KEY=sk_....
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Indexing documentation web pages

```bash
npm run fetch-docs
```

This will crawl the documentation pages listed in [scripts/fetch-docs.ts](scripts/fetch-docs.ts), create OpenAI embeddings and store them in a vector store: [public/vectorstores/](public/vectorstores/).

This is a one-time operation that you only need to run when you want to update the documentation pages that are indexed.

This vector store is used by the ChatGPT model to find the most relevant documentation page for a given query.

## Deploying

First, install the [Fly CLI](https://fly.io/docs/getting-started/installing-flyctl/).

Then, run:

```bash
npm run deploy
```

This will deploy the app to [Fly.io](https://fly.io/), which includes a build step (see [Dockerfile](Dockerfile)).
