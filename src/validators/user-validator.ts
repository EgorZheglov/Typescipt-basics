import Joi from 'joi';

export const userCreateValidator = (data: any): Joi.ValidationResult => {
  const login = Joi.string().min(2).max(100);
  const name = Joi.string().required();
  const password = Joi.string().min(2).max(100);

  const schema = Joi.object({
    login: login.required(),
    name: name.required(),
    password: password.required(),
  });

  return schema.validate(data);
};

export const userUpdateValidator = (data: any): Joi.ValidationResult => {
  const login = Joi.string().min(2).max(100);
  const name = Joi.string();
  const password = Joi.string().min(2).max(100);

  const schema = Joi.object({
    login: login,
    name: name,
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
