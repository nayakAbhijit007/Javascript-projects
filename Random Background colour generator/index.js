const button = document.querySelector("button");
button.addEventListener("click", function (){
    
    const bckgrnd = document.querySelector("body");
    

    const hrder = document.querySelector("h1");
    hrder.style.color = " white ";

    const r = Math.floor(Math.random()*255);
    const g = Math.floor( Math.random()*255);
    const b = Math.floor(Math.random()*255);

    const newColor = `rgb(${r} , ${g} , ${b})`;

    bckgrnd.style.backgroundColor = newColor


});