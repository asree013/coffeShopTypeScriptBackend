"use strict";
const db = require('./models');
db.connect.sync({
    force: true
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
//# sourceMappingURL=sync.js.map