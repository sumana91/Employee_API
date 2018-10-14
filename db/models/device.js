var bookshelf = require('../initialize')

var device = bookshelf.Model.extend({
  tableName: 'device',
  employee : function() {
    return this.hasOne('employee')
  },
  hasTimestamps : false,
})

bookshelf.plugin('registry')
module.exports = bookshelf.model('device',device)
