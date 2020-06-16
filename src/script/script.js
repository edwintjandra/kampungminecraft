import $ from "jquery";

import {tabfunction} from "./tabs.js"
import {videoSection} from "./videos.js"
import {clipboard} from "./clipboard.js"
import {headerTop} from "./header-top.js"
import {flicktyCarousel} from "./carousel.js"
 
import "../style/style.css";


$(window).on("load",function() {
    $("body").css("visibility","visible")
     
})


 
tabfunction();
videoSection();
clipboard();
headerTop();
flicktyCarousel();
 
 

 