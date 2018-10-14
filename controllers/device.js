var express = require('express')
var router = express.Router()
var employee = require('../db/models/employee')
var device = require('../db/models/device')


//insert a device for a given employee
router.post('/:id', function(req,res, next){
  employee.forge({id:req.params.id})
  .fetch({require: true})
  .then(function (employee) {
    device.forge({
      device_name : req.body.device_name,
      employee_id: employee.get('id')
    })
  .save()
  .then(function (device) {
      res.json({error: false, data: device.toJSON()});
  })
})
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})

//update device details for an employee
router.put('/:id',function (req, res) {
  employee.forge({id: req.params.id})
  .fetch({require: true})
  .then(function (employee) {
    device.forge({
      device_name : req.body.device_name,
      employee_id: employee.get('id')
    })
    .save()
    .then(function () {
      res.json({error: false, data: {message: 'device details updated'}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    })
  })
  .catch(function (err) {
    res.status(500).json({error: true, data: {message: err.message}});
  })
})


// delete the device
router.delete('/:id',function (req, res) {
  device.forge({id: req.params.id})
  .fetch({require: true})
  .then(function (device) {
    device.destroy()
    .then(function () {
      res.json({error: false, data: {message: 'device details successfully deleted'}});
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
