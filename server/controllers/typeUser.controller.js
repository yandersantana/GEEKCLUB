const TypeUser = require('../models/typeUser');
const typeUserCtrl = {};

typeUserCtrl.getTypeUsers = async (req, res) => {
    const typeUsers = await TypeUser.find();
    res.json(typeUsers);       
};

typeUserCtrl.createTypeUser = async (req, res) => {
    const typeUser = new TypeUser({
        name: req.body.name,
        description: req.body.description
        
    });
    await typeUser.save();
    res.json({
        'status': 'Type User Saved'
    });
};

typeUserCtrl.getTypeUser = async (req, res) => {
    const typeUser = await TypeUser.findById(req.params.id);
    res.json(typeUser);
}

typeUserCtrl.editTypeUser = async (req, res) => {
    const { id } = req.params;
    const typeUser = {
        name: req.body.name,
        description: req.body.description
    };
    await TypeUser.findByIdAndUpdate(id, {$set: typeUser}, {new: true});
    res.json({
        status: 'Type User Updated'
    });
};

typeUserCtrl.deleteTypeUser = async (req, res) => {
    await TypeUser.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Type User Deleted'
    });
};

module.exports = typeUserCtrl;