module.exports.get = (req, res) => {
    const users = []
    const data = users.find(e => e.id === req.params.id)


    /* #swagger.responses[200] = { 
      schema: { "$ref": "#/definitions/User" },
      description: "User registered successfully." } */
    res.status(200).json({
        data: [],
        message: 'Successfully found'
    })
}