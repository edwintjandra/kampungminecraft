export function tabfunction() {

    var tabs=document.querySelectorAll(".tab");
    var tabContents=document.querySelectorAll(".tab-contents>*");

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