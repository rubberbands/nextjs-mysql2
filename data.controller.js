const db = require("../model");
const Data = db.data;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Name can't be empty!"
        })
        return;
    }

    const datas = {
        name: req.body.name,
        age: req.body.age,
        active: req.body.active ? req.body.active : false
    }
    Data.create(datas)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error creating Data"
            })
        })

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Data.findAll().then(data => {
        res.send(data);
    }).catch(
        err => {
            res.status(500).send({
                message: err.message || "Error Reading Data"
            })
        })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Data.findByPk(id).then(data => {
        res.send(data);
    }).catch(
        err => {
            res.status(500).send({
                message: err.message || "Error Retrieving Data with id=" + id
            })
        })

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Data.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Data updated successfully."
            })
        } else {
            res.send({ message: `Cannot Update Data with id = ${id}` })
        }

    }).catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    })

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = res.params.id;

    Data.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Data has been deleted"
            })
        } else {
            res.send({
                message: `Data with id ${id} can't be deleted`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Data with id=" + id
        });
    })

};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// Find all published Tutorials
exports.findAllActive = (req, res) => {
    Data.findAll({ where: { active: true } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving tutorials."
        });
    })


};