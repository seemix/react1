import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яЁёіІЇї]{1,20}$')).required().messages({
        'string.empty': 'MODEL can\'t be empty',
        'string.pattern.base': 'Input doesn\'t match'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base': 'Year should be from 1990 to 2022'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base': 'Price must be from 0 to 1 million'
    })
})