const DataSource = require('../database/models/index.js')

const roles = (rolesList) => {
    return async (req, res, next) => {
        const { userId } = req

        const user = await DataSource.models['users'].findById(userId, {classification: 1});

        if (!user) {
            return res.status(401).send({message: 'User not registered'});
        }

        const registeredRoles = rolesList.includes(user.classification);

        if (!registeredRoles) {
            return res.status(401).send({message: 'User not authorized for this route'});
        }

        return next();
    }
}

module.exports = roles;