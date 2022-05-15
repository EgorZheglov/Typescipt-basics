import Joi from 'joi';

export const taskCreateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const order = Joi.string();
  const description = Joi.string().min(2).max(200);

  const schema = Joi.object({
    title: title.required(),
    order: order.required(),
    description: description.required(),
  });

  return schema.validate(data);
};

export const taskUpdateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const order = Joi.string();
  const description = Joi.string().min(2).max(200);
  const status = Joi.string();

  const schema = Joi.object({
    title: title,
    order: order,
    description: description,
    status: status,
  });

  return schema.validate(data);
};
