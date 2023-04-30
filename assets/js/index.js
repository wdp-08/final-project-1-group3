/* efek collorosel */
let position = 0;
const cardContainer = document.getElementById("card-container");
const cards = cardContainer.querySelectorAll(".card-deals");
const cardCount = cards.length;

function nextCard() {
    if (position < cardCount - 3) {
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
      position = cardCount - 3;
      cards.forEach(card => {
        card.style.transform = `translateX(-${position * 270}px)`;
      });
    }
  }
  
/* icon search */
feather.replace()

/* alert */
let buttons = document.querySelectorAll('.BookBtn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        Swal.fire(
            'Sorry..!',
            'this feature is not yet available',
            'info'
        );
    });
}
