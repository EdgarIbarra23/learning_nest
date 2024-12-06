import * as Joi from "joi";

const roleValidation = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'any.required': 'El nombre es obligatorio',
        'string.empty': 'El nombre no puede estar vacío'
    }),
});

export { roleValidation };