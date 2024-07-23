
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const msg = document.getElementById("msg");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


username.addEventListener("blur", () => {
  checkInputUsername();
})

msg.addEventListener("blur",() =>{
    checkInputmsg();
})


function checkInputUsername(){
  const usernameValue = username.value;

  if(usernameValue === ""){
    errorInput(username, "Campo obrigatório")
  }else{
    const formItem = username.parentElement;
    formItem.className = "form-content"
  }

}

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "Campo obrigatório")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputmsg(){
    const msgValue = msg.value;
  
    if(msgValue === ""){
      errorTextArea(msg, "Campo obrigatório")
    
    }else{
      const formItem = msg.parentElement;
      formItem.className = "form-content"
    }


}


function checkForm(){
  checkInputUsername();
  checkInputEmail();
  checkInputmsg();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("FORMULÁRIO ENVIADO")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

function errorTextArea(textarea, message){
    const formItem = textarea.parentElement;
    const textMessage = formItem.querySelector("a")
  
    textMessage.innerText = message;
  
    formItem.className = "form-content error"
  
  }