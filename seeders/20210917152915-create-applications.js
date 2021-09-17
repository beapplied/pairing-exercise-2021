"use strict"

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .bulkInsert(
                "Applications",
                [
                    {
                        id: 1,
                        firstName: "Conor",
                        lastName: "Dare",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 2,
                        firstName: "Ida",
                        lastName: "Feeney",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 3,
                        firstName: "Earnestine",
                        lastName: "Reilly",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                ],
                {}
            )
            .catch((err) => {
                return console.log(err)
            })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Applications", { id: [1,2,3] }, {})
    },
}
