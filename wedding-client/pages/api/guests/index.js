import clientPromise from '../../../lib/mongodb';
// import APIFeatures from '../../lib/utils/apiFeatures';
// import catchAsync from '../../lib/utils/catchAsync';
// import GuestModel from '../../lib/models/guestModel';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('wedding');
    const guests = await db.collection('guests').find({}).limit(200).toArray();

    res.status(200).json({
      status: 'success',
      results: guests.length,
      data: {
        guests,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
