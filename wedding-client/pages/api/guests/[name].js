import clientPromise from '../../../lib/mongodb';
// import APIFeatures from '../../lib/utils/apiFeatures';
// import catchAsync from '../../lib/utils/catchAsync';
// import GuestModel from '../../lib/models/guestModel';

export default async (req, res) => {
  try {
    // get the name of the guest
    const { name } = req.query;

    const client = await clientPromise;
    const db = client.db('wedding');
    const guest = await db.collection('guests').findOne({ first_name: name });

    if (!guest) {
      return next(new AppError(`No guest found with name: ${name}`, 404));
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
