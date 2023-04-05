let slider = document.getElementById('range');
let value = document.querySelector('.value');
const sketchpad = document.querySelector(".sketchpad");
const resetBtn = document.querySelector('.reset');
const RBGbtn = document.querySelector ('.RBG-button');
const opaque = document.querySelector('.opaqueBtn');
const Custom = document.querySelector('#customcolor');
const clearAll = document.querySelector('.clearAll');
const eraser = document.querySelector('.eraser');

let cells ;
let cellarr = [];
let roundedValue;
let mouse = 'false';
let paint = 'custom';
  
slider.value = value
function calcValue () {
    let percentage = (slider.value / slider.max ) *100;
    return Math.ceil(percentage);
}
 //event to update slider value
slider.addEventListener('input' , function(){
    value.textContent = `${this.value}%`;
       
})


//event to change cell size
slider.addEventListener('change', function (){
    alert('choose color and draw');
    sketchpad.innerHTML = '';
    roundedValue =calcValue();
    pensize(roundedValue);
    cellarr =document.querySelectorAll('.cell');

})
document.body.addEventListener('pointerdown', function(){
    mouse = 'true'
})
document.body.addEventListener('pointerup' , function(){
    mouse = false;
})
// function to create cell append it to the parent box a grid
function pensize (size) {

    let amount = size * size
    for (i =0 ; i <= amount; i++) {
   cells = document.createElement('div'); 
    //cellarr.push(cells);
   cells.classList.add('cell');
   sketchpad.appendChild(cells);
    }
    sketchpad.style.cssText = `display: grid; grid-template-columns:repeat(${size},1fr); grid-template-rows:repeat(${size},1fr);`;

}
function getColour(){
    switch (true){
        case (paint === 'custom'):
            return `${Custom.value}`;
        case (paint === 'random'):
            return randomColor();
        default:
            return;    

    }
}
function randomColor(){
         let R = Math.ceil((Math.random() * 255) +1)
         let B = Math.ceil((Math.random() * 255) +1)
         let G = Math.ceil((Math.random() * 255) +1)
         //'RBG' to concat R G B 
             return `rgb(${R} ${G} ${B})`;
}

// event listner for reset button to reload the page 
resetBtn.addEventListener('click', () => {
    resetBtn.classList.add('blink');
    location.reload();
})
resetBtn.addEventListener('transitionend', () => {
    resetBtn.classList.remove('blink');
})
clearAll.addEventListener('click', () =>{
    clearAll.classList.add('blink');
    for (i = 0; i < cellarr.length; i++){
        cellarr[i].style.backgroundColor = '';
    }
})
clearAll.addEventListener('transitionend', () =>{
    clearAll.classList.remove('blink');
})
eraser.addEventListener('click', () => {
    eraser.classList.add('blink'); 
    cellarr.forEach((cell) => {
        cell.addEventListener('mousedown', function (e) {
           e.target.style.backgroundColor = '';
                
        })
        cell.addEventListener('mouseenter', function (e) {
            if (mouse === 'true'){
            e.target.style.backgroundColor = '';
            }
            else{
                return;
            }
        })
    })  
        
})
eraser.addEventListener('transitionend', () => {
    eraser.classList.remove('blink');
})
//event listner to RGB button to toggle on random color
RBGbtn.addEventListener('click', () => {
    
    paint = 'random';
        
    cellarr.forEach((cell) => {
        cell.addEventListener('mousedown', function (e) {
           e.target.style.backgroundColor = getColour();
                
        })
        cell.addEventListener('mouseenter', function (e) {
            if (mouse === 'true'){
            e.target.style.backgroundColor = getColour();
            }
            else{
                return;
            }
        })
    })  
        
})
//event listner to opaque button to toggle on opaque color
opaque.addEventListener('click', () => {
    opaque.classList.add('blink');
    cellarr.forEach((cell) => {
        let i = 0.1;
        cell.addEventListener('mousedown', function (e) {
            i +=0.1;
            e.target.style.backgroundColor = `rgba(0,0,0,${i})`;
                
        })
        cell.addEventListener('mouseenter', function (e) {
         i  += 0.1;   
            if (mouse === 'true'){
                e.target.style.backgroundColor = `rgba(0,0,0,${i})`;
            }
            else{
                return;
            }
        })
    })
    
})
opaque.addEventListener('transitionend', () => {
    opaque.classList.remove('blink');
})
 
    Custom.addEventListener('change', () => {

        paint = 'custom';
        
        cellarr.forEach((cell) => {
            cell.addEventListener('mousedown', function (e) {
               e.target.style.backgroundColor = getColour();
                    
            })
            cell.addEventListener('mouseenter', function (e) {
                if (mouse === 'true'){
                e.target.style.backgroundColor = getColour();
                }
                else{
                    return;
                }
            })
        })
    })  
    Custom.addEventListener('click', () => {

        paint = 'custom';
        
        cellarr.forEach((cell) => {
            cell.addEventListener('mousedown', function (e) {
               e.target.style.backgroundColor = getColour();
                    
            })
            cell.addEventListener('mouseenter', function (e) {
                if (mouse === 'true'){
                e.target.style.backgroundColor = getColour();
                }
                else{
                    return;
                }
            })
        })
    })  
        
            

   




roundedValue =calcValue();
    pensize(roundedValue);
    cellarr =document.querySelectorAll('.cell');