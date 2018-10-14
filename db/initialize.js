// Update with config settings.
var knex = require('knex')({
  client: 'pg',
  connection:'postgres://postgres:pogo@localhost:5432/employee',
  searchPath: 'knex,public'
});
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry')
module.exports = bookshelf;
