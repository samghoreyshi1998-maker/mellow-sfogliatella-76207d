# Edge Function Demo

A minimal Netlify site that demonstrates how a Netlify Edge Function works alongside a React page.

## What it does

- The home page (`/`) calls a Netlify Edge Function at `/api/greeting`.
- The edge function reads the visitor's geolocation and the edge region from the Netlify context and returns them as JSON.
- The page renders the response in real time.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React + Vite) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Edge runtime | [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) (Deno) |
| Hosting | [Netlify](https://netlify.com) |

## Run locally

```bash
npm install
netlify dev
```

The app is served at <http://localhost:8888>. The edge function at `/api/greeting` is automatically emulated by the Netlify CLI.
