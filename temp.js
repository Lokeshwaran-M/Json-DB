const fs = require('fs');


j = "data.json"

    const data = j.readData();
    console.log(data)
    data.push({ id: 1, name: 'lok', age: 20 });
    fs.promises.writeFile(j, JSON.stringify(data));;
  