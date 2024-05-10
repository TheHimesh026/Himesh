const userInput = document.querySelector(".user-holder");
const passInput = document.querySelector(".pass-holder");
const randomNoPara = document.querySelector(".random-no");
const url = "http://localhost:5173";

function handleSubmit(){
  event.preventDefault();
  const userValue = userInput.value;
  const passValue = passInput.value;
  const postUrl = `${url}/login`;
   if(!userValue || !passValue){
     window.alert("Enter username or password");
     localStorage.clear();
    throw new Error("Invalid form");
  };
  fetch(postUrl,{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
      username:userValue,
      password:passValue
    }),
  })
  .then(res => res.json())
  .then(data => localStorage.setItem("token",data.token))
  .then(con => loginSuccess())
};

function loginSuccess(){
  const dashDiv = document.querySelector(".dashboard").style.display = "block";
};

function randomNo(){
  const fetchNoUrl = `${url}/dashboard`;
  const localToken = localStorage.getItem("token");
  const token = `Bearer ${localToken}`;
  fetch(fetchNoUrl,{
    method:"GET",
    headers:{
      "authorization":token
    },
  })
  .then(res => res.json())
  .then(data => {
    randomNoPara.innerText = data.msg;
  })
};