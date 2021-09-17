const models = require("../models")

exports.listApplications = (req, res, next) => {

    return models.Application.findAll({
        include: [
            { 
                model: models.Answer
            }
        ],
    })
        .then((templates) => {
            return res.send(templates)
        })
        .catch(next)
}
