const Guest = require('../models/guestModel');
const APIFeatures = require('../utils/apiFeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllGuests = catchAsync(
  async (req, res, next) => {
    // EXECUTE QUERY
    const features = new APIFeatures(
      Guest.find(),
      req.query,
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const guests = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: guests.length,
      data: {
        guests,
      },
    });
  },
);

exports.getGuest = catchAsync(async (req, res, next) => {
  const guest = await Guest.findOne(req.params.name);

  if (!guest) {
    return next(
      new AppError(
        `No guest found with ID: ${req.params.id}`,
        404,
      ),
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      guest,
    },
  });
});

exports.updateGuest = catchAsync(async (req, res, next) => {
  const updatedGuest = await Guest.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedGuest) {
    // this was !guest
    return next(
      new AppError(
        `No guest found with ID: ${req.params.id}`,
        404,
      ),
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      guest: updatedGuest,
    },
  });
});
