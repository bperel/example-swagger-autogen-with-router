/*
 * Run the project and access the documentation at: http://localhost:3000/doc
 *
 * Use the command below to generate the documentation without starting the project:
 * $ npm start
 *
 * Use the command below to generate the documentation at project startup:
 * $ npm run start-gendoc
 */

const path = require("path")
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger-output.json')
const express = require('express')
const app = express()
const { router } = require( "express-file-routing");

app.use("/", router({  directory: path.join(__dirname, "routes")}));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {
  console.log("Server is running!\nAPI documentation: http://localhost:3000/doc")
})
