const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submitBtn = document.querySelector(".submit-btn");
const err = document.querySelector(".err");
const content = document.querySelector(".content");
const logedContent = document.querySelector(".loged-in");

submitBtn.addEventListener("click", () => {
  //API CALL
  if (email.value === "user@gmail.com" && password.value === "user") {
    content.style.display = "none";
    logedContent.style.display = "flex";
  } else {
    err.innerHTML = "Email or password incorrect !";
    setTimeout(() => {
      err.innerHTML = "";
    }, 4000);
  }
  console.log("Clicked");
});
