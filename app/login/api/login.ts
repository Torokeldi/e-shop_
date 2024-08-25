import type { NextApiRequest, NextApiResponse } from 'next';
import { authAPI } from '@/lib/auth';

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { username, password } = req.body;
  try {
    const data = await authAPI.login(username, password);
    return res.status(200).json(data);
  } catch (error) {
    console.error('Login error:', error);
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
