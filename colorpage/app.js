const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    //getrandom number between 0-3 colors [3]

 const randomNumber = getRandomnumber; 
 document.body.style.backgroundColor = colors[randomNumber];
 color.textConent = colors[randomNumber];
 color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}