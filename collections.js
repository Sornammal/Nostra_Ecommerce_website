import {products} from "./products.js";


let offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

let sideNavMenu=document.querySelector(".navbar-menu-toggle")
let sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
   
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

let container=document.querySelector(".products")
products.forEach((product)=>{
    let createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="./image/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

let filterList =[]
let tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }        
       
    })
})

// let searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update()
{    
    let productList = document.querySelectorAll(".product")
    for(let i=0;i<productList.length;i++){
        let check = false
        let product=productList[i]
        console.log(product)
        let temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}