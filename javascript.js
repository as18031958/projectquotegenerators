//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
      quote: "The best way to predict the future is to invent it.",
      person: "Alan Kay"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      person: "Socrates"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
      person: "Edmund Burke"
    }
  ];
  btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
  })