const invoiceKonten = document.getElementById("invoiceKonten");

function ambilInvoice() {
  try {
    return JSON.parse(sessionStorage.getItem("indofix_invoice"));
  } catch (e) {
    return null;
  }
}

function formatTanggal(iso) {
  const d = new Date(iso);
  return d.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const invoice = ambilInvoice();

if (!invoice) {
  invoiceKonten.innerHTML = `
    <div class="empty-state">
      Belum ada transaksi untuk ditampilkan.<br />
      <a href="produk.html">Mulai pesan layanan</a> dari katalog.
    </div>`;
} else {
  const barisItem = invoice.items
    .map(
      (item) => `
    <div class="receipt-line">
      <div>
        <div class="l-name">${item.nama} &times;${item.qty}</div>
        <span class="l-variant">${item.variantLabel}: ${item.variantValue}</span>
      </div>
      <div>${formatRupiah(item.subtotal)}</div>
    </div>
  `
    )
    .join("");

  invoiceKonten.innerHTML = `
    <div class="receipt">
      <div class="receipt-head">
        <span class="status">Reservasi Diterima</span>
        <h2>${invoice.nomor}</h2>
        <small>${formatTanggal(invoice.tanggal)}</small>
      </div>
      <div class="receipt-body">
        <div class="row"><span>Pelanggan</span><strong>${invoice.pelanggan.nama}</strong></div>
        <div class="row"><span>No. WhatsApp</span><strong>${invoice.pelanggan.hp}</strong></div>
        <div class="row"><span>Email</span><strong>${invoice.pelanggan.email}</strong></div>
        <div class="row"><span>Metode Serah Unit</span><strong>${invoice.pelanggan.alamat}</strong></div>

        <hr class="receipt-divider" />

        ${barisItem}

        <hr class="receipt-divider" />

        <div class="row"><span>Metode Pembayaran</span><strong>${invoice.pembayaran.metode}</strong></div>
        <div class="row" style="font-size:0.76rem;"><span>${invoice.pembayaran.detail}</span><span></span></div>

        <div class="receipt-total"><span>Total</span><span>${formatRupiah(invoice.total)}</span></div>
      </div>
      <div class="receipt-foot">
        Simpan nomor invoice ini sebagai bukti reservasi.<br />
        Teknisi kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal.
      </div>
    </div>

    <div class="invoice-actions no-print">
      <a href="produk.html" class="btn btn-primary btn-block" id="btnTransaksiBaru">Transaksi Baru</a>
    </div>
  `;
}
