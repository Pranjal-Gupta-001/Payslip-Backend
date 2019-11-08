const Joi = require('joi');

function schema(req,res,next){
    const employee_detail  = {
        "first_name" : Joi.string().regex(/^[a-zA-Z]+$/).required(),
        "last_name"  : Joi.string().regex(/^[a-zA-Z]+$/).required(),
        "annual_salary" : Joi.number().integer().required(),
        "super_rate" : Joi.string().regex(/^[0-9]+%$/).required(),
        "payment_start_date" : Joi.string().required()
    }
        
    var valid = Joi.validate(req.body,employee_detail)
    if(valid.error != null){
        res.status(400).send(valid.error.details[0].message);
        return;
        
    }
    next();
      
}

module.exports = schema;
