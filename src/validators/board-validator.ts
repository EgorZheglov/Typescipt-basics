import Joi from 'joi';

export const boardCreateValidator = (data: any): Joi.ValidationResult => {
  const title = Joi.string().min(2).max(100);

  const schema = Joi.object({
    title: title.required(),
  });

  return schema.validate(data);
};


