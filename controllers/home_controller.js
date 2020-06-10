const Task = require("../models/task");

module.exports.home = function(req, res) {
        Task.find({}, function(err, tasks) {
            if (err) {
                console.log('Error in fetching tasks from db');
                return;
            }
            return res.render('home', {
                title: "ToDo App (Major Project 1)",
                task_list: tasks
            });
        });
    }
    //creating a task 
module.exports.createTask = function(req, res) {
        Task.create({
            task_title: req.body.task_title,
            due_date: req.body.due_date,
            category: req.body.category
        }, function(err, newTask) {
            if (err) {
                console.log('error in creating a task!');
                return;
            }
            console.log('***********', newTask);
            return res.redirect('back');
        });
    }
    //deleting tasks