/* efek collorosel */
let position = 0;
const cardContainer = document.getElementById("card-container");
const cards = cardContainer.querySelectorAll(".card-deals");
const cardCount = cards.length;

function nextCard() {
    if (position < cardCount - 4) {
        position++;
        cards.forEach(card => {
            card.style.transform = `translateX(-${position * 270}px)`;
        });
    }
}

function prevCard() {
    if (position > 0) {
        position--;
        cards.forEach(card => {
            card.style.transform = `translateX(-${position * 270}px)`;
        });
    }
}