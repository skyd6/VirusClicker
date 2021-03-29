const score = document.querySelector("#score")
const virus = document.querySelector("#virusClicker")
var clicks = 0
const imageArray = ['./Ressources/virus0.png','./Ressources/virus1.png','./Ressources/virus2.png']
const sound = document.querySelector("#son")
const compteur = document.querySelector("#countdown")



virus.addEventListener("click", function() {
    var randomNumV = Math.round(Math.random() * 330);
    var randomNumH = Math.round(Math.random() * 1400);
    var randomScale = Math.round(Math.random() * 5);
    var randomArray = Math.round(Math.random() * 2)
    clicks = clicks + 1
    score.innerHTML = clicks
    virus.style.marginTop = randomNumV + "px"
    virus.style.marginLeft = randomNumH + "px"
    virus.className = "scale" + randomScale
    virus.src = imageArray[randomArray]
    sound.play();
})