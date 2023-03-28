const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A guest must have a name'],
      unique: false,
      trim: true,
      maxLength: [
        40,
        'A tour name must have less or equal than 40 characters',
      ],
      minLength: [
        2,
        'A tour name must have more or equal than 10 characters',
      ],
      validate: [
        validator.isAlpha,
        'Guest name must only contain characters',
      ],
    },
    slug: {
      type: String,
      unique: true,
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message:
          'Difficulty is either: easy, medium, difficult',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message:
          'Discount price ({VALUE}) should be below regular price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

guestSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// Document middleware: runs before .save() and .create() ! and .create()
guestSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Query middleware
guestSchema.pre(/^find/, function (next) {
  this.find({ secretTour: { $ne: true } });
  next();

  this.start = Date.now();
});

guestSchema.post(/^find/, function (docs, next) {
  console.log(
    `Query took ${Date.now() - this.start} miliseconds!`,
  );
  next();
});

/*
// AGGREGATION MIDDLEWARE
guestSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({
    $match: { secretTour: { $ne: true } },
  }),
    next();
});
*/

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
