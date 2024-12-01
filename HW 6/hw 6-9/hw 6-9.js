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

console.log(deck.find(value=>value.name === 'ace' && value.suit === 'spade'));
// console.log(deck.filter(value => value.suit === 'spades' && value.name === 'ace'));
console.log(deck.filter(value => value.name === 6));
console.log(deck.filter(value => value.color === 'red'));
console.log(deck.filter(value => value.suit === 'diamonds'));
console.log(deck.filter(value => {
    if (typeof value.name === "string" && value.suit === 'clubs'){
        return value
    }
    if (value.name >9 && value.suit === 'clubs'){
        return value
    }
}))

// const suits = ['spade', 'diamond', 'heart', 'club'];
// const values = ['6', '7', '8', '9', '10', 'queen', 'king', 'ace'];
//
// const cards=[];//масив колоды карт
// for (const suit of suits){//итеруем асив suit
//     for (const value of values){//итеруем масив value
//         const card = {cardSuit: suit, value: value};//формируем каждую карту колоды
//         if (suit === 'heart' || suit === 'diamod'){//если карта с мастью сердце или мастью бубен
//             card.color = 'red'; //присваиваем новое свойство этим картам красный цвет
//         }else {
//             card.color = 'black';//остальные карты будут иметь свойство черные
//         }
//         cards.push(card);//передаем все в масив cards
//     }
//
// }
// console.log(cards);//выводим колоду в консоль
//
// //через фильтр делать нельзя было потому что фильтр формирует масив, а нам нужно вывести одну карту
// console.log(cards.find(card=>card.value === 'ace' && card.cardSuit === 'spade'));
// //получить каждую карту отдельно если его характеристика соответствует указаным параметрам
// console.log(cards.filter(card => card.value === '6'));
// console.log(cards.filter(card => card.color === 'red'));
// console.log(cards.filter(card => card.cardSuit === 'diamond'));
// console.log(cards.filter(card => card.cardSuit === 'club' && card.value !=='6' || card.value !== '7' || card.value !== '8' || card.value !== '9'));
//
