const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    }
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;