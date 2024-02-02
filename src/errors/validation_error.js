const WrongRequest = require("./wrong_request");

class ValidationError extends WrongRequest{
  //Faz a ligação com erros do mongoose
  constructor(err){
    const errorMessage = Object.values(err.errors)
      .map(err => err.message)
      .join("; ");
    super(`The following errors were encountered: ${errorMessage}`);
  }
}

module.exports = ValidationError;