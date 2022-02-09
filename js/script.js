/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    source: 'Friedrich Nietzsche',

    quote: `One must shed the bad taste of wanting to agree with many. 
    "Good" is no longer good when one's neighbor mouths it. And how should there be a "common good"! 
    The term contradicts itself: whatever can be common always has little value. 
    In the end it must be as it is and always has been: great things remain for the great, abysses for the profound,
     nuances and shudders for the refined, and, in brief, all that is rare for the rare."`,

    citation:'Beyond Good and Evil',

    tags: 'philosophy',

    year:1886

  },

  {
    source: 'Friedrich Nietzsche',

    quote: ` “Madness is something rare in individuals — but in groups, parties, peoples, and ages, it is the rule.” `,

    citation:'Beyond Good and Evil',
    tags: 'philosophy',

    year:1886

  },
  
  {
    source: 'Friedrich Nietzsche',
 
    quote: ` “Man is the most bungled of all the animals, the sickliest, and not one has strayed more dangerously from its instincts.
             But for all that, of course, he is the most interesting.” `,

    citation:' The Anti-Christ',
    tags: 'philosophy',

    year:1895

  },

  {
    source: 'Friedrich Nietzsche',
 
    quote: ` “The majority of men prefer delusion to truth. It soothes. It is easy to grasp.” `,

    citation:' The Anti-Christ', 
    tags: 'philosophy',

    year:1895

  },

  {
    source: 'Friedrich Nietzsche',
 
    quote: ` “i have never pondered over questions that are not questions.” `,

    citation:' On the Genealogy of Morality', 

    tags: 'philosophy',

    year:1895

  }


];




/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
 let randomNumber = Math.floor(Math.random() * arr.length);
 return arr[randomNumber];
  

}


/***
 * Generates a random color(from Css-tricks)
 * https://css-tricks.com/re-pleasing-color-palettes/
 ***/
function randomColorGenerator(){
  let color = "#";
  color += Math.floor(Math.random() * 16777215).toString(16);
return color;
}





/***
 * `printQuote` function
***/

function printQuote(){
  const randomQuote = getRandomQuote(quotes);
  let html =`
  
  <p class="quote">${randomQuote.quote}  </p>
  <p class="source">${randomQuote.source}  
  
  `;
/**
 * Checks for "citation","year" and "tags" properties of the Qoute object.
 */
  if(randomQuote.citation){
    html +=`<spam> ${randomQuote.citation} </spam>`;
  }
  if(randomQuote.year){
    html +=`<spam> ${randomQuote.year} </spam>`;
  }
  if(randomQuote.tags){
    html+=`<spam>${randomQuote.tags}</spam>`
  }

html+=`</p>`;

//chages the backgound Color of the body
document.body.style.backgroundColor =randomColorGenerator();

return document.getElementById('quote-box').innerHTML = html;

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//Calls the printQoute fuction every 20 seconds
setInterval(printQuote,20000)

document.getElementById('load-quote').addEventListener("click", printQuote, false);