import Joi from 'joi';

export const taskCreateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const order = Joi.string().email();
  const description = Joi.string().min(2).max(200);

  const schema = Joi.object({
    name: title.required(),
    email: order.required(),
    password: description.required(),
  });

  return schema.validate(data);
};

export const taskUpdateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const order = Joi.string().email();
  const description = Joi.string().min(2).max(200);
  const status = Joi.string();

  const schema = Joi.object({
    name: title.required(),
    email: order.required(),
    password: description.required(),
    status: status,
  });

  return schema.validate(data);
};
