const LAYANAN = [
  {
    id: 1,
    kategori: "Hardware",
    nama: "Penggantian LCD Laptop",
    harga: 850000,
    gambar: "gambar/LCD.jpg",
    ringkas: "Ganti panel LCD retak/bergaris dengan panel baru original.",
    deskripsi:
      "Layanan penggantian panel LCD untuk laptop yang retak, bergaris, atau blank. Kami menggunakan panel original / kompatibel dengan resolusi yang sama persis, dipasang oleh teknisi bersertifikat.",
    spesifikasi: [
      "Panel LCD original / kompatibel sesuai part number",
      "Pengecekan konektor fleksibel & inverter",
      "Kalibrasi warna setelah pemasangan",
      "Garansi pemasangan 30 hari",
    ],
    estimasi: "2 - 3 hari kerja",
    variantLabel: "Tipe Perangkat",
    variantOptions: ["Laptop Standar", "Laptop Gaming", "Ultrabook / 2-in-1"],
  },
  {
    id: 2,
    kategori: "Hardware",
    nama: "Servis & Ganti Keyboard",
    harga: 300000,
    gambar: "gambar/Keyboard.jpg",
    ringkas: "Perbaikan tombol macet, tidak terbaca, atau ganti unit baru.",
    deskripsi:
      "Mengatasi keyboard yang tombolnya macet, salah ketik, atau mati total akibat tumpahan cairan. Termasuk pembersihan dudukan tombol dan penggantian unit keyboard bila diperlukan.",
    spesifikasi: [
      "Pembongkaran & pembersihan dudukan tombol",
      "Penggantian membran / unit keyboard bila rusak",
      "Uji ketik seluruh tombol setelah servis",
      "Garansi servis 30 hari",
    ],
    estimasi: "1 - 2 hari kerja",
    variantLabel: "Tipe Perangkat",
    variantOptions: ["Laptop Standar", "Laptop Gaming", "Ultrabook / 2-in-1"],
  },
  {
    id: 3,
    kategori: "Hardware",
    nama: "Penggantian Baterai Original",
    harga: 450000,
    gambar: "gambar/Baterai.jpg",
    ringkas: "Baterai boros atau drop diganti unit baru bergaransi resmi.",
    deskripsi:
      "Baterai laptop yang cepat habis, tidak mengisi, atau menggembung sebaiknya segera diganti. Kami menyediakan baterai original dengan garansi resmi dari distributor.",
    spesifikasi: [
      "Baterai original sesuai tipe laptop",
      "Kalibrasi ulang indikator daya",
      "Pengecekan health battery pasca pemasangan",
      "Garansi resmi distributor 6 bulan",
    ],
    estimasi: "1 hari kerja",
    variantLabel: "Tipe Perangkat",
    variantOptions: ["Laptop Standar", "Laptop Gaming", "Ultrabook / 2-in-1"],
  },
  {
    id: 4,
    kategori: "Upgrade",
    nama: "Upgrade RAM / Memori",
    harga: 400000,
    gambar: "gambar/Ram.jpg",
    ringkas: "Tambah kapasitas RAM agar laptop tidak lag dan lebih responsif.",
    deskripsi:
      "Menambah atau mengganti modul RAM untuk meningkatkan performa multitasking. Kami cek kompatibilitas slot dan kecepatan memori sebelum pemasangan.",
    spesifikasi: [
      "Modul RAM baru sesuai slot (DDR3L/DDR4/DDR5)",
      "Uji stabilitas dengan stress test memori",
      "Pengecekan dual-channel jika tersedia 2 slot",
      "Garansi modul 1 tahun",
    ],
    estimasi: "Selesai di tempat, ± 1 jam",
    variantLabel: "Kapasitas RAM",
    variantOptions: ["8 GB", "16 GB", "32 GB"],
  },
  {
    id: 5,
    kategori: "Upgrade",
    nama: "Pemasangan & Kloning SSD",
    harga: 550000,
    gambar: "gambar/SSD.jpg",
    ringkas: "Migrasi dari HDD ke SSD lengkap dengan kloning data & sistem.",
    deskripsi:
      "Percepat waktu booting dan loading aplikasi dengan migrasi ke SSD. Seluruh data dan sistem operasi dikloning otomatis sehingga laptop bisa langsung dipakai tanpa install ulang.",
    spesifikasi: [
      "SSD baru sesuai kapasitas pilihan",
      "Kloning 1:1 sistem operasi & data",
      "Optimasi TRIM & AHCI mode",
      "Garansi SSD 3 tahun",
    ],
    estimasi: "1 hari kerja",
    variantLabel: "Kapasitas SSD",
    variantOptions: ["256 GB", "512 GB", "1 TB"],
  },
  {
    id: 6,
    kategori: "Maintenance",
    nama: "Cleaning & Ganti Pasta Thermal",
    harga: 150000,
    gambar: "gambar/Pasta.jpg",
    ringkas: "Atasi laptop panas & berisik dengan deep cleaning rutin.",
    deskripsi:
      "Layanan perawatan rutin untuk laptop/PC yang cepat panas dan bising. Debu dibersihkan hingga sela heatsink, pasta thermal prosesor diganti dengan pasta berkualitas tinggi.",
    spesifikasi: [
      "Pembongkaran & pembersihan total debu",
      "Pembersihan & pelumasan bearing kipas",
      "Penggantian thermal paste premium",
      "Laporan suhu sebelum & sesudah servis",
    ],
    estimasi: "Selesai di tempat, ± 2 jam",
    variantLabel: "Tipe Perangkat",
    variantOptions: ["Laptop Standar", "Laptop Gaming", "PC Desktop"],
  },
  {
    id: 7,
    kategori: "Software",
    nama: "Instalasi OS & Software Dasar",
    harga: 100000,
    gambar: "gambar/Inul.jpg",
    ringkas: "Install ulang sistem operasi lengkap dengan software dasar.",
    deskripsi:
      "Install ulang sistem operasi untuk laptop yang lambat, error, atau baru dibeli. Termasuk driver, antivirus, dan paket software dasar (browser, office, PDF reader).",
    spesifikasi: [
      "Backup data penting sebelum instalasi",
      "Instalasi driver lengkap sesuai perangkat",
      "Paket software dasar & aktivasi",
      "Pendampingan setting awal",
    ],
    estimasi: "Selesai di tempat, ± 3 jam",
    variantLabel: "Sistem Operasi",
    variantOptions: ["Windows 10", "Windows 11", "Ubuntu Linux"],
  },
  {
    id: 8,
    kategori: "Software",
    nama: "Recovery Data Harddisk/SSD Rusak",
    harga: 500000,
    gambar: "gambar/Data.jpg",
    ringkas: "Selamatkan file penting dari media penyimpanan yang bermasalah.",
    deskripsi:
      "Penyelamatan data dari harddisk atau SSD yang rusak, tidak terbaca, atau terformat tidak sengaja. Proses dilakukan di ruang khusus untuk menghindari kerusakan lebih lanjut.",
    spesifikasi: [
      "Diagnosa awal gratis, biaya menyesuaikan tingkat kerusakan",
      "Proses recovery dengan tools khusus data recovery",
      "Data dikembalikan dalam media terpisah",
      "Kerahasiaan data terjamin",
    ],
    estimasi: "3 - 5 hari kerja",
    variantLabel: "Tingkat Kerusakan",
    variantOptions: ["Ringan (terformat/terhapus)", "Sedang (bad sector)", "Berat (fisik/tidak terdeteksi)"],
  },
  {
    id: 9,
    kategori: "Hardware",
    nama: "Servis Motherboard Mati Total",
    harga: 750000,
    gambar: "gambar/Mobo.jpg",
    ringkas: "Diagnosa & perbaikan motherboard yang mati total / hang.",
    deskripsi:
      "Perbaikan motherboard laptop/PC yang mati total, hang di logo, atau mati sendiri. Diagnosa dilakukan menggunakan alat ukur khusus untuk menemukan titik kerusakan komponen.",
    spesifikasi: [
      "Diagnosa jalur & komponen dengan multimeter/oscilloscope",
      "Penggantian komponen yang rusak (IC, kapasitor, dsb.)",
      "Uji stress setelah perbaikan minimal 3 jam",
      "Garansi servis 30 hari",
    ],
    estimasi: "3 - 7 hari kerja",
    variantLabel: "Tipe Perangkat",
    variantOptions: ["Laptop Standar", "Laptop Gaming", "PC Desktop"],
  },
];

function formatRupiah(angka) {
  return "Rp " + Number(angka).toLocaleString("id-ID");
}

function cariLayananById(id) {
  return LAYANAN.find((item) => item.id === Number(id));
}
