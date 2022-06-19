const express = require('express');
const path = require('path');
const app = express();
const Joi = require('joi');
const bodyParser = require('body-parser');
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    const loginValidation = data => {
        const schema = Joi.object({
            email: Joi.string().min(6).required().email(),
            password: Joi.string().min(5).required()
        });
        return schema.validate(data);
    }
    module.exports = { loginValidation };
});

app.listen(3000);