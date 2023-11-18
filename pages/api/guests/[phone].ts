import clientPromise from '../../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let guest;
  try {
    const { phone } = req.query;
    const client = await clientPromise;
    const db = client.db('wedding');

    if (req.method === 'GET') {
      guest = await db.collection('guests').findOne({ phone });
    }

    if (req.method === 'PATCH') {
      guest = await db.collection('guests').findOneAndUpdate(
        { phone },
        { $set: req.body },
        {
          returnDocument: 'after',
        },
      );
    }

    if (!guest) {
      return res.status(404).json({
        status: 'failed',
        message: 'Is jou nommer reg?',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        guest,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
