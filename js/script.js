 const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    // Hero: ganti nama pake JavaScript
    const nama = "User"; // <-- lo bisa ganti ini dengan input/user login
    document.getElementById("welcome-text").textContent = `Halo, ${nama}!`;