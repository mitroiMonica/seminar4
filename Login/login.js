import users from "../Database/users.js";

export default function login(e) {
  //un button dintr-un formular face implicit refresh la pagina
  e.preventDefault();
  const loginEmail = document.getElementById("loginEmail");
  const loginPasword = document.getElementById("loginPassword");
  console.log(`vrei sa te autentifici cu 
  ${loginEmail.value} si ${loginPasword.value}`);
  const user = users.filter((user) => user.email === loginEmail.value);
  if (user[0]) {
    console.log("utilizator gasit: ", user[0]);
    if (user[0].password === loginPasword.value) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", user[0].name);
      document.getElementById("login").setAttribute("hidden", "true");
      document.getElementById("register").setAttribute("hidden", "true");
      document.getElementById("user").removeAttribute("hidden");
      document.getElementById(greetings).textContent = "Salut" + user[0].name;
    }
  } else {
    console.log("Utilizator inexistent");
  }
}
