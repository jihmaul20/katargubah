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
  