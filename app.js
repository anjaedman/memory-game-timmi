console.log("Funkar!");



const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false; 
let firstCard;
let secondCard;



function flipCard() {

if (lockBoard) return; 
if (this === firstCard) return; 
this.classList.add("flip");
if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
}
secondCard = this;
checkFormatch();
increment();
}

function checkFormatch() {

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    } 
    unFlipCards();

}


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard(); 
}

function unFlipCards() {
        lockBoard = true; 
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

      
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }


  (function shuffle() {
    cards.forEach(card => {
      let ramdomPos = Math.floor(Math.random() * 12);
      card.style.order = ramdomPos;
    });
  })();
 
  let count = 1;

  function increment() {
      if (count === 1) {
          document.querySelector("#counter").innerHTML =  "Du har vänt kort <br />" + count + " gång."
          count++
      } else {
          document.querySelector("#counter").innerHTML =  "Du har vänt kort <br />" + count + " gånger."
          count++
      }
      count ++
  };
  
  
cards.forEach(card => card.addEventListener("click", flipCard));

