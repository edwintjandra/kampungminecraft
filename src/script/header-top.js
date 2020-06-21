import $ from "jquery";
var burger=$(".burger")
var headerLists=$(".header-top-lists");
var lists=document.querySelectorAll(".header-top-lists li");
var headerFixed=document.querySelector(".header-top-fixed");

export function headerTop() {
    
   if(burger&&headerLists&&lists&&headerFixed){
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

        
         if($(this).scrollTop() >  140 ) {
            headerFixed.classList.add("active")  
         }else {
             headerFixed.classList.remove("active")
         }
 
       
    })  
   }
   

    
}