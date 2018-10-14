var bookshelf = require('../initialize')

var employee = bookshelf.Model.extend({
  tableName: 'employee',
  device: function() {
    return this.hasMany('device')
  },
  hasTimestamps : false
})

bookshelf.plugin('registry')
module.exports = bookshelf.model('employee', employee)
