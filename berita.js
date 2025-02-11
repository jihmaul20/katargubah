document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuButton = document.querySelector(".menu-button");
    const mainMenu = document.querySelector(".main-menu");

    // Fungsi untuk mengubah header saat di-scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });

    // Fungsi untuk menampilkan menu di HP
    menuButton.addEventListener("click", function () {
        mainMenu.classList.toggle("active");
    });

    // Tutup menu saat klik di luar
    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !mainMenu.contains(event.target)) {
            mainMenu.classList.remove("active");
        }
    });

    // Jalankan fungsi untuk menampilkan berita utama dan mengurutkan berita
    tampilkanBeritaUtama();
    sortBerita();
});


// Fungsi untuk menampilkan berita utama
function tampilkanBeritaUtama() {
    const semuaBerita = document.querySelectorAll('.berita-item');
    let beritaTerbaru = null;

    // Cari berita dengan tanggal terbaru
    semuaBerita.forEach(berita => {
        const tanggalBerita = new Date(berita.getAttribute('data-date'));
        if (!beritaTerbaru || tanggalBerita > new Date(beritaTerbaru.getAttribute('data-date'))) {
            beritaTerbaru = berita;
        }
    });
}

// Fungsi untuk mengurutkan berita berdasarkan tanggal
function sortBerita() {
    const container = document.querySelector('.daftar-berita');
    const beritaItems = Array.from(document.querySelectorAll('.berita-item'));

    // Urutkan dari tanggal terbaru ke terlama (Z ke A)
    beritaItems.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; // Urutkan dari yang terbaru
    });

    // Hapus semua berita dari container
    container.innerHTML = '';

    // Tambahkan berita yang sudah diurutkan ke container
    beritaItems.forEach(item => {
        container.appendChild(item);
    });
}

// Fungsi untuk toggle teks lengkap
function toggleFullText(button) {
    const fullText = button.previousElementSibling;
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        button.textContent = "Sembunyikan";
    } else {
        fullText.style.display = "none";
        button.textContent = "Baca Selengkapnya";
    }
    // Mencegah halaman tergeser ke atas atau ke bawah
    event.preventDefault();
}

/* Butuh Bantuan */
document.addEventListener('DOMContentLoaded', () => {
    const helpButton = document.getElementById('help-button');
    const helpModal = document.getElementById('help-modal');
    const closeModal = document.querySelector('.close-modal');

    // Tampilkan modal saat tombol "Butuh Bantuan" diklik
    helpButton.addEventListener('click', () => {
        helpModal.style.display = 'block';
    });

    // Sembunyikan modal saat tombol close diklik
    closeModal.addEventListener('click', () => {
        helpModal.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            helpModal.style.display = 'none';
            helpModal.style.animation = ''; // Reset animasi
        }, 300);
    });

    // Sembunyikan modal saat mengklik di luar modal
    window.addEventListener('click', (event) => {
        if (event.target === helpModal) {
            helpModal.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                helpModal.style.display = 'none';
                helpModal.style.animation = ''; // Reset animasi
            }, 300);
        }
    });
});
