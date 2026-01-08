const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

//const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const db = require('./models/index');
    
    app.use('/api', apiRoutes);
    //const {User, Role} = require('./models/index');

    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        if(process.env.DB_SYNC) {
            await db.sequelize.sync({alter: true});
        }
        // const u1 = await User.findByPk(3);
        // const r1 = await Role.findByPk(1);
        // await u1.addRole(r1);
        // const service  = new UserService();
        // const token = service.createToken({email: 'saras@admin.com', id: 1});
        // console.log("Token is ", token);
        // const response = service.verifyToken(token);
        // console.log("Response from verify token ", response);
    });
}

prepareAndStartServer();