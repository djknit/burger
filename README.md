# Eat-da-Burger

### Eat-da-Burger is a simple looking application with a little more going on behind the scenes.

## Contents
* [Links](#links)
* [Project Goals](#project-goals)
* [Project Features](#project-features)
* [Technologies Used](#technologies-used)
* [Instructions for Use](#instructions-for-use)
* [Developer](#developer)

## Links
* Live App: [devourdaburger.herokuapp.com/](https://devourdaburger.herokuapp.com/)
* GitHub Repository: [github.com/djknit/burger](https://github.com/djknit/burger)

## Project Goals
* Create a complete application that follows the model-view-controller (MVC) design structure.
* Create, read, and update records in a MySQL database according to user input.
* Deploy to Heroku with JawsDB (a MySQL database).
* Allow users from across the world to come together and make a list hamburgers.

## Project Features
* Uses an MVC pattern with a custom built ORM.

* There is a form with a single input field where the user may type the name of a burger that they would like to eat.
  * Upon submission, a new record is created in the database for the burger. The page is updated with the current burger list and the new burger appears on the left side of the page with a button labeled "Devour!"
  * The user may add as many burgers as they would like.

* When the "Devour!" button is pressed, the record for that burger is updated in the database to show that it has been devoured. The page then updates and the newly devoured burger (along with all previously devoured burgers) is now displayed on the right side of the screen.

## Technologies Used
#### Front End
* Handlebars (an extension of Mustache templating language)
* jQuery (for DOM interaction and AJAX)
* HTML, CSS, and JavaScript

#### Back End
* Node and Express (server)
* MySQL (SQL dialect) with a homebrewed ORM
* Heroku (cloud platform) with JawsDB (MySQL database)
* Model-view-controller (MVC) structure

## Instructions for Use
#### Building the App
* If you wish to build the app yourself, clone the [repository](https://github.com/djknit/burger) to your local machine.
* You must have Node.js installed on your machine.
* You will also need to install MySQL and start a local MySQL server.
  * If you set up your MySQL server to require a password, create a file named `.env` in the root directory of your local copy of the repository, copy and paste the following line of code into the `.env` file, and replace "yourpassword" with your password.
    ```
    MY_SQL_PASSWORD=yourpassword
    ```
  * If your local MySQL server is running on a port other than 3306 or with a user other than "root", open `connection.js` in the `config` folder and replace the port and/or user values with your values.
  * Create a database named `burgers_db`.
* Navigate to the root directory of the repository in your command terminal and run `npm i` to install the Node packages that are dependencies of the app.
* You should now be ready to run the app.

#### Running the App
If you built the app yourself on your local machine, you should be able to start it by running `node server.js` in the root directory of the repository in your command terminal. Visit `localhost:3000` in your browser and you should see the app running if everything worked correctly.

If you wish to use the live version hosted by Heroku, visit [`https://devourdaburger.herokuapp.com/`](https://devourdaburger.herokuapp.com/) in your browser.

Type a burger into the text box at the bottom of the page and hit submit. The burger will appear on the left side of the page. Press the "Devour!" button to devour the burger. Thats it. Try to contain your excitement at the wonder of this extraordinary feat of modern technology.

## Developer
This project is developed and maintained by David Knittel. Any and all questions, comments, suggestions, or proposed contributions are welcome.
* Email: [djknit@gmail.com](mailto:djknit@gmail.com)
* Portfolio: [djknit.github.io](https://djknit.github.io/)
* GitHub: [github.com/djknit](https://github.com/djknit)
* LinkedIn: [linkedin.com/in/djknit](https://www.linkedin.com/in/djknit/)

This project was originally developed as a homework assignment for the KU Coding Bootcamp Full Stack Flex program and uses specifications laid out by the homework requirements.