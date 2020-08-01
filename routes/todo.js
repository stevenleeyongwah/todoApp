const express = require('express')
const mongoose = require('mongoose')
const Todo = require('../models/todo')
const router = express.Router()

router.get('/', async (req, res) => {
  const todoList = await Todo.find({}).sort('-createdAt')
  console.log(todoList)
  res.render('todo', { todoList: todoList })
})

router.post('/', async (req, res) => {
  const todo = new Todo({
    name: req.body.todo
  })
  try {
    await todo.save()
    res.redirect('/todo')
  } catch{
    res.send('Error in saving todo')
  }
})

router.put('/', (req, res) => {

})

router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id)
  res.redirect('/todo')
})

module.exports = router
