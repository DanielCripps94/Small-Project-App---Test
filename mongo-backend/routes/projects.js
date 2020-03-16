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
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json("Error " + err))
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json("Project Deleted!"))
    .catch(err => res.status(400).json("Error " + err))
})

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
        .then(project => {
            project.username = req.body.username;
            project.title = req.body.title;
            project.length = Number(req.body.length);
            project.date = Date.parse(req.body.date);

            project.save()
                .then(() => res.json("Project Updated!"))
            .   then(err => res.status(400).json("Error " + err));
        })
        .catch(err => res.status(400).json("Error " + err))
});

module.exports = router;