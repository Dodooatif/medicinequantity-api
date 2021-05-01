const Joi = require("joi")
//register staff validation
const validateAddUser = new Joi.object( {
    firstname:Joi.string().min(4).required().max(150),
    lastname:Joi.string().min(4).required().max(150),
    email:Joi.string().min(10).max(200).email().required(),
    age:Joi.string().min(2).max(3).required(),
    phone:Joi.string().min(10).max(14).required(),
    password:Joi.string().min(8).max(50).required()
}) 

module.exports= {validateAddUser};