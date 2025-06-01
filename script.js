// offer close actions
let offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
}
)

// Mobile view menu bar actions 
let sideNavMenu=document.getElementById("side-navbar-activate")
let sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})


let sliderleftbutton = document.getElementById("slider-left-activate")
let sliderrightbutton =document.getElementById("slider-right-activate")
let sliderimage= document.querySelector(".slider-image-container")
let slidermargin=0

console.log(sliderleftbutton)

sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
}
)

sliderleftbutton.addEventListener("click",function(){

    if(slidermargin==0)    {       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{
        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }   
    
}
)

let likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {            
            e.target.src="./image/icons/redheart.png"
        }
        else{
            e.target.src="./image/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    let elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     let elbound = el.getBoundingClientRect()
     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})