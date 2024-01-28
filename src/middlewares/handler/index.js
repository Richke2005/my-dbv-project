const { default: mongoose } = require("mongoose");
const BaseError = require("../../errors/base_error");
const RequisicaoIncorreta = require("../erros/requisiçãoIncorreta");
const ErroValidacao = require("../erros/erroValidacao");


// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next){
  //middleware: middlewares são funções que interceptão requisições da api e tratam da forma correta
  if(err instanceof mongoose.Error.CastError){
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(err instanceof mongoose.Error.ValidationError){
    new ErroValidacao(err).enviarResposta(res);
  } else if(err instanceof ErroBase){
    err.enviarResposta(res);
  }else{
    new BaseError().sendResponse(res);
  }
       
}

module.exports = errorHandler;