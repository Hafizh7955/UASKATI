const gridProduk = document.getElementById("gridProduk");
const chipKategori = document.querySelectorAll("#filterKategori button");

function renderKatalog(kategori = "Semua") {
  const daftar =
    kategori === "Semua" ? LAYANAN : LAYANAN.filter((item) => item.kategori === kategori);

  if (daftar.length === 0) {
    gridProduk.innerHTML = `<p class="empty-state">Belum ada layanan pada kategori ini.</p>`;
    return;
  }

  gridProduk.innerHTML = daftar
    .map(
      (item) => `
    <article class="card-produk">
      <a class="thumb" href="detail.html?id=${item.id}" title="Lihat detail ${item.nama}">
        <img src="${item.gambar}" alt="${item.nama}" loading="lazy" />
      </a>
      <div class="body">
        <span class="kategori-tag">${item.kategori}</span>
        <h3>${item.nama}</h3>
        <p class="ringkas">${item.ringkas}</p>
        <span class="harga">${formatRupiah(item.harga)}</span>
        <a href="detail.html?id=${item.id}" class="btn btn-primary btn-block" data-produk-id="${item.id}">
          Pesan Sekarang
        </a>
      </div>
    </article>
  `
    )
    .join("");
}

// Simpan id yang diklik supaya detail.html tahu produk mana yang dibuka
gridProduk.addEventListener("click", (e) => {
  const tombol = e.target.closest("[data-produk-id]");
  const thumb = e.target.closest(".thumb");
  const id = (tombol && tombol.dataset.produkId) || (thumb && thumb.closest("article").querySelector("[data-produk-id]").dataset.produkId);
  if (id) {
    sessionStorage.setItem("indofix_produk_terakhir", id);
  }
});

chipKategori.forEach((chip) => {
  chip.addEventListener("click", () => {
    chipKategori.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    renderKatalog(chip.dataset.kategori);
  });
});

renderKatalog();
