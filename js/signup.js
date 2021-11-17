// storing in local storage with the help of email and password

function signup() {
  first_name = document.getElementById("first_name").value;
  last_name = document.getElementById("last_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  console.log(first_name);
  console.log(last_name);
  console.log(email);
  console.log(password);
  get_email = localStorage.getItem(email);
  if (get_email) {
    alert("this id is already created");
    //   checking if this id is created or not
  } else {
    localStorage.setItem(email, password);
    alert("Hurraah!!! id is created successfully.....");
  }
}
