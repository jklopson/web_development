//sqlite promises 4/19/23
const sqlite3 = require('sqlite3').verbose();

application.get('/'), async (req,res) => {
  
  const db = new sqlite3.Database('database.db');

  let sqlquery = 'SELECT * FROM characters';
  let results = await sqlPromise(sqlquery);
  db.close();

  let dictionary_out = {
    'results' : results
  }
  res.render('characters', dictionary_out);

}