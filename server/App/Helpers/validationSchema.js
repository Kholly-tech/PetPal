const Joi = require('joi');
const ObjectID = require('mongodb').ObjectId;

// First name validation
const fullName = Joi.string().min(8).required().messages({
    "string.base": "Full name should be a string",
    "string.empty": "Full name cannot be empty",
    "string.min": "Full name must be at least 2 characters long",
    "any.required": "Full name is required",
  });

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
const media = Joi.string().messages({
  "string.base": "Media must be a string",
  "any.required": "Media is required",
});

const medias = Joi.array()
  .items(
    Joi.object({
      type: Joi.string().valid("image", "video").required().messages({
        "string.base": "Media type must be a string",
        "any.only": "Media type must be one of 'image', or 'video'",
      }),
      url: Joi.string().required().messages({
        "string.base": "Media url must be a string",
      }),
      public_id: Joi.string().required().messages({
        "string.base": "Media public_id must be a string",
      }),
    })
  )
  .allow(null)
  .messages({
    "array.base": "Medias must be an array of media objects",
  });

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

  // Pet Validation
  const petName = Joi.string().min(2).required().messages({
    "string.base": "Pet name should be a string",
    "string.empty": "Pet name cannot be empty",
    "string.min": "Pet name must be at least 2 characters long",
    "any.required": "Pet name is required",
  })

  const petType = Joi.string().valid('dog', 'cat', 'bird', 'rabbit', 'other')
  .required().messages({
    "string.base": "Pet type should be a string",
    "string.empty": "Pet type cannot be empty",
    "any.required": "Pet type is required",
  });

  const petAge = Joi.string().valid('baby', 'young', 'adult', 'senior')
  .required().messages({
    "string.base": "Pet Age should be a string",
    "string.empty": "Pet Age cannot be empty",
    "any.required": "Pet Age is required",
  });

  const petGender = Joi.string().valid('male', 'female').required().messages({
    "string.base": "Pet Gender should be a string",
    "string.empty": "Pet Gender cannot be empty",
    "any.required": "Pet Gender is required",
  });
  
  const petSize = Joi.string().valid('small', 'medium', 'large').required().messages({
    "string.base": "Pet Size should be a string",
    "string.empty": "Pet Size cannot be empty",
    "any.required": "Pet Size is required",
  });

  const petEnergyyLevel = Joi.string().valid('low', 'moderate', 'high').required().messages({
    "string.base": "Pet Energy Level should be a string",
    "string.empty": "Pet Energy Level cannot be empty",
    "any.required": "Pet Energy Level is required",
  });
  

  module.exports = {
    fullName,
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
    media,
    medias,

    //Pet
    petName,
    petAge,
    petGender,
    petSize,
    petType,
    petEnergyyLevel,
  }