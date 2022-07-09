/*
==================================
counter
==================================
*/
let sec = 86399;

let counter = setInterval(function(){
    let hour = Math.floor(sec/(60*60));
    // console.log(hour)

    remainHour= sec % (60*60);
    // console.log(remainHour)
    let min = Math.floor(remainHour/(60));
    // console.log(min)

    remainSec= remainHour % 60;
    // console.log(remainSec)

    if(sec>0){
        sec-=1;
    }else{
        document.getElementById("hours").innerHTML="0"
    document.getElementById("min").innerHTML="0"
    document.getElementById("sec").innerHTML="0"
    }

    document.getElementById("hours").innerHTML=hour
    document.getElementById("min").innerHTML=min
    document.getElementById("sec").innerHTML=remainSec

},1000)

/*
==================================
on mpuse over
==================================
*/
let home =document.getElementById("home1");
let hme =document.getElementById("home2");
home.onmouseover = function(){
    hme.style.display="block"
}
home.onmouseout = function(){
    hme.style.display="none"
}

let Category =document.getElementById("Category");
let cat =document.getElementById("Category2");
Category.onmouseover = function(){
    cat.style.display="block"
}
Category.onmouseout = function(){
    cat.style.display="none"
}

let Gift =document.getElementById("Gift");
let Gif =document.getElementById("Gift2");
Gift.onmouseover = function(){
    Gif.style.display="block"
}
Gift.onmouseout = function(){
    Gif.style.display="none"
}

let page =document.getElementById("page");
let pag =document.getElementById("page2");
page.onmouseover = function(){
    pag.style.display="block"
}
page.onmouseout = function(){
    pag.style.display="none"
}

// screen <993
if(window.pageXOffset < 993 ){
    page.onmouseout = function(){
        pag.style.display="none"
    }
    Gift.onmouseout = function(){
        Gif.style.display="none"
    }
    Category.onmouseout = function(){
        cat.style.display="none"
    }
    home.onmouseout = function(){
        hme.style.display="none"
    }

        //onclick
        page.onclick = function(){
            pag.style.display="none"
        }
        Gift.onclick = function(){
            Gif.style.display="none"
        }
        Category.onclick = function(){
            cat.style.display="none"
        }
        home.onclick = function(){
            hme.style.display="none"
        }   


}else{
    page.onmouseover = function(){
        pag.style.display="block"
    }
    Gift.onmouseover = function(){
        Gif.style.display="block"
    }
    Category.onmouseout = function(){
        cat.style.display="block"
    }
    home.onmouseout = function(){
        hme.style.display="block"
    }
}

/*
==================================
click ==> footer
==================================
*/

let Find1 =document.getElementById("Find1");
let Find2 =document.getElementById("Find2");
Find1.ondblclick= function(){
    Find2.style.display="block"
}
Find1.onclick = function(){
    Find2.style.display="none"
}

let Find3 =document.getElementById("Find3");
let Find4 =document.getElementById("Find4");
Find3.ondblclick= function(){
    Find4.style.display="block"
}
Find3.onclick = function(){
    Find4.style.display="none"
}

let inf1 =document.getElementById("inf1");
let inf2 =document.getElementById("inf2");
inf1.ondblclick= function(){
    inf2.style.display="block"
}
inf1.onclick = function(){
    inf2.style.display="none"
}

let In1 =document.getElementById("In1");
let In2 =document.getElementById("In2");
In1.ondblclick= function(){
    In2.style.display="block"
}
In1.onclick = function(){
    In2.style.display="none"
}

/*
==================================
scroll to top
==================================
*/

let up = document.getElementById("up");
let scroln = document.getElementById("scrolUP");

window.onscroll =function(){
    if(window.pageYOffset > 500){
        scroln.style.display="block"
    }else{
        scroln.style.display="none"

    }

    if(window.pageXOffset < 993){
        scroln.style.display="none"
    }else{
        scroln.style.display="block"
    }
}

up.onclick = function(){
    window.scrollTo(0,0)
}


