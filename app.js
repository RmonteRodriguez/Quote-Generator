var quotes = [
    'Act as if what you do makes a difference. It does.',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'Never bend your head. Always hold it high. Look the world straight in the eye.',
    'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    'Believe you can and you\'re halfway there.',
    'When you have a dream, you\'ve got to grab it and never let go.',
    'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination.',
    'No matter what you\'re going through, there\'s a light at the end of the tunnel.',
    'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.',
    'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    'Just don\'t give up trying to do what you really want to do. Where there is love and inspiration, I don\'t think you can go wrong.',
    'Limit your "always" and your "nevers."',
    'Nothing is impossible. The word itself says "I\'m possible!"',
    'You are never too old to set another goal or to dream a new dream.',
    'Try to be a rainbow in someone else\'s cloud.',
    'You do not find the happy life. You make it.',
    'Inspiration comes from within yourself. One has to be positive. When you\'re positive, good things happen.',
    'Sometimes you will never know the value of a moment, until it becomes a memory.',
    'The most wasted of days is one without laughter.',
    'You must do the things you think you cannot do.'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}