const User = require('../../models/User')

module.exports = {
    Mutation: {
        register(_, args, context, info){
            // TODO: Validate User Data
            // TODO: Make sure user doesn't exist already
            // TODO: hash password and create an auth token (installed bscryptjs jsonwebtoken)

        }
    }
}