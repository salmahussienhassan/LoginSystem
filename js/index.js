var sName=document.querySelector('#sName');
var sEmail=document.querySelector('#sEmail');
var sPass=document.querySelector('#sPass');
 
var signup=document.querySelector('#signup')
var lPass=document.querySelector('#lPass');
var lEmail=document.querySelector('#lEmail');
var login=document.querySelector('#login')
var logout=document.querySelector('#logout')
var heading=document.querySelector('#heading')

var allUsers;

if(JSON.parse(localStorage.getItem('users'))!=null)
{
    allUsers=JSON.parse(localStorage.getItem('users'));
}

else
{
    allUsers=[];
}
document.addEventListener("DOMContentLoaded", function() {

if(signup){
    signup.addEventListener('click',function(){
        var user={
            name:sName.value,
            email:sEmail.value,
            pass:sPass.value
    
        }
    allUsers.push(user);
    localStorage.setItem('users',JSON.stringify(allUsers));
    window.location.href = "./index.html";
    });
}
});
  

// function signUP(){
//     var user={
//         name:sName.value,
//         email:sEmail.value,
//         pass:sPass.value

//     }
// allUsers.push(user);
// localStorage.setItem('users',JSON.stringify(allUsers));
// window.location.href = "./index.html";
// }
document.addEventListener("DOMContentLoaded", function() {
if(login){
    login.addEventListener('click',function(){
        for(var i=0;i<allUsers.length;i++){
        
                 if(lEmail.value==allUsers[i].email && lPass.value==allUsers[i].pass)
                 {console.log(allUsers[i].name);
                  
                 
                     window.location.replace("./home.html");
                   addtext(i);
                     
                     
                 }
                
                 
             }

             
    });
}
   
});
  function addtext(index){
    document.getElementById('heading').innerHTML+=`<h2 class="text-center fw-bold my-5">Welcome ${allUsers[index].name}</h2>`;
  }
// function logIN(){
//     for(var i=0;i<allUsers.length;i++){
//         console.log(lEmail.value);
//         console.log(allUsers[i].email);
        
//              if(lEmail.value==allUsers[i].email && lPass.value==allUsers[i].pass)
//              {
//                  window.location.href = "./home.html";
//              }
//          }
// }
document.addEventListener("DOMContentLoaded", function() {
if(logout){
    logout.addEventListener('click',function(){
        window.location.href = "./index.html";
    });
}

});