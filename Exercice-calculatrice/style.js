
const buttons = document.querySelectorAll(".btn-select")
const reset = document.getElementById("reset")
const equal = document.getElementById("equal")
const screen = document.getElementById('screen')
let inputs = ""
function setScreen(text) {
    screen.innerText = text
}
function resetEqual() {
    inputs = ""
}
/* faire fonctionner ces touches */
buttons.forEach(function(button) {
    button.addEventListener("click",function() {
        inputs += button.value
        console.log(inputs);
        setScreen(inputs);
    })   
}) 
/* mettre en place le reset de l'ecran */
reset.addEventListener("click",function() {
    resetEqual()
    setScreen(inputs)
} )
/* ajouter la touche egal */
equal.addEventListener("click",function() {
    let result = eval(inputs) 
    resetEqual()
    setScreen(result)
})