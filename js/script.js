const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


const nama = "User";
document.getElementById("welcome-text").textContent = `${nama}!`;

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const kelamin = document.querySelector('input[name="kelamin"]:checked')?.value || "-";
  const pesan = document.getElementById("pesan").value;

  document.getElementById("outTime").textContent = new Date().toLocaleString();
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = 'Birth: ' + tanggal;
  document.getElementById("outKelamin").textContent = 'Gender: '+kelamin;
  document.getElementById("outPesan").innerHTML = 'Commenting:<br>'+ pesan;
});

