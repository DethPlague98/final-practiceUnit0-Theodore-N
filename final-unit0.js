const readline = require('readline-sync');


//Values, Data Types, and Operations
//This code uses readline in order to take input from the user, in this case to get and display their name.
let userName = readline.question("What is your name? ");
console.log("Your name is " + userName);


//Building Arrays - establishing an array and using within a loop
//Using Arrays - using .push() to send tasks to the end of the arrTasks array during the loop
//Working with loops - using a for loop to get the user's first three tasks to work on, and put those tasks within the arrTasks array
//Stringing Characters Together - 
//I used the backticks and ${} in order to string the tasks together with new lines and to call them from within the already established array.

//Below code is meant to establish three tasks the user would like to track, establish an array and use a loop to store those in and then restate the current tasks for the user.

let arrTasks = [];

    for (i = 0; i < 3; i++){
        let tasks = readline.question("What is a task you'd like to accomplish? ");
        arrTasks.push(tasks);
    }

console.log(`Your tasks are:
    ${arrTasks[0]}
    ${arrTasks [1]}
    ${arrTasks[2]}`);
    
    
//Control Structures and Logic - using a boolean value to see if the user has more tasks to complete or if they are finished
let complete = false;
let numSuccess
numSuccess = readline.questionInt("How many tasks have you completed? ");

if (numSuccess < arrTasks.length){
    console.log("You have more tasks to complete!")
}
else console.log("You have complete all your tasks! Congrats! ")

