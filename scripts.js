
document.getElementById('contact-us-button').addEventListener('click', function() {
    document.getElementById('contact-form-popup').style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('contact-form-popup')) {
        document.getElementById('contact-form-popup').style.display = 'none';
    }
});

  function changeProjectImage(imageSrc) {
    document.getElementById('project-image').src = imageSrc;
  }

function highlightImage(index) {
    const dots = document.querySelectorAll('.dot');
    const imageContainers = document.querySelectorAll('.image-container');

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function changeImage(imageId) {
    const image = document.getElementById('main-image');
    if (imageId === 'image1') {
        image.src = './img/img1.jpeg'; 
        image.alt = 'Image 1';
    } else if (imageId === 'image2') {
        image.src = './img/img2.jpeg'; 
        image.alt = 'Image 2';
    } else if (imageId === 'image3') {
        image.src = './img/img3.jpeg'; 
        image.alt = 'Image 3';
    }
}


  