const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    length: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;