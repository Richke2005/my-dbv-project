const AuthService = require('../services/authService.js');

const authService = new AuthService();

class AuthController{

    async login(req, res){
        try{
            // login logic
            const { email, password } = req.body;

            const token = await authService.login({email, password});

            return res.status(200).send(token);
        }catch(error){
            return res.status(500).send({message: error.message});
        }
        
    }
    async register(req, res){
        // register logic
    }
}

module.exports = AuthController;