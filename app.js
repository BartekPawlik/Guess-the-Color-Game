const message = document.querySelector(".message")
const ColorDisplay = document.querySelector('.color-display')
const easy = document.querySelector('.easy')
const hard = document.querySelector(".hard")
const squers = document.querySelectorAll('.square')
const newColors = document.querySelector(".new")
const container = document.querySelector('#container')
const delateElements = document.querySelectorAll(".delate")
const Easysquers = document.querySelectorAll(".wk")
let rgb = []





document.addEventListener("DOMContentLoaded", function(){
    
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb('+ r + ", " + g + ", " + b + ')';

    

}




for(let i= 0; i < squers.length; i++){
    // console.log(rgb)
 
    const container = randomRgbColor()
    rgb.push(container)

    squers[i].style.backgroundColor = rgb[i]


    function dispalySquers(){
        const randomRgb = () =>  rgb[Math.floor(Math.random() * rgb.length )]   ;

        ColorDisplay.textContent = randomRgb();
    
        squers[i].addEventListener('click', function(){
            const clikColor = this.style.backgroundColor
       const  tueColor = ColorDisplay.textContent 
       console.log("hey")
       console.log(clikColor)
       console.log(tueColor)
    
    
            if(clikColor === tueColor){
                message.textContent = "You Win!"
                squers.forEach(square => {
                    square.style.backgroundColor = "#232323"
                    newColors.textContent = "try Again"
                })
    
            }else{
               
                this.style.backgroundColor = "#232323"
                message.textContent = "Wrong answer try Again"
    
            }
        })
    }
    dispalySquers()
   
    
}

hard.addEventListener("click", function(){
    location.reload()
})


easy.addEventListener('click', function(){
    delateElements.forEach(delet =>{
        message.textContent = ""
        delet.remove()
    })
    rgb = []

  

   for(let i= 0; i < Easysquers.length; i++){
        const container = randomRgbColor()
    rgb.push(container)
    console.log(rgb)
    Easysquers[i].style.backgroundColor = rgb[i]

    dispalySquers()
}
   
        })
   

})

newColors.addEventListener("click", ()=>{
  location.reload()
})



