export const API_DOMAIN = process.env.NEXT_PUBLIC_SERVIE_DOMAIN || ''
export const API_KEY = process.env.NEXT_PUBLIC_API_KEY || ''

export const API_HEADER = {
  headers: {
    'Content-Type': 'application/json',
    'X-MICROCMS-API-KEY': API_KEY,
  },
}
