const { verify, decode } = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) 
        return res.status(401).send({ message: 'Token not provided' });

    const [, tokenHash] = token.split(' ');

    try{
        verify(tokenHash, process.env.SECRET_KEY);

        const { id, email } = decode(tokenHash);

        req.userId = id;
        req.userEmail = email;

        next();
    }catch(error){
        return res.status(401).send({ message: 'User not authorized' });
    }
}