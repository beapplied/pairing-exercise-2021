"use strict"

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .bulkInsert(
                "Answers",
                [
                    {
                        id: 1,
                        ApplicationId: 1,
                        QuestionId: 1,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 2,
                        ApplicationId: 1,
                        QuestionId: 2,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 3,
                        ApplicationId: 1,
                        QuestionId: 3,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 4,
                        ApplicationId: 1,
                        QuestionId: 4,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 5,
                        ApplicationId: 2,
                        QuestionId: 1,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 6,
                        ApplicationId: 2,
                        QuestionId: 2,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 7,
                        ApplicationId: 2,
                        QuestionId: 3,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 8,
                        ApplicationId: 2,
                        QuestionId: 4,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 9,
                        ApplicationId: 3,
                        QuestionId: 1,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 10,
                        ApplicationId: 3,
                        QuestionId: 2,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 11,
                        ApplicationId: 3,
                        QuestionId: 3,
                        text: 'sdfsdf',
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 12,
                        ApplicationId: 3,
                        QuestionId: 4,
                        text: 'sdfsdf',
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
        return queryInterface.bulkDelete("Answers", { id: [1,2,3,4,5,6,7,8,9,10,11,12] }, {})
    },
}
