function ambilIdDariUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || sessionStorage.getItem("indofix_produk_terakhir") || "1";
}

const layanan = cariLayananById(ambilIdDariUrl());
const wadah = document.getElementById("detailKonten");

if (!layanan) {
  wadah.innerHTML = `<p class="empty-state">Layanan tidak ditemukan. <a href="produk.html">Kembali ke katalog.</a></p>`;
} else {
  document.title = `${layanan.nama} — INDOFIX Service Center`;
  sessionStorage.setItem("indofix_produk_terakhir", layanan.id);

  const opsiVarian = layanan.variantOptions
    .map((opsi) => `<option value="${opsi}">${opsi}</option>`)
    .join("");

  wadah.innerHTML = `
    <div class="detail-gambar">
      <img src="${layanan.gambar}" alt="${layanan.nama}" />
    </div>
    <div class="detail-info">
      <p style="color:#666; margin-bottom:4px;">Kategori: ${layanan.kategori}</p>
      <h1>${layanan.nama}</h1>
      <div class="detail-harga" id="hargaSatuan" data-harga="${layanan.harga}">${formatRupiah(layanan.harga)}</div>
      <p>Estimasi pengerjaan: <b>${layanan.estimasi}</b> &bull; Garansi: <b>30 hari</b></p>
      <p>${layanan.deskripsi}</p>

      <h3 style="font-size:1rem; margin-top:20px;">Spesifikasi Pengerjaan</h3>
      <ul class="spesifikasi-list">
        ${layanan.spesifikasi.map((s) => `<li>${s}</li>`).join("")}
      </ul>

      <div class="order-box">
        <div class="field">
          <label for="variantSelect">${layanan.variantLabel}</label>
          <select id="variantSelect">${opsiVarian}</select>
        </div>

        <div class="field">
          <label for="qtyInput">Jumlah Unit / Perangkat</label>
          <div class="qty-row">
            <button type="button" id="qtyMinus" aria-label="Kurangi jumlah">−</button>
            <input type="number" id="qtyInput" value="1" min="1" max="5" />
            <button type="button" id="qtyPlus" aria-label="Tambah jumlah">+</button>
          </div>
        </div>

        <div class="subtotal-row">
          <span>Subtotal</span>
          <span id="subtotalLabel">${formatRupiah(layanan.harga)}</span>
        </div>

        <button type="button" id="btnLanjut" class="btn btn-amber btn-block">
          Lanjut ke Transaksi
        </button>
      </div>
    </div>
  `;

  const qtyInput = document.getElementById("qtyInput");
  const subtotalLabel = document.getElementById("subtotalLabel");

  function perbaruiSubtotal() {
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    if (qty > 5) qty = 5;
    qtyInput.value = qty;
    subtotalLabel.textContent = formatRupiah(layanan.harga * qty);
  }

  document.getElementById("qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
    perbaruiSubtotal();
  });

  document.getElementById("qtyPlus").addEventListener("click", () => {
    qtyInput.value = Math.min(5, parseInt(qtyInput.value, 10) + 1);
    perbaruiSubtotal();
  });

  qtyInput.addEventListener("input", perbaruiSubtotal);

  document.getElementById("btnLanjut").addEventListener("click", () => {
    const qty = parseInt(qtyInput.value, 10) || 1;
    const varianDipilih = document.getElementById("variantSelect").value;

    const item = {
      id: layanan.id,
      nama: layanan.nama,
      gambar: layanan.gambar,
      harga: layanan.harga,
      variantLabel: layanan.variantLabel,
      variantValue: varianDipilih,
      qty: qty,
      subtotal: layanan.harga * qty,
    };

    sessionStorage.setItem("indofix_cart", JSON.stringify([item]));
    window.location.href = "transaksi.html";
  });
}
