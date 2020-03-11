const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error '" + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const length = Number(req.body.length);
    const date = Date.parse(req.body.date);

    const newProject = new Project({
        username,
        title,
        length,
        date,
    })

    newProject.save()
    .then((res.json)('Project added!'))
    .catch(err => res.status(400).json("Error " + err))
})

module.exports = router;