import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TodoListSchema = new Schema({
    task: String
});

module.exports = mongoose.model('TodoList', TodoListSchema);
