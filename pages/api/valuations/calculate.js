// pages/api/valuations/calculate.js

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { valuate } = await import('valuation-engine');
    const result = valuate(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: String(error) });
  }
}

module.exports = handler;
