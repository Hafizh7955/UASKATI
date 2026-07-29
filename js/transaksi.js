const ringkasanIsi = document.getElementById("ringkasanIsi");
const formTransaksi = document.getElementById("formTransaksi");
const btnKirim = document.getElementById("btnKirim");

function ambilCart() {
  try {
    return JSON.parse(sessionStorage.getItem("indofix_cart")) || [];
  } catch (e) {
    return [];
  }
}

function renderRingkasan() {
  const cart = ambilCart();

  if (cart.length === 0) {
    ringkasanIsi.innerHTML = `
      <p class="empty-state">
        Belum ada layanan dipilih.<br />
        <a href="produk.html">Pilih layanan dari katalog</a> terlebih dahulu.
      </p>`;
    btnKirim.disabled = true;
    return;
  }

  const total = cart.reduce((jumlah, item) => jumlah + item.subtotal, 0);

  ringkasanIsi.innerHTML =
    cart
      .map(
        (item) => `
    <div class="summary-item">
      <img src="${item.gambar}" alt="${item.nama}" />
      <div class="info">
        <h4>${item.nama}</h4>
        <span class="variant">${item.variantLabel}: ${item.variantValue} &middot; Qty ${item.qty}</span>
      </div>
      <div class="price">${formatRupiah(item.subtotal)}</div>
    </div>
  `
      )
      .join("") +
    `<div class="summary-total"><span>Total</span><span>${formatRupiah(total)}</span></div>
     <a href="produk.html" class="btn btn-outline btn-block btn-sm">Tambah Layanan Lain</a>`;

  btnKirim.disabled = false;
}

renderRingkasan();

/* ---------- Metode pembayaran ---------- */
const radioMetode = document.querySelectorAll('input[name="pembayaran"]');
const detailBox = {
  "Transfer Bank": document.getElementById("detailTransferBank"),
  COD: document.getElementById("detailCOD"),
  "E-Wallet": document.getElementById("detailEwallet"),
};

radioMetode.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.getElementById("errorPembayaran").style.display = "none";
    Object.values(detailBox).forEach((box) => box.classList.remove("show"));
    if (detailBox[radio.value]) detailBox[radio.value].classList.add("show");
  });
});

/* ---------- Validasi ---------- */
function setError(fieldId, tampilkan) {
  const field = document.getElementById(fieldId);
  field.classList.toggle("has-error", tampilkan);
}

function validasiForm() {
  let valid = true;

  const nama = document.getElementById("nama").value.trim();
  if (nama.length < 3) {
    setError("fieldNama", true);
    valid = false;
  } else {
    setError("fieldNama", false);
  }

  const hp = document.getElementById("hp").value.trim();
  const hpValid = /^[0-9]{10,14}$/.test(hp);
  if (!hpValid) {
    setError("fieldHp", true);
    valid = false;
  } else {
    setError("fieldHp", false);
  }

  const email = document.getElementById("email").value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    setError("fieldEmail", true);
    valid = false;
  } else {
    setError("fieldEmail", false);
  }

  const metodeDipilih = document.querySelector('input[name="pembayaran"]:checked');
  const errorPembayaran = document.getElementById("errorPembayaran");
  if (!metodeDipilih) {
    errorPembayaran.style.display = "block";
    valid = false;
  } else {
    errorPembayaran.style.display = "none";
  }

  const setuju = document.getElementById("setuju").checked;
  const errorSetuju = document.getElementById("errorSetuju");
  if (!setuju) {
    errorSetuju.style.display = "block";
    valid = false;
  } else {
    errorSetuju.style.display = "none";
  }

  return valid;
}

function buatNomorInvoice() {
  const sekarang = new Date();
  const tanggal = sekarang.toISOString().slice(0, 10).replace(/-/g, "");
  const acak = Math.floor(1000 + Math.random() * 9000);
  return `INV-${tanggal}-${acak}`;
}

formTransaksi.addEventListener("submit", (e) => {
  e.preventDefault();

  const cart = ambilCart();
  if (cart.length === 0) {
    tampilkanToast("Pilih layanan terlebih dahulu dari katalog.");
    return;
  }

  if (!validasiForm()) {
    tampilkanToast("Periksa kembali data yang belum lengkap.");
    return;
  }

  const metode = document.querySelector('input[name="pembayaran"]:checked').value;
  let detailMetode = "";
  if (metode === "E-Wallet") {
    detailMetode = document.getElementById("pilihanEwallet").value;
  } else if (metode === "Transfer Bank") {
    detailMetode = "BCA 1234-5678-90 a.n. INDOFIX Service Center";
  } else {
    detailMetode = "Bayar tunai / QRIS saat unit selesai";
  }

  const total = cart.reduce((jumlah, item) => jumlah + item.subtotal, 0);

  const invoice = {
    nomor: buatNomorInvoice(),
    tanggal: new Date().toISOString(),
    pelanggan: {
      nama: document.getElementById("nama").value.trim(),
      hp: document.getElementById("hp").value.trim(),
      email: document.getElementById("email").value.trim(),
      alamat: document.getElementById("alamat").value,
      keluhan: document.getElementById("keluhan").value.trim(),
    },
    pembayaran: { metode, detail: detailMetode },
    items: cart,
    total,
  };

  sessionStorage.setItem("indofix_invoice", JSON.stringify(invoice));
  sessionStorage.removeItem("indofix_cart");
  window.location.href = "invoice.html";
});
