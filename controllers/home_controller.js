module.exports.home = function(req, res) {
    // return res.end('<h1>Express is up for ToDo</h1>');
    return res.render('home', {
        title: "ToDo App (Major Project 1)"
    });
}