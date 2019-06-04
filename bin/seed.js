const {db, User, Product} = require('../server/db');

const seed = async () => {
  await db.sync({force: true});

  // users
  const moe = await User.create({name: 'moe'});
  const larry = await User.create({name: 'larry'});
  const curly = await User.create({name: 'curly'});

  // products
  const foo= await Product.create({name: 'foo',});
  const bazz= await Product.create({name: 'bazz',});
  const boo= await Product.create({name: 'boo',});

  db.close()
  console.log(`\nSeeding successful!\nAcme product manager database ready!\n`)
};

seed().catch(err => {
  db.close();
  console.log(`\nError seeding ->:\n${err.message}\n${err.stack}\n`);
});
