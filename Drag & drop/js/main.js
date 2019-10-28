"use strict";
const numbers = document.querySelectorAll('.number');
const numberBoxes = document.querySelectorAll('.number-box')
let drop=document.querySelector(".dropArea")










for (const number of numbers) {
    number.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('dei', this.id);

        //Add active class to the number-box to help the user
        for (const numberBox of numberBoxes) {
            const n = +number.getAttribute("data-number");
            const min = +numberBox.getAttribute("data-min");
            const max = +numberBox.getAttribute("data-max");
            
            if(n <= max && n >= min){
                numberBox.classList.add("active");
                break;
            }
        }
    })

    number.addEventListener("dragend", function(){
        document.querySelector('.number-box.active').classList.remove("active");
    })
}

for (const numberBox of numberBoxes) {
    numberBox.addEventListener("dragover", function(e){
        e.preventDefault();
    })

    numberBox.addEventListener("drop", function(e){
        const id = e.dataTransfer.getData('dei');
        const element = document.getElementById(id);
        
        const number = +element.getAttribute("data-number");
        const min = +this.getAttribute("data-min");
        const max = +this.getAttribute("data-max");
        
        if(number <= max && number >= min){
            this.appendChild(element);
        }
    })
}

// dataTransfer
// dragOlunanElement = number5