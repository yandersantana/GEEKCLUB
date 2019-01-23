const People = require('../models/people');
const peopleCtrl = {};

peopleCtrl.getPeople = async (req, res) => {
    const people = await People.find();
    res.json(people);       
};

peopleCtrl.createPeople = async (req, res) => {
    const people = new People({
        name: req.body.name,
        lastname: req.body.lastname,
        identificationCard: req.body.identificationCard,
        birthdate: req.body.birthdate,
        registrationDate: req.body.registrationDate
    });
    await people.save();
    res.json({
        'status': 'People Saved'
    });
};

peopleCtrl.getPerson = async (req, res) => {
    //console.log(req.params.id);
    const people = await People.findById(req.params.id);
    res.json(people);
}

peopleCtrl.editPeople = async (req, res) => {
    const { id } = req.params;
    const people = {
        name: req.body.name,
        lastname: req.body.lastname,
        identificationCard: req.body.identificationCard,
        birthdate: req.body.birthdate,
        registrationDate: req.body.registrationDate
    };
    await People.findByIdAndUpdate(id, {$set: people}, {new: true});
    res.json({
        status: 'People Updated'
    });
};

peopleCtrl.deletePeople = async (req, res) => {
    await People.findByIdAndRemove(req.params.id);
    res.json({
        status: 'People Deleted'
    });
};

module.exports = peopleCtrl;