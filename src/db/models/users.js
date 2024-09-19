import {model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
      unique: true,

    },
     dateOfBirth: {
      type: Date,
      required: true,

    },

    heardAboutEvent: {
      type: String,
      required: true,
      enum: ['Social Media', 'Friend', 'Found myself'],
      default: "Found myself",

    },


  },

  {
    timestamps: true,
    versionKey: false,
  },
);

export const UsersCollection = model('users', usersSchema);
