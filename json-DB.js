const fs = require('fs');

class jsonDB {
  constructor(filename) {
    this.filename = filename;
  }

  // Read all records from the JSON file
  async getAll() {
    const data = await this.readData();
    return data;
  }

  // Create a new record in the JSON file
  async create(record) {
    const data = await this.readData();
    console.log(data)
    data.push(record);
    await this.writeData(data);
  }

  // Update an existing record in the JSON file
  async update(id, record) {
    const data = await this.readData();
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data[index] = record;
      await this.writeData(data);
    }
  }

  // Delete a record from the JSON file
  async delete(id) {
    const data = await this.readData();
    const filteredData = data.filter((item) => item.id !== id);
    await this.writeData(filteredData);
  }

  // Read data from the JSON file
  async readData() {
    try {
      const data = await fs.promises.readFile(this.filename);
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }

  // Write data to the JSON file
  
  async writeData(data) {
    await fs.promises.writeFile(this.filename, JSON.stringify(data));
  }
}

// test
const db = new jsonDB('data.json');
db.create({ id: 1, name: 'lok', age: 18 });
db.create({ id: 2, name: 'sh', age: 20 });
db.getAll().then((data) => console.log(data));
db.update(2, { id: 2, name: 'loke', age: 18 });
db.delete(1);
db.getAll().then((data) => console.log(data));

module.exports = jsonDB;