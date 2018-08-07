import mongoose from 'mongoose';
import { Router } from 'express';
import TodoList from '../model/todoList';
import bodyParser from 'body-parser';

export default({ config, db }) => {
    let api = Router();

     //'/v1/todo/add'
    api.post('/add', (req, res) => {
        let newTodo = new TodoList();
        newTodo.task = req.body.task;

        newTodo.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Task saved successfully' });
        });
    });

    // 'v1/restaurant'
    api.get('/', (req, res) => {
        TodoList.find({}, (err, todoes) => {
            if (err) {
                res.send(err);
            }
            res.json(todoes);
        });
    });

    // '/v1/todo/:id'
    api.get('/:id', (req, res) => {
        TodoList.findById(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    });

    // '/v1/todo/:id' - PUT - update an existing record
    api.put('/:id', (req, res) => {
        TodoList.findById(req.params.id, (err, todo) => {
            if (err) {
                res.send(err);
            }
            todo.task = req.body.task;
            todo.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Task updated' });
            });
        });
    });

    // '/v1/todo/:id' - DELETE - remove a todo
    api.delete('/:id', (req, res) => {
        TodoList.remove({
            _id: req.params.id
        }, (err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json({message: "Task Successfully Removed"});
        });
    });

    return api;
}
