function showImage(imageSrc) {
            const images = document.querySelectorAll('.cats');
            images.forEach(image => {
                if (image.src.includes(imageSrc)) {
                    image.style.visibility = 'visible';
                    image.style.opacity = '1';
                } else {
                    image.style.visibility = 'hidden';
                }
            });
        }
		function resetPage() {
            location.reload(); // Reloads the page
        }