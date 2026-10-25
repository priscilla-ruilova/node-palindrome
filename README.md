# Project: Server Side Palindrome Checker

### Goal: Create a simple web application that uses the fs and http modules to validate if a string is a palindrome server side.

### Features 
This website uses an input to take in a word and a button with a click event that runs server side javascript code and returns a result that shares whether the input is a palindrome or is not a palindrome. 

A palindrome is a word or phrase that is spelled the same forwards or backwards. 

The the time to play around with names, phrases, or random letters! 

![screenshot of the web page](/css/screenshotWebpage.png)

### What I learned
- I learned that it's a good idea to write the safe fallback conditional first instead of at the end. This is how I had my code originally. It wasn't showing the expression 'Please enter a word or phrase' when I hit the button without writing an input: 
![image of previous bad code](/css/screenshotCode2.png)
- And this is was the code that made it all run smoothly: 
![image of final code](/css/screenshotCode.png)

### Tech Stack
- HTML, CSS, JavaScript 

### How to access
- Click the link in the about section to the right or follow this link for the live site on Render: https://node-palindrome-h4ez.onrender.com/