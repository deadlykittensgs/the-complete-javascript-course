let mainTitle= document.getElementById(main-title)

mainTitle.innerText = "welcome to the DOM world"




let buttonClicked = document.getElementById('submit-btn')
buttonClicked.addEventListener(click, alert())

function alert()
{
    alert = ("Button Clicked")
}


let divHighlight = document.querySelectorAll(".highlight")
divHighlight.addEventListener(mouseover, hoverYellow)

function hoverYellow() {
    divHighlight.style.background = "yellow";
}



let unorderedList = document.getElementById('list-container')
let newListItem = document.createElement("li")
    newListItem.innerText= "new item"
    unorderedList.appendChild(newItem)






formEntry.addEventListener(submit, saveFormEntry)

function saveFormEntry(e) {
    e.preventDefault()
    console.log (formEntry.value)
}
let formEntry = document.getElementById("form_example")




let probBtn = document.querySelector('button')
function stopBtnPropogation(event){
    event.stopPropogation
}
probBtn.addEventListener("click", stopBtnPropogation)





let toggleElement = document.getElementById("toggle_element")

function toggleStyle () {
    toggleElement.classList.toggle("active")

}

toggleElement.addEventListener("click", toggleStyle)






let paragraphElement = document.querySelector("p")

    paragraphElement.innerText = new Date()








   document.getElementById("jamesIsCool").removeEventListener("click", myFunction) 





// attributes are defined by html 
// properties are attributes defined by JS
document.querySelector("img").setAttribute("src", "new-image.png")



 


let informationDiv = document.getElementById('info')


