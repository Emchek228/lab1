/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source:"Nelson Mandela",
    citation:"Book"
  },
  {
    quote:"Evolution is a gradual process that “can act only by very short and slow steps",
    source:"Darwin",
    citation:"Book",
    year:1859
  },
  {
    quote:"Life is what happens when you're busy making other plans.",
    source:"John Lennon",
  },
  {
    quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source:"Mothher Teresa",
  },
  {
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source:"Benjamin Franklin",
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = Math.floor(Math.random() * quotes.length);
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
  const randomQuote = quotes[randomNumber];
  console.log(randomNumber);
  // 3. Return the variable storing the random quote object
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote () {
  const randomQuote = getRandomQuote();
  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;
  if(randomQuote.citation!=null) {
    PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if(randomQuote.year!=null) {
    PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
  }
  PtoHTML1 += "</p>";
  document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);