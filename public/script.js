$(window).on("load",function() {
    $("body").css("visibility","visible")
     
})

function flicktyCarousel() {
    
    if($('.main-cards')) {
        var manyCells= ( ($(window).width())<590  )?1:2;

        $('.main-cards').flickity({
            // options
            groupCells: true,
            contain: true,
            autoPlay:true,
            groupCells: manyCells
        });
    }
    

}

function clipboard() {

    var p=document.querySelector(".ip");
    
    if(p) {
        new ClipboardJS('.text');

        p.addEventListener("click",function() {
            this.setAttribute("aria-label","copied!");
         
        })
    
        p.addEventListener("mouseleave",function(event) {
    
            setTimeout(function(){
                event.target.setAttribute("aria-label","click to copy");
            },1000)
            
        })
    }
    
    
} 

function headerTop() {

    var burger=$(".burger")
    var headerLists=$(".header-top-lists");
    var lists=document.querySelectorAll(".header-top-lists li");
     
     
    if(burger&&headerLists&&lists){
     burger.click(function(){
           
         headerLists.toggleClass("header-lists-active");
         burger.toggleClass("burger-animation")
  
         lists.forEach(function(item,index){
 
            if(!item.style.animation) {
               item.style.animation=`header-top-animation 5.4s ${index/3.85}s forwards`; 
 
               return;
               
            }  
             
            item.style.animation="";
         }) 
         
 
     })
 
     $(window).scroll(function(){
         headerLists.removeClass("header-lists-active");
         burger.removeClass("burger-animation")
         lists.forEach(function(item){
             item.style.animation="";
         })
        
     })  
    }
    
 
     
}


function tabfunction() {

    var tabs=document.querySelectorAll(".tab");
    var tabContents=document.querySelectorAll(".tab-contents>*");
    
    if(tabs&&tabContents) {
        tabs.forEach(function(tab){

            tab.addEventListener("click",function(){
                showCase(this);  
            });
    
        })
    
        function showCase(item) {
    
            removeActiveTab();
            removeTabContent();
            
            item.classList.add("active-tab");
            
            var displayElement=document.querySelector(`#${item.id}-content`);
            displayElement.classList.add("show");
        }
    
        /* remove function */
    
        function removeActiveTab() {
            
            
            tabs.forEach(function(tab){
    
                tab.classList.remove("active-tab");
    
            })
    
        };
        
        function removeTabContent() {
    
            tabContents.forEach(function(item){
                item.classList.remove("show");
            })
    
        } 
    } 

    

}

function videoSection() {

    var nextButton=document.querySelector(".button-1");
    var previousButton=document.querySelector(".button-2");
    var videos=document.querySelectorAll(".video-item");


    if(nextButton&&previousButton&&videos) {
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
    
}






 
tabfunction();
videoSection();
clipboard();
headerTop();
flicktyCarousel();
 
 

 