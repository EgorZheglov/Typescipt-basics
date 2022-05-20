import Joi from 'joi';

export const taskCreateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const description = Joi.string().min(2).max(200);
  const user = Joi.string();

  const schema = Joi.object({
    title: title.required(),
    description: description.required(),
    user: user,
  });

  return schema.validate(data);
};

export const taskUpdateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(30);
  const description = Joi.string().min(2).max(200);
  const status = Joi.string();
  const user = Joi.string();

  const schema = Joi.object({
    title: title,
    description: description,
    status: status,
    user: user,
  });

  return schema.validate(data);
};
