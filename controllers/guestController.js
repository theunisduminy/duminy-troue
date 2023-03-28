const Guest = require('../models/guestModel');
const APIFeatures = require('../utils/apiFeatures');
// const AppError = require('../utils/appError');
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

/*
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is under construction',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is under construction',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is under construction',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is under construction',
  });
};
*/
