const quoteEl = document.querySelector(".quote-el")
const authorEl = document.querySelector(".author-el")
const containerEl = document.querySelector(".quote-container")
const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

containerEl.addEventListener("click", function(){
    // Random index ranging from 0 to 4
    let randomIndex = Math.floor(Math.random() * quotes.length)
    quoteEl.textContent = quotes[randomIndex].quote
    authorEl.textContent = "- " + quotes[randomIndex].author
})



