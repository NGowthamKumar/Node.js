import * as exp from './config/express';

require('./config/mongoose');
exp.app.use('/app',require('./routes/routes'));


exp.app.listen(8000,() => { console.log("App running on port 8000");
});






