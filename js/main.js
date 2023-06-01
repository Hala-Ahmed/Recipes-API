


// //XMLHttpRequest
// function getfish(){
//  return new Promise(function(callback){
//    let http = new XMLHttpRequest()
//    http.open("get","https://forkify-api.herokuapp.com/api/search?q=fish")
//    http.send()
//    let list = [];
//    http.addEventListener("readystatechange",function(){
//       if(http.readyState==4 && http.status==200){
//           list=JSON.parse(http.response).recipes
       
//          console.log( "fish" ,list);
//          callback()
//       }
//    })
//  })
// }

// function getpizza(){
//  return new Promise(function(callback){
//    let http = new XMLHttpRequest()
//    http.open("get","https://forkify-api.herokuapp.com/api/search?q=pizza")
//    http.send()
//    let list = [];
//    http.addEventListener("readystatechange",function(){
//       if(http.readyState==4 && http.status==200){
//           list=JSON.parse(http.response).recipes
//          console.log( "pizza" ,list);
//          callback()
//       }
//    })
//  })
// }

// function getpasta( ){
//  return new Promise(function(callback){
//    let http = new XMLHttpRequest()
//    http.open("get","https://forkify-api.herokuapp.com/api/search?q=pasta")
//    http.send()
//    let list = [];
//    http.addEventListener("readystatechange",function(){
//       if(http.readyState==4 && http.status==200){
//           list=JSON.parse(http.response).recipes
//          console.log( "pasta" ,list);
//          callback()
//       }
//    })
//  })
// }



// getpasta().then(function(){
//    getpizza().then(function(){
//       getfish().then(function(){
//          console.log("hala ahmed saad salem");
//       })
//    })
// })
























let datalist =[]
 async function getdata(type){
    let res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${type}`)
    let data =await res.json()
    datalist =data.recipes
    display()
 console.log(datalist);
 }
 getdata("pizza")




function display(){
let temp =""
datalist.forEach((el)=>{
   temp+=`<div   recipeid= ${el.recipe_id}    data-bs-toggle="modal" data-bs-target="#exampleModal"  class="col-md-3  items">
   <div class="border p-2 border-info text-center">
   <img src="${el.image_url}" class="w-100" alt="">
      <h3>${el.title}</h3>
      <P>${el.recipe_id}</P>
  </div>
   </div>`
})
document.getElementById("myrow").innerHTML=temp
getitems() 
}

 function getitems(){
   let  items =document.querySelectorAll(".items")
   for(i=0; i<items.length; i++){
      items[i].addEventListener("click",function(){
         let resid =this.getAttribute("recipeid")
         getspc(resid)
      })
   }
 
 }

let navlink =document.querySelectorAll(".nav-link")

for( let i =0 ; i<navlink.length ; i++){
   navlink[i].addEventListener("click",function(){
      let type =this.getAttribute("categtype") 
       getdata(type);
   })
}



 let dataRecpe={}
 async function getspc(id){
    let res =await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    let data =await res.json() 
    dataRecpe=data.recipe
    displaydataRecpe()
  
 }

 function displaydataRecpe(){
   temp =""
   dataRecpe.ingredients.forEach((el)=>{
      temp+=`<li>${el}</li>`
   })
   document.getElementById("myimg").setAttribute("src",dataRecpe.image_url)
   document.getElementById("title").innerHTML=dataRecpe.title

   document.getElementById("ingredients").innerHTML=temp
 }

 getspc()





                                                // important...

//   function getdata(){
//     fetch("https://forkify-api.herokuapp.com/api/search?q=fish")
//     .then( async function(data){
//       let res = await  data.json()
//       console.log(res);
//     })
//     .catch(function(erro){
//       console.log(erro);
//     })
//   }
//   getdata()