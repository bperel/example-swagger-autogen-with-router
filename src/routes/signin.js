module.exports.post = (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/AddUser" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    res.status(201).json({
        data: [],
        message: 'Authentication successed'
    })
}