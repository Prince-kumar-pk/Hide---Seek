const cards = document.querySelectorAll(".memory-card");
let life = document.getElementById("life");
cards.forEach((card) => card.addEventListener("click", flipCard));

var miss_count = 0;
var gift = 0;
var lf = 4;

let audioTurn = new Audio("music/ting.mp3")
let gameover_audio = new Audio("music/gameover.mp3")
var sc ;
function flipCard() {
 lf = lf - 1;
 life.innerHTML = lf;
 this.classList.add("flip");
 
  // console.log(this.getAttribute("data-value"));
audioTurn.play();

  if (this.getAttribute("data-value") === "miss") {
    miss_count = miss_count + 1;
  }else if (this.getAttribute("data-value") === "gift") {
    gift = gift + 1;
    let x = document.getElementById("score");
    sc = gift*10;
    x.innerHTML = sc;
    
  }else  {
    document.getElementById("text").innerHTML = "You click on Danger! Game Over";
    cards.forEach((card) => card.removeEventListener("click", flipCard));
    let btn = document.getElementById("replay");
    btn.style.display = "block";
    gameover_audio.play();
  }


  console.log("miss ", miss_count);
  console.log("gift ", gift);

check();


}

function check(){

  if (gift===3) {
    console.log("checked");
    document.getElementById("text").innerHTML = "All Gifts Captured! You Win";
    cards.forEach((card) => card.removeEventListener("click", flipCard));
    let btn = document.getElementById("replay");
    btn.style.display = "block";
    gameover_audio.play();

  }
  if(lf === 0){
    document.getElementById("text").innerHTML = "You life finished! Game Over";
    cards.forEach((card) => card.removeEventListener("click", flipCard));
    //alert("Your Game is over now !! if you want to play again press replay button");
    let btn = document.getElementById("replay");
    btn.style.display = "block";
    gameover_audio.play();

  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();


function reload()
{
  window.location.href = "./easy.html";
}



