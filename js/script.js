const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function setWelcomeText(nama) {
    document.getElementById("welcome-text").textContent = `${nama}!`;
  }

  window.onload = function () {
    let nama = localStorage.getItem("namaUser");

    if (!nama) {
      nama = prompt("Enter your name here:");
      if (nama) {
        localStorage.setItem("namaUser", nama);
      } else {
        nama = "Guest";
      }
    }

    setWelcomeText(nama);
  };

  document.getElementById("resetLink").addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("namaUser");

    const namaBaru = prompt("Enter your name here:");
    if (namaBaru) {
      localStorage.setItem("namaUser", namaBaru);
      setWelcomeText(namaBaru);
    } else {
      setWelcomeText("Guest");
    }
  });

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
  document.getElementById("outKelamin").textContent = 'Gender: ' + kelamin;
  document.getElementById("outPesan").innerHTML = 'Commenting:<br>' + pesan;
});

