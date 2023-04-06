import clientPromise from '../../../lib/mongodb';

export default async (req, res) => {
  let guest;
  try {
    const { name } = req.query;
    const client = await clientPromise;
    const db = client.db('wedding');

    if (req.method === 'GET') {
      guest = await db.collection('guests').findOne({ name });
    }

    if (req.method === 'PATCH') {
      guest = await db
        .collection('guests')
        .findOneAndUpdate({ name }, { $set: req.body }, { new: true, runValidators: true });
    }

    if (!guest) {
      return res.status(404).json({
        status: 'failed',
        message: 'Is jou naam reggespel?',
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
