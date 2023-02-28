let slider = document.getElementById('range');
let value = document.querySelector('.value');
const sketchpad = document.querySelector(".sketchpad");
const resetBtn = document.querySelector('.reset-section');
const RBGbtn = document.querySelector ('.RBG-button');
const opaque = document.querySelector('.opaque-section');
const blueBtn = document.querySelector('.blue');
const blackBtn = document.querySelector('.black');

let cells ;
let cellarr = [];
let roundedValue;
  
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

// event listner for reset button to reload the page 
resetBtn.addEventListener('click', () => {
    location.reload();
})
//event listner to RGB button to toggle on random color
RBGbtn.addEventListener('click', () => {
    
    //loop to clear all backgroundcolor style when the RGB button is clicked
    for (i = 0; i < cellarr.length; i++){
        cellarr[i].style.backgroundColor = '';
     }
    
         //event listner on forEach loop to activate pen with random colors
        cellarr.forEach((cell) => {
          cell.addEventListener('pointermove', function (e) {
            // 'R' to get random number for red in Rgb()
            //'B' to get random number for blue in rgb()
            // 'G' to get random number for green in rgb()
         let R = Math.ceil((Math.random() * 255) +1)
         let B = Math.ceil((Math.random() * 255) +1)
         let G = Math.ceil((Math.random() * 255) +1)
         //'RBG' to concat R G B 
            let RBG = `rgb(${R} ${G} ${B})`;
         e.target.style.backgroundColor = RBG;
        
           })
        })
      
    
        
})
//event listner to opaque button to toggle on opaque color
opaque.addEventListener('click', () => {
    
    //loop to clear all backgroundcolor style when the opaque button is clicked
    for (i = 0; i < cellarr.length; i++){
        cellarr[i].style.backgroundColor = '';
    }
    
    cellarr.forEach((cell) => {
        // 'i' to increase the opacity on every move of the pointer
        let i =0.09
        cell.addEventListener('pointermove', (e) => {
            
            i += 0.09
            e.target.style.backgroundColor = `rgb(0,0,0,${i})`;
        })

    })
    
 })
 
 //event listner to black button to toggle on black color
 blackBtn.addEventListener('click', () => {
    
    //loop to clear all backgroundcolor style when the black button is clicked
    for (i = 0; i < cellarr.length; i++){
        cellarr[i].style.backgroundColor = '';
     }
         // forEach loop to add black backgroundcolor on pointermove
        cellarr.forEach((cell) => {
          cell.addEventListener('pointermove', function (e) {
         
         e.target.style.backgroundColor = "black";
        
           })
        })
    
    
        
})
//event listner to blue button to toggle on blue color
blueBtn.addEventListener('click', () => {
    
    //loop to clear all backgroundcolor style when the blueBtn button is clicked
    for (i = 0; i < cellarr.length; i++){
        cellarr[i].style.backgroundColor = '';
     }
         //forEach loop to add blue backgroundColor on mousemove
        cellarr.forEach((cell) => {
          cell.addEventListener('pointermove', function (e) {
         
         e.target.style.backgroundColor = "blue";
        
           })
        })
    
        
})




roundedValue =calcValue();
    pensize(roundedValue);
    cellarr =document.querySelectorAll('.cell');