import Joi from 'joi';

export const userCreateValidator = (data: any): Joi.ValidationResult => {
  const login = Joi.string().min(2).max(100);
  const email = Joi.string().email();
  const password = Joi.string().min(2).max(100);

  const schema = Joi.object({
    login: login.required(),
    email: email.required(),
    password: password.required(),
  });

  return schema.validate(data);
};

export const userUpdateValidator = (data: any): Joi.ValidationResult => {
  const login = Joi.string().min(2).max(100);
  const email = Joi.string().email();
  const password = Joi.string().min(2).max(100);

  const schema = Joi.object({
    login: login,
    email: email,
    password: password,
  });

  return schema.validate(data);
};

export const userLoginValidator = (data: any): Joi.ValidationResult => {
  const login = Joi.string().min(2).max(100);
  const password = Joi.string().min(2).max(100);

  const schema = Joi.object({
    login: login.required(),
    password: password.required(),
  });

  return schema.validate(data);
};
