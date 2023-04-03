'use strict'
let userName=prompt("Enter your name");
let gender=prompt("Enter your gender,The answer should be either (male or female).");
let age=prompt("Enter your age");
if(age<0)
{
    alert("The age is less than zero!");
}
else if(age==0)
{
    alert("The age is equal to zero!");
}
let choice=confirm("Do you want to skip the welcoming message?");
if(!choice)
{
    if(gender=="male")
    {
        alert(`Welcome in our website Mr ${userName}`);
    }
    else if(gender=="female")
    {
        alert(`Welcome in our website Ms ${userName}`);
    }
    else
    {
        alert(`Welcome in our website ${userName}`);

    }
}
// Ask the user to enter his/her gender as input. The answer should be either (male or female).
// Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.
// Ask the user to confirm if he wants to skip the welcoming message.
// Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation.
// Continue working on the styling of the project.