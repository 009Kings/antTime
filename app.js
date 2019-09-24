let button = document.getElementById("btn")
let lights = document.querySelectorAll(".light")
let colors = ["red", "yellow", "green"]
let go = true;
let movinAnt = document.getElementById("movin")
let movement = 0
// true is forward
let forward = true

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
      movinAnt.src = `assets/ant-${forward}.png`
      console.log(movinAnt.src)
    }
    forward ? movement+=3 : movement -=3
    movinAnt.style.left = `${movement}vw`
  } 
}, 100)

button.addEventListener("click", function () {
  changeColors()
})

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(loop)
})
