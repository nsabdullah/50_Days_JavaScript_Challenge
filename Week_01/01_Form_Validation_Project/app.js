const form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

// Check Required Fields
function checkRequiredFields(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showErorr(input, `${getFildName(input)} can't be empty`);
    } else {
      showSuccess(input);
    }
  });
}

// show erorr
function showErorr(input, massage) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerHTML = `${getFildName(
    input
  )} ${massage}  `;
}
// get fild name
function getFildName(input) {
  return input.id[0].toUpperCase() + input.id.slice(1);
}

//show success
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check input lenght

function checkLenght(input) {
  if (input.value.length < 3) {
    showErorr(input, `${getFildName(input)} must be more than 3 charector`);
  }
}

//Event listener
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reloading

  checkRequiredFields([username, email, password, password2]);
  checkLenght(username);
  checkLenght(password);
});
