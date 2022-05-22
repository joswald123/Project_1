
/* Variable to store randomQuote button by id for event listener*/
const randomQuoteBtn = document.querySelector('#randomQuote-btn');

/* Variable to store DOM element that display random quotes used in the event listener below */
const randomQuoteElement = document.querySelector('#quoteGenerator');
// const sourceElement = document.querySelector('#source');
// const citationElement = document.querySelector('#citation');
// const yearElement = document.querySelector('#year');


// Function that calls a Random Quote
function getRandomQuote(arr) {
    // 1. Create a variable that generates a random number between zero and the last index in the quotes array
    let randomNumber = Math.floor(Math.random()*arr.length);
    // 2. Use the random number variable and bracket notation to grab a random object from the 'quote' array, and store in a variable
    let randomObject = arr[randomNumber];
    // 3. Return the variable storing the random quote object
    return randomObject;   
   
}


randomQuoteBtn.addEventListener('click', () => {

    // 1. Create a variable that calls the getRandomQuote() function
    let randomQuote = getRandomQuote(quotes);

    // 2. Create a variable that initiates your HTML string with 
   // the first two <p></p> elements, their classNames, 
   // and the quote and source properties, but leave off 
   // the second closing `</p>` tag for now
 
    // 3. Use an if statement to check if the citation property 
   // exists, and if it does, concatenate a <span></span> 
   // element, appropriate className, and citation property 
   // to the HTML string

    // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string   
 

    function printQuote(randomQuote) {

        let html = `
             <p class="quote">${randomQuote.quote}</p>
             <p class="source">${randomQuote.source}   
         `;
 
         if (randomQuote.citation) {
             html += `<span class="citation">${randomQuote.citation}</span> </p>`;
 
         } 
         
         if (randomQuote.year) {
             html += `<span class="year">${randomQuote.year}</span> </p>`;
         } else {
             html += `</p>`
         }
         
        
        return html;
    }

    randomQuoteElement.innerHTML = printQuote(randomQuote);
    console.log('randomQuote button is functional!');


});









/* This is a basic block comment */

/***
 * Brief but detailed block comments
 * above functions and code blocks
 * are a recommended way to document 
 * your code
 ***/

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */