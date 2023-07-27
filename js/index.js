var sName=document.querySelector('#sName');
var sEmail=document.querySelector('#sEmail');
var sPass=document.querySelector('#sPass');
 
var signup=document.querySelector('#signup')
var lPass=document.querySelector('#lPass');
var lEmail=document.querySelector('#lEmail');
var login=document.querySelector('#login');

var heading=document.querySelector('#heading');
var sfeedback=document.querySelector('#sfeedback');
var lfeedback=document.querySelector('#lfeedback');



var allUsers;

if(JSON.parse(localStorage.getItem('users'))!=null)
{
    allUsers=JSON.parse(localStorage.getItem('users'));
}

else
{
    allUsers=[];
}


//signup function
    signup?.addEventListener('click',function(){
        
        if(Emailvaild()==true && Namevaild()==true && Passvaild()==true){
            console.log('hi')
            console.log(isReserved())
           if(isReserved()==false)
           {
            var user={
                name:sName.value,
                email:sEmail.value,
                pass:sPass.value
        
            }
        allUsers.push(user);
        localStorage.setItem('users',JSON.stringify(allUsers));
        
        sfeedback.className= sfeedback.className.replace("text-danger","text-green");
        sfeedback.innerHTML='Success';
           }
        }
        else{
           
            notvaild();
        }
        
    });



//login function
login?.addEventListener('click', function() {
    if (lEmail.value == '' || lPass.value == '') {
      lfeedback.innerHTML = 'All Inputs Is Required';
    } else {
      var userFound = false;
      for (var i = 0; i < allUsers.length; i++) {
        if (lEmail.value == allUsers[i].email) {
          if (lPass.value == allUsers[i].pass) {
            console.log(allUsers[i].name);
            localStorage.setItem("usersindex", `${i}`);
            window.location.replace("./home.html");
            userFound = true;
            break;
          } else {
            lfeedback.innerHTML = 'Incorrect Password';
            userFound = true;
            break;
          }
        }
      }
      if (!userFound) {
        lfeedback.innerHTML = 'User Is Not Registered, Please Sign Up';
      }
    }
  });


  
    // email validation

    function Emailvaild(){
var RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return RegExp.test(sEmail.value);

    }
function Namevaild(){
    if(sName.value!=='')
    return true;
    else
    return false;
}
function Passvaild(){
    if(sPass.value!=='')
    return true;
    else
    return false;
}
    function notvaild(){

        if(!Passvaild()){
            
            sfeedback.innerHTML='All Inputs Is Required'
        }
        if(!Namevaild()){
           
            sfeedback.innerHTML='All Inputs Is Required'
        }
if (!Emailvaild())
{
    if(sEmail.value=='')
    {
        sfeedback.innerHTML='All Inputs Is Required'
    }
    else
    {
        sfeedback.innerHTML='Email Is Invaild';
    }

}

    }

    //email_isreserved
    function isReserved(){
        for(var i=0;i<allUsers.length;i++){
            if(sEmail.value==allUsers[i].email){
              
                if(sfeedback.className.includes("text-green")){
                    sfeedback.className= sfeedback.className.replace("text-green","text-danger");
                }
                sfeedback.innerHTML='This Email Is Already Reserved';
                return true;

            }
        }
        return false;
    }