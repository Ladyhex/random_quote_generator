console.log('connected');

let btn = document.getElementById('btn');

let output = document.getElementById('output');

let quote = ['The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela' ,
'The way to get started is to quit talking and begin doing. -Walt Disney' ,
'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt' , 
'Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa' ,
'The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt' ,
'It is better to be prepared for an opportunity and not have one than to have an opportunity and not be prepared. -Whitney M Young',
'You will face many defeats in life, but never let yourself be defeated." -Maya Angelou'
]

btn.addEventListener('click' , function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
 })
 
  
 
