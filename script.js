document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent the click from propagating to document
      menu.classList.toggle('show');
    });
  
    document.addEventListener('click', function () {
      menu.classList.remove('show'); // Close menu if clicked outside
    });
  
    menu.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent closing menu when clicking inside
    });
});  

document.addEventListener('DOMContentLoaded', function () {
    const contactTypeSelect = document.getElementById('contact-type');
    const emailContainer = document.getElementById('email-container');
    const kontakContainer = document.getElementById('nomor-container');

    contactTypeSelect.addEventListener('change', function () {
        const selectedValue = contactTypeSelect.value;

        if (selectedValue === 'email') {
            emailContainer.style.display = 'block';
            kontakContainer.style.display = 'none';
        } else if (selectedValue === 'nomor') {
            emailContainer.style.display = 'none';
            kontakContainer.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fileContainer = document.getElementById("file-upload-container");
    const fileList = document.getElementById("file-list");
    const defaultFileInput = document.getElementById("evidence");

    // Fungsi untuk menambahkan file ke daftar dan menampilkan tombol hapus
    const handleFileSelect = (fileInput) => {
        Array.from(fileInput.files).forEach((file) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<span>${file.name}</span>`;

            // Tombol hapus file
            const removeButton = document.createElement("button");
            removeButton.textContent = "Hapus";
            removeButton.addEventListener("click", function () {
                fileList.removeChild(listItem); // Hapus file dari daftar
                fileInput.value = ""; // Kosongkan input file untuk memastikan bisa dipakai ulang
                fileInput.style.display = "none"; // Sembunyikan input file
            });

            listItem.appendChild(removeButton);
            fileList.appendChild(listItem);
        });
    };

    // Tangkap perubahan pada input file default
    defaultFileInput.addEventListener("change", function () {
        handleFileSelect(defaultFileInput);
    });

    // Fungsi untuk menambahkan input file baru
    const addFileInput = () => {
        const newFileInput = document.createElement("input");
        newFileInput.type = "file";
        newFileInput.name = "evidence[]";
        newFileInput.accept = "image/*,video/*,audio/*";

        // Tangkap perubahan pada input baru
        newFileInput.addEventListener("change", function () {
            handleFileSelect(newFileInput);
        });

        fileContainer.appendChild(newFileInput); // Tambahkan input baru ke container
        newFileInput.click(); // Trigger klik untuk memilih file langsung
    };

    // Tambahkan event listener pada tombol atau elemen pemicu lain (opsional)
});
