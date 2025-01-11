const Service = require('./services.js');
const DataSource = require('../database/models/index.js');
const {compare} = require('bcryptjs');
const {sign} = require('jsonwebtoken');
require("dotenv").config();

class AuthService{
    #leadership;
    #pathfinder;
    constructor(){
        this.#leadership = DataSource.models['leaderships'];
        this.#pathfinder = DataSource.models['pathfinders'];
    }

    async login(doc){
        const pathfinder = await this.#pathfinder.findOne({email: doc.email});
        const leadership = await this.#leadership.findOne({email: doc.email});

        if(!pathfinder && !leadership){
            throw new Error('User not found');
        }
        
        const validUser = pathfinder || leadership;
        const isPasswordValid = await compare(doc.password, validUser.password);

        if(!isPasswordValid){
            throw new Error('Invalid user or password');
        }

        const accessToken = sign({
            id: validUser.id,
            email: validUser.email
        }, process.env.SECRET_KEY, {
            expiresIn: 86400
        })

        return {accessToken};
    }
    
    async register(doc){
        
    }
}

module.exports = AuthService;