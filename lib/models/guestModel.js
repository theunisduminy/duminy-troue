/* eslint-disable no-useless-escape */
import mongoose from 'mongoose';
import slugify from 'slugify';
import validator from 'validator';

const validateEmail = function (email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const guestSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'A guest must have a first name'],
      unique: false,
      trim: true,
      maxLength: [40, 'A first name must have less or equal than 40 characters'],
      minLength: [2, 'A first name must have more or equal than 10 characters'],
      validate: [validator.isAlpha, 'Guest first name must only contain characters'],
    },
    last_name: {
      type: String,
      required: [true, 'A guest must have a last name'],
      unique: false,
      trim: true,
      maxLength: [40, 'A last name must have less or equal than 40 characters'],
      minLength: [2, 'A last name must have more or equal than 10 characters'],
      validate: [validator.isAlpha, 'Guest last name must only contain characters'],
    },
    slug: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    guest_message: {
      type: String,
      default: 'Kan nie wag om ons groot dag saam jou te deel nie!',
      trim: true,
      required: [true, 'A guest must have a message'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    rsvp: {
      type: Boolean,
      default: false,
      required: [true, 'RSP must exist'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

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
  console.log(`Query took ${Date.now() - this.start} miliseconds!`);
  next();
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
