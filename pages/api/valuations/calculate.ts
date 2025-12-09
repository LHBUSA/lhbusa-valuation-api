import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { valuate } = await import('valuation-engine')
    const result = valuate(req.body)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: String(error) })
  }
}