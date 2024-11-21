let deckOfCards = (name, suit, color) => {
    return {name: name, suit: suit, color: color}
}
let deck = [];
deck.push(deckOfCards(6, 'spades', 'black'));
deck.push(deckOfCards(6, 'hearts', 'red'));
deck.push(deckOfCards(6, 'diamonds', 'red'));
deck.push(deckOfCards(6, 'clubs', 'black'));
deck.push(deckOfCards(7, 'spades', 'black'));
deck.push(deckOfCards(7, 'hearts', 'red'));
deck.push(deckOfCards(7, 'diamonds', 'red'));
deck.push(deckOfCards(7, 'clubs', 'black'));
deck.push(deckOfCards(8, 'spades', 'black'));
deck.push(deckOfCards(8, 'hearts', 'red'));
deck.push(deckOfCards(8, 'diamonds', 'red'));
deck.push(deckOfCards(8, 'clubs', 'black'));
deck.push(deckOfCards(9, 'spades', 'black'));
deck.push(deckOfCards(9, 'hearts', 'red'));
deck.push(deckOfCards(9, 'diamonds', 'red'));
deck.push(deckOfCards(9, 'clubs', 'black'));
deck.push(deckOfCards(10, 'spades', 'black'));
deck.push(deckOfCards(10, 'hearts', 'red'));
deck.push(deckOfCards(10, 'diamonds', 'red'));
deck.push(deckOfCards(10, 'clubs', 'black'));
deck.push(deckOfCards('jack', 'spades', 'black'));
deck.push(deckOfCards('jack', 'hearts', 'red'));
deck.push(deckOfCards('jack', 'diamonds', 'red'));
deck.push(deckOfCards('jack', 'clubs', 'black'));
deck.push(deckOfCards('queen', 'spades', 'black'));
deck.push(deckOfCards('queen', 'hearts', 'red'));
deck.push(deckOfCards('queen', 'diamonds', 'red'));
deck.push(deckOfCards('queen', 'clubs', 'black'));
deck.push(deckOfCards('king', 'spades', 'black'));
deck.push(deckOfCards('king', 'hearts', 'red'));
deck.push(deckOfCards('king', 'diamonds', 'red'));
deck.push(deckOfCards('king', 'clubs', 'black'));
deck.push(deckOfCards('ace', 'spades', 'black'));
deck.push(deckOfCards('ace', 'hearts', 'red'));
deck.push(deckOfCards('ace', 'diamonds', 'red'));
deck.push(deckOfCards('ace', 'clubs', 'black'));
console.log(deck)


let reduce = deck.reduce((prev, curr) => {
    if (curr.suit === 'spades') {
        prev.spades.push(curr)
    }
    if (curr.suit === 'diamonds') {
        prev.diamonds.push(curr)
    }
    if (curr.suit === 'hearts') {
        prev.hearts.push(curr)
    }
    if (curr.suit === 'clubs') {
        prev.clubs.push(curr)
    }
    return prev
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
})
console.log(reduce)