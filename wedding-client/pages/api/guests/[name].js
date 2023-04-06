import clientPromise from '../../../lib/mongodb';
// import APIFeatures from '../../lib/utils/apiFeatures';
// import catchAsync from '../../lib/utils/catchAsync';
// import GuestModel from '../../lib/models/guestModel';
import AppError from '../../../lib/utils/appError';

export default async (req, res) => {
  let guest;
  try {
    // get the name of the guest
    const { name } = req.query;

    const nameParts = name.split('-');

    const firstName = nameParts[0];
    const lastName = nameParts[1];

    const client = await clientPromise;
    const db = client.db('wedding');

    if (req.method === 'GET') {
      guest = await db.collection('guests').findOne({ first_name: firstName, last_name: lastName });
    } else if (req.method === 'PATCH') {
      guest = await db
        .collection('guests')
        .findOneAndUpdate(
          { first_name: firstName, last_name: lastName },
          { $set: req.body },
          { new: true, runValidators: true },
        );
    }

    if (!guest) {
      res.status(404).json({
        status: 'failed',
        message: 'Is jou naam reggespel?',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        guest,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
