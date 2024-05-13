import Joi from "joi";

export const formValidation = Joi.object({
    email: Joi.string().email().message("email is not valid"),
    password: Joi.string().min(6).max(12).message('password length should be between 6 to 12 characters'),
    confirm: Joi.string().valid(Joi.ref('password')).error(new Error("passwords doesn't match"))
  });