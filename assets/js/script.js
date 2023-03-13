"use strict"

let users=[
    {
        name:"Mubariz",
        surname:"Agayev",
        age:18
    },

    {
        name:"Aqshin",
        surname:"Hummetov",
        age:27
    },

    {
        name:"Pervin",
        surname:"Rehimli",
        age:26
    },

    {
        name:"Mirze",
        surname:"Beshirzade",
        age:27
    },

    {
        name:"Xacker",
        surname:"Akberov",
        age:20
    },
];


// function getUsersByName(str){

//     setTimeout(() => {
//         let result=users.filter(m=>m.name.includes(str))
    
//         console.log(result);
//     }, 3000);

// }
// getUsersByName("r")


let ul=document.querySelector("ul")


function getUsers(datas){

    let str="";


    setTimeout(() => {

     users.forEach(user => {

        str+=`<li class="list-group-item"><b>${user.name}-</b><b>${user.surname}-</b><b>${user.age}</b></li>`
        
     });

     ul.innerHTML=str;
        
    }, 2000);
}



// function creatUser(user,callback){
//     setTimeout(() => {

//         users.push(user);
//         callback();
        
//     }, 3000);
// }
// getUsers();
// creatUser({name:"Elcan", surname:"Qurbanov",age:20},getUsers)


function creatUser(user){

    return new Promise((resolved,rejected)=>{

        setTimeout(() => {

            users.push(user);
            let err=true;

            if(!err){

                resolved(users);    // response gonderdik . 

            }else{
                rejected("Something is wrong");  // false olanda rejected girir err mesajini bize gosderir . 
            }
            
        }, 3000);

    })
    
}
// getUsers();
creatUser({name:"Elcan", surname:"Qurbanov",age:20}).then(response=>{
    getUsers(response)  //response =users .  
  
}).catch(err=>{
    console.log(err);
})

