"use strict"

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface
            .bulkInsert(
                "Questions",
                [
                    {
                        id: 1,
                        text: "You and a colleague are working on a new part of the site, but you suspect you might have fallen behind. You and your colleague committed to a schedule and worked on it together. Your colleague is off sick today and the rest of the team has asked for an update. What do you do?",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 2,
                        text: "We use a secondary datastore for real time analytics and reporting. What problems might you anticipate with this sort of approach? Explain how would go about solving or mitigating them?You might have never worked with a secondary datastore - feel free to google and investigate before answering this question.",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 3,
                        text: "It’s been a busy week and it’s now late on Friday. You have five things that you’ve yet to get to this week.1. One of the sales team asked you today to add a feature to the site to support a large sale they're trying to close. This feature is small but the sales team want to close today, and the team's weekly prioritisation meeting isn't until Monday.2. A customer has emailed and is having trouble getting their reports to make sense on the site. You think there may be a bug.3. You've been asked if you can step in to replace a speaker at a technical event you were attending tonight. It'd be a good opportunity to talk about some aspects of tech you find interesting and good exposure for Applied, but you need time to edit a talk you gave elsewhere recently.4. It's your week to do the weekly team update and you’ve not yet quantified your team’s progress against team goals for this month or set the priorities for the coming month. The meeting is on Monday morning.5. A colleague has asked your opinion on her pull request before it gets merged, but you haven't had time to do it. The feature is scheduled to have already been released by Monday's meeting.Imagine you only have time to do two (and only two) of these tasks, which two do you choose and why?",
                        createdAt: "2018-10-09 12:40:55.255+00",
                        updatedAt: "2018-10-09 12:40:55.255+00",
                    },
                    {
                        id: 4,
                        text: "Some users have complained about very slow load times on the apply flow of the app (the bit you're using right now!). These pages are built using server rendered js and jquery.How would you go about investigating this and what extra information would you look for What things would you think about doing to improve the load times?",
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
        return queryInterface.bulkDelete("Questions", { id: [1, 2, 3, 4] }, {})
    },
}
