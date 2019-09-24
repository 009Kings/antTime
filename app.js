let button = document.getElementById("btn")
let lights = document.querySelectorAll(".light")
let colors = ["red", "yellow", "green"]
let go = true;
let movinAnt = document.getElementById("movin")
let movinAnt2 = document.getElementById("movin2")
let movinAnt3 = document.getElementById("movin3")
let movinAnt4 = document.getElementById("movin4")
let movinAnt5 = document.getElementById("movin5")
let movement = 0
// true is forward
let forward = true
let forward2 = true
let forward3 = true
let forward4 = true
let forward5 = true

let clearColors = function() {
  // change all to grey
  lights.forEach((light, i) => {
    light.classList.remove(colors[i])
  });
}

let setColor = function (color) {
  go = color === "red" ? false : true
  clearColors()
  lights[colors.indexOf(color)].classList.add(color)
}

let changeColors = function () {
  setTimeout(setColor, 100, "green")
  setTimeout(setColor, 1100, "yellow")
  setTimeout(setColor, 2700, "red")
}

let loop = setInterval(function () {
  console.log(movement)
  if (go) {
    if (movement > 100 || movement < 0) {
      forward = !forward
      forward2 = !forward2
      forward3 = !forward3
      forward4 = !forward4
      forward5 = !forward5
      movinAnt.src = `assets/alert-${forward}.png`
      movinAnt2.src = `assets/alert-${forward}.png`
      movinAnt3.src = `assets/alert-${forward}.png`
      movinAnt4.src = `assets/alert-${forward}.png`
      movinAnt5.src = `assets/alert-${forward}.png`
      console.log(movinAnt.src)
    }
    forward ? movement+=3 : movement -=3
    movinAnt.style.left = `${movement}vw`
    forward2 ? movement+=2 : movement -=2
    movinAnt2.style.left = `${movement}vw`
    forward3 ? movement+=3 : movement -=3
    movinAnt3.style.left = `${movement}vw`
    forward4 ? movement+=4 : movement -=4
    movinAnt4.style.left = `${movement}vw`
    forward5 ? movement+=4 : movement -=4
    movinAnt5.style.left = `${movement}vw`
  } 
}, 100)

button.addEventListener("click", function () {
  alert(`SO YOU THOUGHT!!! YOU CAN NEVER STOP THESE SWEET SWEET ALERTS`)
  alert(`WE ALL LOVE ALERTS`)
  alert(`YOU ARE NOW PART OF THE ALERTS FAN CLUB`)
});

document.getElementById("stop").addEventListener("click", function () {
  alert(`HA THEY ARE NEVER ANNOYING AND WILL NEVER STOP`)
  alert(`EMBRACE THE ALERTS`)
  alert(`LOOK AT THESE SWEET SWEET ALERTS`)
})
