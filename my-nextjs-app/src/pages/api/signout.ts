// /src/pages/api/signOut.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { signOutAction } from '@/actions/SignOut';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log("signing out");
      await signOutAction();  // Call your server-side action
      res.status(200).json({ message: 'Signed out successfully' });
      console.log("we did it");
    } catch (error) {
      console.error('Error during sign out:', error);
      res.status(500).json({ message: 'Failed to sign out' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
