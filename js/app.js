'use strict'
function checkString(string){
    if(string=="Yes")
    arr.push("Yes");
    else if(string=="No")
    arr.push("No");
    else
    arr.push("invalid");
}
function printArray(tArr)//t:temporary
{
    for(let i=0;i<tArr.length;i++)
    console.log(tArr[i]);
}
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
let arr=[];
let input=prompt("Do you like the design of the website,answer should be (Yes/No)?");
checkString(input);
 input=prompt("Do you have notes of the design,answer should be (Yes/No)?");
checkString(input);
 input=prompt("will you come again,answer should be (Yes/No)");
checkString(input);
printArray(arr);
// As a user, I would like to answer more questions, so you should add new three (Yes/No) questions.
// If the input was empty consider the answer to be an "invalid" string.
// Consider putting all the answers into an array.
// Traverse the array and print the items on the console.
// Confirm that your code is following the single responsibility rule. Each function should only do one thing.
// All functions and variables should have a meaningful name (use camelCase).