// 1. Create a variable that generates a random number between zero and the last index in the quotes array
// 2. Use the random number variable and bracket notation to grab a random object from the 'quote' array, and store in a variable
// 3. Return the variable storing the random quote object

function getRandomQuote(array) {
    let randomNumber = Math.ceil(Math.floor(Math.random()*array.length));
    randomNumber += {};
    return randomNumber;
    
}

let randomQuote = getRandomQuote(quotes);
console.log(randomQuote);

function printQuote(randomQuote) {
    let html = `<h2>${randomQuote.quote}</h2>`;

    return html;

}

console.log(printQuote(randomQuote));


// <h3>${pet[i].type} | ${pet[i].breed}</h3>
        // <p>Age: ${pet[i].age}</p>
        // <img src=${pet[i].photo} alt=${pet[i].breed}>