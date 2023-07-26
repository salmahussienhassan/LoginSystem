window.onload = function(){
    var index=localStorage.getItem("usersindex");
    var allUsers=JSON.parse(localStorage.getItem("users"))
    document.getElementById('heading').innerHTML+=`<h2 class="text-center text-white fw-bold my-5">Welcome ${allUsers[index].name.toUpperCase()}</h2>`;

  }

  var logout=document.querySelector('#logout');
  
  // logoutfunction
  logout?.addEventListener('click',function(){
    window.location.replace("./index.html");
});
