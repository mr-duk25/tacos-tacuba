const Event = require('../../models/event');


module.exports = {
    create,
    show,
    edit,
    update,
    delete: deleteEvent
}

async function create(req, res) {
    console.log('+++')
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
    console.log(req.params.id)
    try {
        const event = await Event.findById(req.params.id);
        console.log(event)
        res.json(event)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}
async function edit(req, res) {
    try {
        const editEvent = await Event.findById(req.params.id);
        res.json(editEvent)
    } catch (err) {
        res.status(400).json(err)
    }
}
async function update(req, res) {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body.event);
        console.log(updatedEvent)
        res.json(updatedEvent)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}
async function deleteEvent(req, res) {
    try {
        const deletedEvent = await Event.findOneAndDelete(req.params.id);
        console.log(deletedEvent)
        res.json(deletedEvent)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}