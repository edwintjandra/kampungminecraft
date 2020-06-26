import $ from "jQuery";
import jQueryBridget from "jquery-bridget";
import Flickity from "flickity";


jQueryBridget( 'flickity', Flickity, $ );

export function flicktyCarousel() {
    
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