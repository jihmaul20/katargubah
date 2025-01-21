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

document.addEventListener('DOMContentLoaded', function () {
    const evidenceInput = document.getElementById('evidence');

    evidenceInput.addEventListener('change', function () {
        const files = evidenceInput.files;
        const previewContainer = document.createElement('div');
        previewContainer.setAttribute('id', 'file-previews');
        document.getElementById('report-form').appendChild(previewContainer);

        // Clear existing previews
        previewContainer.innerHTML = '';

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileReader = new FileReader();

            fileReader.addEventListener('load', function (event) {
                const fileUrl = event.target.result;
                const filePreview = document.createElement('div');
                filePreview.classList.add('file-preview');

                // Preview for images
                if (file.type.startsWith('image/')) {
                    const img = document.createElement('img');
                    img.src = fileUrl;
                    img.style.width = '100px';
                    img.style.margin = '5px';
                    filePreview.appendChild(img);
                }

                // Preview for video and audio (only show file name)
                if (file.type.startsWith('video/') || file.type.startsWith('audio/')) {
                    const mediaInfo = document.createElement('p');
                    mediaInfo.textContent = file.name;
                    mediaInfo.style.margin = '5px';
                    filePreview.appendChild(mediaInfo);
                }

                previewContainer.appendChild(filePreview);
            });

            fileReader.readAsDataURL(file);
        }
    });
});
