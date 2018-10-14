var express = require('express')
var router = express.Router()
var employee = require('../db/models/employee')
var device = require('../db/models/device')


//get all employee details
router.get('/', function(req,res, next){
  employee
  .fetchAll()
  .then(function (collection) {
    res.json({error: false, data: collection.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})


//insert an employee
router.post('/', function(req,res, next){
  employee.forge({
    firstname : req.body.firstname,
    lastname : req.body.lastname
  })
  .save()
  .then(function (employee) {
      res.json({error: false, data: employee.toJSON()});
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})


router.put('/:id',function (req, res) {
  employee.forge({id: req.params.id})
  .fetch({require: true})
  .then(function (employee) {
    employee.save({
      firstname : req.body.name,
      lastname : req.body.lastname
    })
    .then(function () {
      res.json({error: false, data: {message: 'employee details updated'}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    })
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})

// delete the employee
router.delete('/:id',function (req, res) {
  employee.forge({id: req.params.id})
  .fetch({require: true})
  .then(function (employee) {
    employee.destroy()
    .then(function () {
      res.json({error: false, data: {message: 'employee details successfully deleted'}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    })
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})

module.exports = router;
