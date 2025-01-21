const Joi = require('joi');
const objectID = require('mongodb').ObjectId;

// First name validation
const firstName = Joi.string().min(2).required().messages({
    "string.base": "First name should be a string",
    "string.empty": "First name cannot be empty",
    "string.min": "First name must be at least 2 characters long",
    "any.required": "First name is required",
  });
  
  // Last name validation
  const lastName = Joi.string().min(2).required().messages({
    "string.base": "Last name should be a string",
    "string.empty": "Last name cannot be empty",
    "string.min": "Last name must be at least 2 characters long",
    "any.required": "Last name is required",
  });

  // Email validation
const email = Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  });
  
  // Password validation
  const password = Joi.string().min(6).required().messages({
    "string.base": "Password should be a string",
    "string.min": "Password should be at least 6 characters long",
    "any.required": "Password is required",
  });

  // Phone number validation
const phoneNumber = Joi.string()
.pattern(/^[0-9]{10,15}$/)
.required()
.messages({
  "string.pattern.base": "Phone number must be between 10 and 15 digits long",
  "any.required": "Phone number is required",
});

// Gender validation
const gender = Joi.string()
  .valid("male", "female", "other")
  .required()
  .messages({
    "any.only": 'Gender must be one of "male", "female", or "other"',
    "any.required": "Gender is required",
  });

// Username validation
const username = Joi.string().min(3).max(30).required().messages({
    "string.base": "Username should be a string",
    "string.empty": "Username cannot be empty",
    "string.min": "Username must be at least 3 characters long",
    "string.max": "Username can be at most 30 characters long",
    "any.required": "Username is required",
  });



// Reusable validators for common fields
const text = Joi.string().optional().allow(null, "").messages({
    "string.base": "Text must be a string",
  });

  const identifier = Joi.string().required().messages({
    "string.base": `"identifier" should be a type of 'text'`,
    "string.empty": `"identifier" cannot be an empty field`,
    "any.required": `"identifier" is a required field`,
  });
  
  const otp = Joi.string().required().messages({
    "string.base": `"otp" should be a type of 'text'`,
    "string.empty": `"otp" cannot be an empty field`,
    "any.required": `"otp" is a required field`,
  });
  
  const strings = Joi.string().messages({
    "string.base": `field must be a string`,
    "string.empty": `An empty field`,
  });

  const id = Joi.string()
  .custom((value, helpers) => {
    const filtered = ObjectID.isValid(value);
    return !filtered ? helpers.error("any.invalid") : value;
  }, "invalid objectId")
  .required();

const optionalId = Joi.string()
  .optional()
  .allow(null)
  .custom((value, helpers) => {
    const filtered = ObjectID.isValid(value);
    return !filtered ? helpers.error("any.invalid") : value;
  }, "invalid objectId");

  module.exports = {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    id,
    optionalId,
    text,
    gender,
    username,
    identifier,
    otp,
    strings,
  }