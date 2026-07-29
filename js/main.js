(function tandaiMenuAktif() {
  const halamanIni = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav.main-nav a").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === halamanIni) {
      link.classList.add("active");
    }
  });
})();

// Tahun berjalan otomatis di footer
document.querySelectorAll(".tahun-berjalan").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Toast notifikasi kecil, dipakai di beberapa halaman
function tampilkanToast(pesan, durasi = 2400) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = pesan;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove("show"), durasi);
}
