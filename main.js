document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeButton = document.querySelector('.close-button');


    hamburger.addEventListener('click', function () {
        overlayMenu.style.display = 'block';
       
        
    });

    closeButton.addEventListener('click', function () {
        overlayMenu.style.display = 'none';
    });

    // Optional: Hide the overlay if the user clicks outside of it
    overlayMenu.addEventListener('click', function (event) {
        if (event.target === overlayMenu) {
            overlayMenu.style.display = 'none';
        }
    });
});
