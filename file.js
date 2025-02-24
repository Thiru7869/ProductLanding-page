document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/78846f0bcceb09fdba18cfedd75aa635.jpg?alt=media&token=48c9b754-dcf6-4f3e-856a-3d5282d830fc",        
        "https://firebasestorage.googleapis.com/v0/b/portfolio-92a1d.appspot.com/o/8fb715df1e3d7c4bc5df86a101a894a7.jpg?alt=media&token=81fcf037-3ae8-49be-8655-d160aefcd667"
    ];

    let index = 0;
    const productContainer = document.getElementById("product-container");

    function changeBackground() {
        if (images.length > 0) {
            productContainer.style.backgroundImage = `url('${images[index]}')`;
            index = (index + 1) % images.length; // Ensures cycling remains within bounds
        }
    }

    changeBackground(); // Set initial image
    setInterval(changeBackground, 4000);
});
