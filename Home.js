let wrapper = document.querySelector(".sliderWrapper");
let menuItems = document.querySelectorAll(".menuItem");

let products = [
  {
    id: 1,
    title: "Clotes",
    price: 119,
  },
  {
    id: 2,
    title: "shose",
    price: 149,
  },
  {
    id: 3,
    title: "bage",
    price: 109,
  },
  {
    id: 4,
    title: "watches",
    price: 129,
  },
];
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

function go()
{
  location.replace("Sgin up.Html");
}

function quiz()
{
    var mm = document.querySelectorAll('.vid');
    var yes = 0;
    var no = 0;
    mm.forEach(function(i)
    {
        if(i.checked && i.value == 'yes')
        {
            yes++;
        }
        else if(i.checked && i.value == 'no')
        {
            no ++;
        }
        
    })
    alert(`yes = ${yes} no = ${no}`);
}

var users=[{username:"Mosataf",password:"123"}];
function signup(){
    var user=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var Phone=document.getElementById('Phone').value;
    var age=document.getElementById('Age').value;
    var Gander=document.getElementsByName('redio').value;
    var regexpattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/; 

     for(var i =0; i<user.length;i++)
     {
      if(user[i].username==user)
      {
        alert("the name is exsesstes")
      }
     }

     if(user==""||password==""||Phone==""||Gander==""||age=="")
     {
        alert('please fill empty felids!');
        return false;
     }
     else if(user.length<7 || user.length>15)
     { 
       alert("please enter the username between [5:12] char");
       return false;
     }
     else if(Phone.length<10 || Phone.length>13)
     { 
       alert("please enter the phone between [10:13] char");
       return false;
     }
     else if(age<15 || age>60)
     { 
       alert("please enter the Age between [15:60] char");
       return false;
     }
     else if(!password.match(regexpattern))
     {
        alert("please enter the password {5,12} char");
        return false;
     }
     users.push({
        username:user,
        password:password
      });
      alert("true");
}

function signin()
{
  
  var nam = document.getElementById("username").value;
  var Passw = document.getElementById("password").value;
  for(var i=0;i<users.length;i++)
  {
    if(nam==""||Passw=="")
    {
        alert("Error");
        return false;
    }
    else if(users[i].username==nam&&users[i].password==Passw)
      {
        alert("Sucsed");
        window.location='Quiz.Html';
      }

  }
}

function forgitpassword()
{
var name=document.getElementById('use').value;
var pass=document.getElementById('word').value;
    for(var i=0 ; i<=users.length ;i++)
{
 if(users[i].username==name)
  {
    users[i].password=pass;
     alert("Change")
   }
}
}