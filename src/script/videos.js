export function videoSection() {
    var nextButton=document.querySelector(".button-1");
    var previousButton=document.querySelector(".button-2");
    var videos=document.querySelectorAll(".video-item");
    var counter=0;

     
    nextButton.addEventListener("click",function(){
        counter++;
        next();
    })

    previousButton.addEventListener("click",function(){
        counter--;
        next();
    })
    
    function next() {
        removeShow();
        checking();

        videos.forEach(function(video,index){
             if(counter===index) {
                 video.classList.add("video-show")
                  
             }
        }) 
        
    }

    function removeShow() {
        videos.forEach(function(video){
           video.classList.remove("video-show");
        }) 
    }

    function checking() {

        if(counter>=videos.length) {
            counter=0;
             
        }else if(counter<0){
            counter=videos.length-1;
        }
    }
}