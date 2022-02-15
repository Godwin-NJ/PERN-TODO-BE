const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// middleware 
app.use(cors())
app.use(express.json())

// create todo 
app.post('/todos', async(req,res) => {
    try {
       const {description} = req.body
       const newTodo = await pool.query(
           "INSERT INTO todo (description) VALUES($1) RETURNING *",
           [description] 
        )
       res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

// get all todos
app.get('/todos', async(req,res)=> {
    try {
        const alltodos = await pool.query('SELECT * FROM todo')
        res.json(alltodos.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// get single todo 
app.get('/todos/:id', async(req,res) => {
    try {
        const{id} = req.params
        const newTodo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        res.json(newTodo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
})

// update todo 
app.put('/todos/:id', async(req,res) => {
    try {
        const {id} = req.params
        const {description} = req.body 
        const updateTodo = await pool.query(
            'UPDATE todo SET description = $1 WHERE todo_id=$2', [description, id]
        )
        res.json('Todo was updated')
    } catch (error) {
        console.log(error.message)
    }
})

// delete todo 
app.delete('/todos/:id', async(req,res) => {
    try {
        const{id} = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json('todo was deleted')
    } catch (error) {
        console.log(error.message)
    }
})


const port = 5000
app.listen(port,() => {
    console.log(`App listening on port ${port}`)
})