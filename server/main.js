const PORT = 5000;
const server = require('./index');
const {db} = require('./db');

db.sync()
  .then(() => {
    server.listen(PORT, () => 
    {console.log(`
        Listening on port ${PORT}`
     )})
  });