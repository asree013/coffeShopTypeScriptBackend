import db from './models';

db.connect.sync({
    force: true
}).then((result: any) => {
    console.log(result);
}).catch((err: any) => {
    console.log(err);
});