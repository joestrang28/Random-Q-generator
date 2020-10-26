//JS Random Quote Generator Script

//This sets the 5 quotes with fields and contains the quote, year of creation (if known) and citation (if known)

let quotes = [{
        quote: `Spread love everywhere you go. Let no one ever come to you without leaving happier.`,
        source: `Mother Teresa`,
        citation: `https://www.brainyquote.com/quotes/mother_teresa_133195`


    },
    {
        quote: `Tell me and I forget, teach me and I may remember, involve me and I learn`,
        source: `Xun Kuang`,
        year: `818 AD`
    },
    {
        quote: `You will face many defeats in life, but never let yourself be defeated.`,
        source: `Maya Angelou`,
        year: `1993`,
        citation: `https://www.goalcast.com/2017/04/03/maya-angelou-quotes-to-inspire-your-life/`,
        tags: `cultural, leadership`


    },
    {
        quote: `Many of life's failures are people who did not realize how close they were to success when they gave up.`,
        source: `Thomas A. Edison`,
        year: `1920`,
        citation: `https://www.goalcast.com/2017/04/03/maya-angelou-quotes-to-inspire-your-life/`,
        tags: `inspiring, historical, motivation, politics`

    },
    {
        quote: `In the end, it's not the years in your life that count. It's the life in your years.`,
        source: `Abraham Lincoln`,
        year: `1860`,
        citation: `https://blog.hubspot.com/sales/famous-quotes`

    }

];


//Here, the getRandomQuote() function selects a numerical value at random, 
//which cannot be higher than the amount of objects in the "quotes" array.
//Using this random number, the function will then return a random "quotes" object.

function getRandomQuote() {

    let randomQ = quotes[Math.floor(Math.random() * quotes.length)];

    return randomQ;
};
//console.log(getRandomQuote());

// Setting the printQuote function, which calls getRandomQuote(), 
// The function sets the variables for year, citation, quote, by, and category, to create the template literal,
// which then prints the quote and it 's contents to index.html.

function printQuote() {

    // This variable that calls the getRandomQuote() function
    const rQuote = getRandomQuote();


    // This variable initiates the HTML string with 
    // the first two <p></p> elements, their classNames, 
    // and the quote and source properties. 

    let htmlString = `<p class ="quote">${rQuote.quote}</p> <p class="source">${rQuote.source} `;

    //Using an if statement to check if the citation property exits. 
    //if it does, concatenate a <span></span> element, appropriate className, 
    //and citation property to the HTML string

    if (rQuote.citation) {

        htmlString += `<span class="citation">${rQuote.citation}</span>`
    }

    // Using an if statement to check of the year property exists, 

    if (rQuote.year) {
        htmlString += `<span class="citation">${rQuote.year} </span>`
    }

    if (rQuote.tags) {
        htmlString += `<span class="citation">${rQuote.tags} </span>`
    }

    // concatenate the closing </p> tag to the HTML string

    htmlString += `</p>`

    return quoteBox = document.getElementById('quote-box').innerHTML = htmlString;
}
printQuote();

//this sets the time refresh every 10 seconds 
setTimeout(function() {
    location.reload();
}, 10000);


//this changes the background color after every refresh 
function random_color() {
    let color = `#`;
    let letters = [`de9f0c`,
        `0e7e64`,
        `ca0eb4`,
        `7b8c15`,
        `ca4b17`,
        '27517f'
    ];
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById(`change`, `load-quote`).style.background = color;


}

//console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);