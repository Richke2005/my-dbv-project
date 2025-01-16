const DataSource = require('../database/models/index.js');
const {compare} = require('bcryptjs');
const {sign} = require('jsonwebtoken');
require("dotenv").config();

class AuthService{
    #user
    constructor(){
        this.#user = DataSource.models['users'];
    }

    async login(doc){
        const user = await this.#user.findOne({email: doc.email});

        if(!user){
            throw new Error('User not found');
        }
        
        const isPasswordValid = await compare(doc.password, user.password);

        if(!isPasswordValid){
            throw new Error('Invalid user or password');
        }

        const accessToken = sign({
            id: user.id,
            email: user.email
        }, process.env.SECRET_KEY, {
            expiresIn: 86400
        })

        return {accessToken};
    }
    
    async register(doc){
        
    }
}

module.exports = AuthService;