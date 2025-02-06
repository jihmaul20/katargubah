document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-filter");
  
        // Hapus kelas aktif dari semua tombol
        filterButtons.forEach(btn => btn.classList.remove("active"));
  
        // Tambahkan kelas aktif ke tombol yang diklik
        button.classList.add("active");
  
        // Tampilkan/sembunyikan item berdasarkan kategori
        galleryItems.forEach(item => {
          if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });
  
// Ambil elemen modal dan kontennya
document.addEventListener('DOMContentLoaded', function() {
  // Ambil semua gambar dan video yang bisa diklik
  var mediaItems = document.querySelectorAll('.gallery-item img, .gallery-item video');
  var modal = document.getElementById('imageModal');
  var modalContent = document.getElementById('modalImage');
  var captionText = document.getElementById('caption');
  var span = document.getElementsByClassName('close')[0];

  // Loop melalui semua media dan tambahkan event listener
  mediaItems.forEach(function(media) {
      media.onclick = function() {
          modal.style.display = 'block';
          if (media.tagName === 'IMG') {
              // Jika media adalah gambar
              modalContent.src = media.src;
              modalContent.alt = media.alt;
              captionText.innerHTML = media.alt;
              modalContent.tagName = 'IMG'; // Pastikan tagName diatur sebagai IMG
          } else if (media.tagName === 'VIDEO') {
              // Jika media adalah video
              modalContent.src = media.src;
              modalContent.controls = true; // Aktifkan kontrol video
              captionText.innerHTML = media.alt;
              modalContent.tagName = 'VIDEO'; // Pastikan tagName diatur sebagai VIDEO
          }
      }
  });

  // Ketika tombol close diklik, tutup modal
  span.onclick = function() {
      modal.style.display = 'none';
      if (modalContent.tagName === 'VIDEO') {
          modalContent.pause(); // Hentikan video saat modal ditutup
          modalContent.controls = false; // Sembunyikan kontrol video
      }
  }

  // Ketika pengguna mengklik di luar gambar, tutup modal
  modal.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          if (modalContent.tagName === 'VIDEO') {
              modalContent.pause(); // Hentikan video saat modal ditutup
              modalContent.controls = false; // Sembunyikan kontrol video
          }
      }
  }
});