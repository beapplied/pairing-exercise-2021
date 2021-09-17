# Welcome to the Applied Technical & Pairing Task!

This repo is a super scaled down version of our production app and uses 🎨  [Vue](https://vuejs.org/) frontend,  🧰  Node.js with Express and 📊  [Sequelize](https://sequelize.org/) for database abstractions and migrations. We've also included a small sqlite database to keep things simple.

## Quick start

 **1. Clone this repository**

 **Please do not to fork this repository**. We'll be going through your solution during your interview so no need to push your changes or send it to us.

 **2. Install the main app dependencies & set up the database**

     yarn
     sequelize db:migrate
     sequelize db:seed:all
*(You may need to install `sequelize` globally first)*


 **3. Start the backend 🧰**

    nodemon app.js
*(You may need to install `nodemon` globally first)*

 **4. Start the frontend 🎨** 

    cd apps/dashboardApp
    yarn && yarn run serve

> **Tech test quirks and gotchas** 
>
> This was thrown together stupidly quickly so there are some little gotchas (feel free to add more to
> this list if you find them):
> 
> -   the sqlite database is fine but you can't have it open in a db browser while using it (which makes sense as it's a file) - theres
> probs a fix but I couldn't find it quickly (as an aside if you do want
> to peek inside your sqlite db I recommend 
> [sqlitebrowser](https://sqlitebrowser.org/))
>


## The Brief

We calculate a bunch of stats for applications and questions throughout the app. These help hiring managers make decisions about who to hire and who to reject as well as looking into which questions are good and which could do with some tweaking.

In the test app you'll see an applicant list page that simple lists applicant names from the database.

Before the pair programming interview make a question list page (like the application one) that lists all questions.

## Acceptance Criteria 

As a user, I want to see a list of all questions used. 

*You don't need to include any tests*

## Next steps

No need to commit your code as during your interview you will share your screen and be asked to talk through your process and solution. 

We will then complete a short pair programming exercise on the same repository so it's a good idea to have it running before the interview starts.



**Good luck!**

Applied Team 😊