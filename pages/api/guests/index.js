import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('wedding');

    if (req.method === 'GET') {
      const guests = await db.collection('guests').find({}).limit(200).toArray();

      res.status(200).json({
        status: 'success',
        results: guests.length,
        data: {
          guests,
        },
      });
    }

    if (req.method === 'POST') {
      const guest = await db.collection('guests').insertOne(req.body);

      res.status(200).json({
        status: 'success',
        results: guest,
      });
    }
  } catch (e) {
    console.error(e);
  }
};
