//buttons
document.querySelectorAll(".drum").forEach(el =>{
    el.addEventListener("click",function(){

        var butt= this.innerHTML;
        makesound(butt);
        anime(butt);
    
    });
})

//keyboards
document.addEventListener("keydown",function(e){

    var alp=e.key;
    makesound(alp);
    anime(alp);
    
})


function makesound(key){

    switch(key){
        case 'w':
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        
        case 'a':
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        
        case 's':
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        
        case 'd':
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
            
        case 'j':
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
            
        case 'k':
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("/sounds/kick.mp3");
            audio.play();
            break;

        default:
            console.log(key);
            break;

    }
}

function anime(e){
    var active=document.querySelector("."+e);
    active.className+=" pressed";
    setTimeout(function(){active.classList.remove("pressed")},100);
}