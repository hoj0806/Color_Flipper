let simpleBtn = document.querySelector(".item-simple")
let hexBtn = document.querySelector(".item-hex")
let changeBtn = document.querySelector(".change-btn")
let colorName = document.querySelector('.color-name')
let body = document.body
let alertBox = document.querySelector('.alert-box')
let SimpleColorArr = ["Red", "Orange", "Blue", "Green" , "Yellow", "Navy", "Purple", "Hotpink", "Pink",  "Gray",  "Aqua", "Aquamarine", "Coral", "Greenyellow", "Indigo" , "Magenta", "Plum", "Violet" ]

let changeRandomSimpleColor = () => {
    let removeDuplicateSimpleArr = SimpleColorArr.filter((element) => element !== colorName.innerHTML)
        let randomSimpleColor = removeDuplicateSimpleArr[Math.floor(Math.random() * removeDuplicateSimpleArr.length )]
        colorName.innerHTML = randomSimpleColor;
        body.style.backgroundColor = randomSimpleColor
    }

let changeRandomHexColor = () => {
    let randomHexColor =   "#" + Math.floor(Math.random()*16777215).toString(16);
    colorName.innerHTML = randomHexColor.toUpperCase();
    body.style.backgroundColor = randomHexColor
} 

simpleBtn.addEventListener('click', function() {
    alertBox.style.display = "none";
    changeBtn.addEventListener('click', changeRandomSimpleColor)
    
})

hexBtn.addEventListener('click', function() {
    alertBox.style.display = 'none';
    changeBtn.addEventListener('click', changeRandomHexColor)
})