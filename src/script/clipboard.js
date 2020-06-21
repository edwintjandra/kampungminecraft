import ClipboardJS from "clipboard";
var p=document.querySelector(".ip");

export function clipboard() {
    
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