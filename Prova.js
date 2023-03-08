const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://strangerthings-quotes.vercel.app/api/quotes/';
async function getQuote() {
    try{
        const amount = document.querySelector("#quoteAmount").value;
        if(!amount || amount==0 || amount>5) {
            throw Error("Che cazzo stai a fa")
        }
        const response=await fetch(endpoint + amount)
        if (!response.ok) {
            throw Error("request error " + response.statusText)
        }
        const jsonResponse = await response.json()
        displayQuote(jsonResponse);
    } catch (err) {
        console.error(err)
        alert(err.message);
    }
}

function displayQuote(quoteArray) {
    const quoteText = document.querySelector('#js-quote-text');
    let citazione = "";
    for (let i = 0; i<quoteArray.length; i++) {
        const quoteObject = quoteArray[i]
        const author = quoteObject['author']
        const quote = quoteObject['quote']
        citazione += author + " - "  + quote + "<br/>" ;
    }
    quoteText.textContent = citazione;
}