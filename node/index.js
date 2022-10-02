const { Repository } = require('./repository.js');
const express = require('express');
const app = express();

app.get('/', async (_, res) => {
  const insert = `
    INSERT INTO people (name) values ('Apolinario'), ('Wesley'), ('Docker'), ('CodeEducation');
  `;
  Repository.query(insert);
  
  const select = `SELECT * FROM people`;
  const users = await Repository.query(select);

  const list = `
    <p> <p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p></p> 
    <p>- Lista de nomes cadastrada no banco de dados.</p>
    <ol>
      ${users.map(user => `<li>${user.name}</li>`).join('')}
    </ol>
  `;

  res.send(list);
});

app.listen(3000, () => {
  console.log('Running on port 3000');

  const create = `
    CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(50), PRIMARY KEY (id));
  `;
  Repository.query(create);
});