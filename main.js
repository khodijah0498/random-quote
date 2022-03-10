const Quotes = [
    {
        qoute:"Education is the most powerful weapon which you can use to change the world",
        author:"Nelson Mandela"
    },
    {
        qoute:"The highest result of education is tolerance",
        author:"Hellen Keller"
    },
    {
        qoute:"An investment in knowledge pays the best interest",
        author: "Benjamin Franklin"
    },
    {
       qoute:"If you want to live a happy life, tie it to a goal, not to people or things",
       author:"Albert Einstein"
    },
    {
        qoute:"In order to write about life first you must live it",
        author: "Ernest Hemingway"
    },
    {
        qoute:"You never really learn much from hearing yourself speak",
        author: "George Clooney"
    },
    {
        qoute:"Life is like riding a bicycle. To keep your balance, you must keep moving",
        author:"Albert Einstein"
    },
    {
        qoute:"The healthiest response to life is joy",
        author:"Deepak Chopra"
    },
    {
        qoute:"Keep calm and carry on",
        author: "Winston Churchill"
    },
    {
        qoute:"Life is a flower of which love is the honey",
        author:"Victor Hugo"
    },
    {
        qoute:"Good friends, good books, and a sleepy conscience: this is the ideal life",
        author:"Mark Twain"
    },
    {
        qoute:"Every strike brings me closer to the next home run",
        author:"Babe Ruth"
    },
    {
        qoute:"Too many of us are not living our dreams because we are living our fears",
        author:"Les Brown"
    },
    {
        qoute:"It didn’t matter how big our house was; it mattered that there was love in it",
        author:"Peter Buffett"
    },
    {
        qoute:"We may have our differences, but nothing’s more important than family",
        author:"Coco"
    },
    {
        qoute:"The strength of a family, like the strength of an army, lies in its loyalty to each other",
        author:"Mario Puzo"
    },
    {
        qoute:"Happiness is having a large, loving, caring, close-knit family in another city",
        author:"George Burns"
    },
    {
        qoute:"Nothing is better than going home to family and eating good food and relaxing",
        author: "Irina Shayk"
    },
    {
        qoute:"The most important thing in the world is family and love",
        author:"John Wooden"
    },
    {
        qoute:"To us, family means putting your arms around each other and being there",
        author: "Barbara Bush"
    }
]
const qouteEl= document.getElementById("qoute")
const randomEl = document.getElementById('random')
const authorEl= document.getElementById("author")

qouteEl.textContent=Quotes[0].qoute
authorEl.textContent= Quotes[0].author
randomEl.addEventListener('click', ()=>{
const randomNumber = Math.floor(Math.random() * Quotes.length)

 qouteEl.textContent= Quotes[randomNumber].qoute
 authorEl.textContent = Quotes[randomNumber].author
})
