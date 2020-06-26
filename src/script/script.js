import $ from "jQuery";


import {flicktyCarousel} from "./lib/flickity"
import {clipboard} from "./lib/clipboard"
import {headerTop} from "./lib/header"
import {tabfunction} from "./lib/tabs"
import {videoSection} from "./lib/videos"

import "../style/style.css"


$(window).on("load",function() {
    $("body").css("visibility","visible")
     
})


tabfunction();
videoSection();
clipboard();
headerTop();
flicktyCarousel();

 
 
 

 