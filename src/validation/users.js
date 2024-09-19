import Joi from 'joi';

export const createUserValidationSchema = Joi.object({
  fullName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.base': 'Full name should be a string.',
      'string.empty': 'Full name is required.',
      'string.min': 'Full name should have at least 3 characters.',
      'string.max': 'Full name should have at most 100 characters.',
      'any.required': 'Full name is required.'
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.email': 'Please provide a valid email address.',
    }),

  dateOfBirth: Joi.date()
    .iso()
    .required()
    .messages({
      'date.base': 'Date of birth should be a valid date.',
      'any.required': 'Date of birth is required.'
    }),

  heardAboutEvent: Joi.string()
    .valid('Social Media', 'Friend', 'Found myself')
    .required()
    .messages({
      'any.only': 'Heard about event must be one of "Social Media", "Friend", or "Found myself".',
      'any.required': 'This field is required.'
    }),
});
