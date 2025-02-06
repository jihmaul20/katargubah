// Ambil elemen background
const background = document.getElementById('background-animation');

// Fungsi untuk membuat partikel
function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Posisi awal partikel (acak)
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * -50 + 'px'; // Mulai dari luar layar atas

    // Ukuran acak
    const size = Math.random() * 10 + 5;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    // Tambahkan partikel ke background
    background.appendChild(particle);

    // Hapus partikel setelah selesai animasi
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Buat partikel secara berkala
setInterval(createParticle, 300); // Setiap 300ms



// Ambil semua tombol dengan class 'more-btn'
const moreButtons = document.querySelectorAll('.more-btn');

// Tambahkan event listener untuk setiap tombol
moreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Tutup semua social media yang lain
        document.querySelectorAll('.social-media').forEach(media => {
            if (media !== button.nextElementSibling) {
                media.classList.remove('show');
            }
        });

        // Toggle social media untuk tombol yang diklik
        const socialMedia = button.nextElementSibling;
        socialMedia.classList.toggle('show');
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    // Ambil hash dari URL
    const hash = window.location.hash.substring(1); // Menghapus tanda #

    if (hash) {
      // Cari elemen dengan ID yang sesuai
      const targetCard = document.getElementById(hash);

      if (targetCard) {
        // Pastikan elemen terlihat (sesuaikan logika jika elemen tersembunyi)
        targetCard.style.display = "block";

        // Misalnya, tambahkan class 'active' untuk animasi atau efek lainnya
        targetCard.classList.add("active");
      }
    }
});


///////////////////////////////////
// Ambil elemen modal dan kontennya
const photoModal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Tambahkan event listener untuk semua gambar anggota
document.querySelectorAll('.person img').forEach(img => {
    img.addEventListener('click', () => {
        // Tampilkan modal dan ganti gambar di modal
        photoModal.style.display = 'block';
        modalImage.src = img.src; // Ambil sumber gambar yang diklik
    });
});

// Tutup modal saat tombol "X" diklik
closeModal.addEventListener('click', () => {
    photoModal.style.display = 'none';
});

// Tutup modal saat area luar gambar diklik
photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.style.display = 'none';
    }
});
