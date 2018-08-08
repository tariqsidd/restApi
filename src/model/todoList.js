import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TodoListSchema = new Schema({
    task: String,

    isDone:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TodoList', TodoListSchema);
