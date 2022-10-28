const cards = document.querySelectorAll(".memory-card");
let life = document.getElementById("life");
cards.forEach((card) => card.addEventListener("click", flipCard));

let audioTurn = new Audio("music/ting.mp3")
let gameover_audio = new Audio("music/gameover.mp3")
var miss_count = 0;
var gift = 0;
var lf = 10;
var sc ;

function flipCard() {
 lf = lf - 1;
 life.innerHTML = lf;
 this.classList.add("flip");
 
audioTurn.play();
  // console.log(this.getAttribute("data-value"));



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
    // console.log("its danger");
  }


  console.log("miss ", miss_count);
  console.log("gift ", gift);

check();


}

function check(){

  if (gift===10) {
    // console.log("checked");
    document.getElementById("text").innerHTML = "All Gifts Captured! You Win";
    cards.forEach((card) => card.removeEventListener("click", flipCard));
    gameover_audio.play();
  }
  if(lf === 0){
    document.getElementById("text").innerHTML = "You life finished! Game Over";
    cards.forEach((card) => card.removeEventListener("click", flipCard));
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
  window.location.href = "./intermediate.html";
}
