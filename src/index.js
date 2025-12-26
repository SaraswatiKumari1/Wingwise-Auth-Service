const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

//const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        // const service  = new UserService();
        // const token = service.createToken({email: 'saras@admin.com', id: 1});
        // console.log("Token is ", token);
        // const response = service.verifyToken(token);
        // console.log("Response from verify token ", response);
    });
}

prepareAndStartServer();