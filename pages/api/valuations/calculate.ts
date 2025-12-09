import type { NextApiRequest, NextApiResponse } from 'next'
import { valuate } from 'valuation-engine'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = valuate(req.body)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error: String(error) })
  }
}