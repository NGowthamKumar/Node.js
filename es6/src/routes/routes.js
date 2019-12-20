import * as rout from '../config/express';
import * as obj from '../controller/controller';
rout.router.post('/create',obj.cre);
rout.router.post('/delete',obj.del);

module.exports = rout.router;