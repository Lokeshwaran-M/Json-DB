
const jsonDB = require('./json-DB');


const db = new jsonDB('data.json');
db.create({ id: 1, name: 'lok', age: 18 });
db.create({ id: 2, name: 'sh', age: 20 });
db.getAll().then((data) => console.log(data));
db.update(2, { id: 2, name: 'loke', age: 18 });
db.delete(1);
db.getAll().then((data) => console.log(data));