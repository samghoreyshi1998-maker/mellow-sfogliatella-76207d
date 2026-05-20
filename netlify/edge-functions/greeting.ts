import type { Context, Config } from '@netlify/edge-functions'

export default async (req: Request, context: Context) => {
  const city = context.geo?.city ?? 'the world'
  const country = context.geo?.country?.name ?? ''
  const location = country ? `${city}, ${country}` : city

  return Response.json({
    message: `Hello from the edge!`,
    location,
    region: context.server?.region ?? 'unknown',
    requestId: context.requestId,
  })
}

export const config: Config = {
  path: '/api/greeting',
}
