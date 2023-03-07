import {url, admin} from '../config/config.js'

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // evita que el formulario se envíe automáticamente
  const formData = new FormData(form);
  const data = JSON.stringify(Object.fromEntries(formData.entries())); // convierte los datos del formulario en un objeto JSON
      
  fetch(url + 'signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  })
  .then(response => response.json())
  .then(data => {
    
    if (data.status.status === "true") {
      const user = data.status.username;
      localStorage.setItem("user", user);
      localStorage.setItem("token", data.status.token)
      window.location.replace(admin);
    } else {
      const msgE = document.getElementById("msg");
      msgE.textContent = data.status.message;
    }
  })
  .catch(error => {
    const msgE = document.getElementById("msg");
    msgE.textContent = error;
  });
});