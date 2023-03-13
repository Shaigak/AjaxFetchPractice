"use strict"

// let users=[
//     {
//         name:"Mubariz",
//         surname:"Agayev",
//         age:18
//     },

//     {
//         name:"Aqshin",
//         surname:"Hummetov",
//         age:27
//     },

//     {
//         name:"Pervin",
//         surname:"Rehimli",
//         age:26
//     },

//     {
//         name:"Mirze",
//         surname:"Beshirzade",
//         age:27
//     },

//     {
//         name:"Xacker",
//         surname:"Akberov",
//         age:20
//     },
// ];


// // function getUsersByName(str){

// //     setTimeout(() => {
// //         let result=users.filter(m=>m.name.includes(str))
    
// //         console.log(result);
// //     }, 3000);

// // }
// // getUsersByName("r")


// let ul=document.querySelector("ul")


// function getUsers(datas){

//     let str="";


//     setTimeout(() => {

//      users.forEach(user => {

//         str+=`<li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`
        
//      });

//      ul.innerHTML=str;
        
//     }, 2000);
// }



// // function creatUser(user,callback){
// //     setTimeout(() => {

// //         users.push(user);
// //         callback();
        
// //     }, 3000);
// // }
// // getUsers();
// // creatUser({name:"Elcan", surname:"Qurbanov",age:20},getUsers)


// function creatUser(user){

//     return new Promise((resolved,rejected)=>{

//         setTimeout(() => {

//             users.push(user);
//             let err=true;

//             if(!err){

//                 resolved(users);    // response gonderdik . 

//             }else{
//                 rejected("Something is wrong");  // false olanda rejected girir err mesajini bize gosderir . 
//             }
            
//         }, 3000);

//     })
    
// }
// // getUsers();
// creatUser({name:"Elcan", surname:"Qurbanov",age:20}).then(response=>{
//     getUsers(response)  //response =users .  
  
// }).catch(err=>{
//     console.log(err);
// })





    //   function getAllpPosts(){

    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(datas =>{
    //     let str=""

    //   datas.forEach(data => {

    //    str+=`<li data-id="${data.id}" class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userId}</b></li>`
    //   });

    //   ul.innerHTML=str;

    //   })

    //   }

    //   getAllpPosts();


    //   function getPostById(id){

    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(response => response.json())
    //     .then(res =>{
          
  
    //         // ul.innerHTML+=`<li class="list-group-item"><b>${res.id}-</b><b>${res.body}-</b><b>${res.userId}</b></li>`

    //         alert( res.id +"- "+res.body)
    //     });
  
    //   }
      
      
    //   getPostById(3)

   

//    setTimeout(() => {
//     let elems= document.querySelectorAll("li")
//     elems.forEach(elem => {
//         elem.addEventListener("click",function(){

//             let id =parseInt(this.getAttribute("data-id"));
//             getPostById(id)
            
//         })
//     });
    
//    }, 2000);


   
//  async function getPostById(id){

//   let data= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
//   let result = await data.json()
//   alert( result.id +"- "+result.body)

//   }

//   getPostById(2)


$(function(){

    $("button").click(function(){
        $.ajax({url: 'https://jsonplaceholder.typicode.com/posts', success: function(datas){
          let str =""

          datas.forEach(data => {

            str+=`<li class="list-group-item"><b>${data.id}-</b><b>${data.body}-</b><b>${data.userId}</b></li>`
            
          });

          $("ul").html(str)

          
        }});
      });

})