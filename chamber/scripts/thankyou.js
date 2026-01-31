const params = new URLSearchParams(window.location.search);
const firstName = params.get('firstName');
const lastName = params.get('lastName');
const orgTitle = params.get('orgTitle');
const email = params.get('email');
const phone = params.get('phone');
const business = params.get('business');
const membership = params.get('membership');
const description = params.get('description');

const messageEl = document.getElementById('thankyouMessage');
messageEl.innerHTML = `
  Hola ${firstName} ${lastName}!<br>
  Gracias por registrarte con ${business}.<br>
  Cargo: ${orgTitle}<br>
  Membresía: ${membership}<br>
  Teléfono: ${phone}<br>
  Email: ${email}<br>
  Descripción: ${description}
`;

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
