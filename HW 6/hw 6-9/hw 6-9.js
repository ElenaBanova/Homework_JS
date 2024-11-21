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

console.log(deck.filter(value => value.suit === 'spades' && value.name === 'ace'));
console.log(deck.filter(value => value.name === 6));
console.log(deck.filter(value => value.color === 'red'));
console.log(deck.filter(value => value.suit === 'diamonds'));
console.log(deck.filter(value => {
    if (typeof value.name === "string" && value.suit === 'clubs'){
        return value
    }
    if (value.name >8 && value.suit === 'clubs'){
        return value
    }
}))


