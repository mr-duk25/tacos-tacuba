const Event = require('../../models/event');

module.exports = {
    create
}

async function create(req, res) {
    try {
const newEvent = await Event.create(req.body);
res.json(newEvent)
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
        console.log(req.body)
    }
}
