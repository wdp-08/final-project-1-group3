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
    } else {
      position = 0;
      cards.forEach(card => {
        card.style.transform = `translateX(0)`;
      });
    }
  }
  
  function prevCard() {
    if (position > 0) {
      position--;
      cards.forEach(card => {
        card.style.transform = `translateX(-${position * 270}px)`;
      });
    } else {
      position = cardCount - 4;
      cards.forEach(card => {
        card.style.transform = `translateX(-${position * 270}px)`;
      });
    }
  }
  
/* icon search */
feather.replace()

/* alert */
document.getElementById("BookBtn").onclick = function() {
  Swal.fire(
    'Sorry..!',
    'this feature is not yet available',
    'info'
  );
}
