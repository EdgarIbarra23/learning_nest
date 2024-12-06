import * as Joi from "joi";

const authValidation = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'any.required': 'El nombre es obligatorio',
        'string.empty': 'El nombre no puede estar vacío'
    }),

    password: Joi.string().min(8).required().messages({
        'string.base': 'La contraseña debe ser una cadena de texto.',
        'string.min': 'La contraseña debe tener al menos 8 caracteres.',
        'any.required': 'La contraseña es obligatoria.',
        'string.empty': 'La contraseña no puede estar vacía.'
    }),

});

export { authValidation };