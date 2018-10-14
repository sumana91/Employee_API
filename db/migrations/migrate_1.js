exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('employee', function (table) {
      table.increments('id').primary()
      table.string('firstname')
      table.string('lastname')
    }),

    knex.schema.createTable('device', function (table) {
      table.increments('id').primary()
      table.string('device_name')
      table.integer('employee_id')
      table.foreign('employee_id').references('employee.id')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('employee')
    knex.schema.dropTableIfExists('device')
    })
  ])
}
