const bodyparser = require('body-parser');
const cors = require('cors');

//Configura middlewares utilizados 
module.exports = app => {
    //Configura body-parser
    app.use(bodyparser.json())
    //Configura cors
    app.use(cors())
}