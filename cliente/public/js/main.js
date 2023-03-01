const params = new URLSearchParams(window.location.search);
const errorMsg = params.get('error');

if (errorMsg) {
  const msgC = document.getElementById("msg");
  msgC.textContent = errorMsg;
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // evita que el formulario se envíe automáticamente
  const formData = new FormData(form);
  const data = JSON.stringify(Object.fromEntries(formData.entries())); // convierte los datos del formulario en un objeto JSON
      
  fetch(url + 'users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  })
  .then(response => response.json())
  .then(data => {
    if (data.status.status === "true") {
      const user = data.status.username;
      localStorage.setItem("user", user);
      window.location.replace(roomsUrl);
    } else {
      const msgE = document.getElementById("msg");
      msgE.textContent = data.status.message;
    }
  })
  .catch(error => {
    console.error(error);
  });
});