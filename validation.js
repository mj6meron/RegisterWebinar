// Validation
const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(5).required().email(),
        employment: Joi.string().min(3).required()
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation
};