// Ambil semua tombol dengan class 'more-btn'
const moreButtons = document.querySelectorAll('.more-btn');

// Tambahkan event listener untuk setiap tombol
moreButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleSocialMedia(button);
    });
});

// Fungsi untuk toggle elemen media sosial
function toggleSocialMedia(button) {
    const socialMedia = button.nextElementSibling; // Ambil elemen setelah tombol
    if (socialMedia) { // Pastikan elemen berikutnya ada
        socialMedia.classList.toggle('show'); // Tambah/hapus class 'show'

        // Ubah teks tombol berdasarkan kondisi
        button.textContent = socialMedia.classList.contains('show') ? 'Tutup' : 'Selengkapnya';
    } else {
        console.error('Elemen media sosial tidak ditemukan untuk tombol ini:', button);
    }
}

// Ambil semua header section
const sectionHeaders = document.querySelectorAll('.section-header');

// Tambahkan event listener untuk setiap header
sectionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling; // Ambil konten berikutnya (team-content)
        content.classList.toggle('active'); // Toggle class 'active'

        // Jika ingin menutup section lain saat membuka satu section
        sectionHeaders.forEach(h => {
            if (h !== header) {
                h.nextElementSibling.classList.remove('active');
            }
        });
    });
});

// Ambil semua header seksi
const seksiHeaders = document.querySelectorAll('.seksi-header');

// Tambahkan event listener untuk setiap header
seksiHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const teamContent = header.nextElementSibling; // Ambil konten berikutnya (team-content)

        // Toggle class 'active' pada konten
        if (teamContent.classList.contains('active')) {
            teamContent.style.maxHeight = null;
            teamContent.classList.remove('active');
        } else {
            teamContent.style.maxHeight = teamContent.scrollHeight + "px"; // Set tinggi dinamis
            teamContent.classList.add('active');
        }

        // Menutup seksi lain (opsional)
        seksiHeaders.forEach(h => {
            if (h !== header) {
                const otherContent = h.nextElementSibling;
                otherContent.style.maxHeight = null;
                otherContent.classList.remove('active');
            }
        });
    });
});
