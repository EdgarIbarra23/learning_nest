import * as Joi from "joi";

const userValidation = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'any.required': 'El nombre es obligatorio',
        'string.empty': 'El nombre no puede estar vacío'
    }),

    lastName: Joi.string().min(1).required().messages({
        'string.base': 'El apellido debe ser una cadena de texto.',
        'any.required': 'El apellido es obligatorio',
        'string.empty': 'El apellido no puede estar vacío'
    }),

    age: Joi.number().min(1).required().messages({
        'number.base': 'La edad debe ser un número positivo.',
        'number.min': 'La edad no puede ser cero o negativa.',
        'any.required': 'La edad es obligatoria'
    }),

    email: Joi.string().email().required().messages({
        'string.base': 'El correo electrónico debe ser una cadena de texto.',
        'string.email': 'El correo electrónico debe tener un formato válido.',
        'any.required': 'El correo electrónico es obligatorio',
        'string.empty': 'El correo electrónico no puede estar vacío'
    }),

    password: Joi.string().min(8).required().messages({
        'string.base': 'La contraseña debe ser una cadena de texto.',
        'string.min': 'La contraseña debe tener al menos 8 caracteres.',
        'any.required': 'La contraseña es obligatoria.',
        'string.empty': 'La contraseña no puede estar vacía.'
    }),

    role: Joi.number().min(1).required().messages({
        'number.base': 'El role debe ser un número.',
        'number.min': 'El role no puede ser cero o negativa.',
        'any.required': 'El role es obligatorio'
    }),

    // company_id: Joi.number().min(1).required().messages({
    //     'number.base': 'El company_id debe ser un número.',
    //     'number.min': 'El company no puede ser cero o negativa.',
    //     'any.required': 'El company_id es obligatorio'
    // }),
});

export { userValidation };