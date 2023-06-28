const Event = require('../../models/event');

module.exports = {
    create,
    show
}

async function create(req, res) {
    try {
const newEvent = await Event.create(req.body.event);
res.json(newEvent)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
        console.log(req.body)
    }
}

async function show(req, res) {
    try {
        const event = await Event.findById(req.params.id);
        console.log(event)
        res.json(event)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}