const { default: mongoose } = require("mongoose");
const BaseError = require("../../errors/base_error");
const WrongRequest = require("../../errors/wrong_request");
const ValidationError = require("../../errors/validation_error");


// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next){
  //middleware: middlewares são funções que interceptão requisições da api e tratam da forma correta
  if(err instanceof mongoose.Error.CastError){
    new WrongRequest().sendResponse(res);
  } else if(err instanceof mongoose.Error.ValidationError){
    new ValidationError(err).sendResponse(res);
  } else if(err instanceof BaseError){
    err.sendResponse(res);
  }else{
    new BaseError().sendResponse(res);
  }

}

module.exports = errorHandler;