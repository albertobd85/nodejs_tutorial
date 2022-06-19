const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' }];

const userInput = {
    personalInfo: {
        streetAddress: '12345678dasdasd',
        city: 'dsfasdfa',
        state: 'fl'
    },
    preferences: arrayString
};


const personalInfoSchema = Joi.object({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
})
const preferencesSchema = Joi.array().items(Joi.string());
const schema = Joi.object({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

console.log(schema.validate(userInput));