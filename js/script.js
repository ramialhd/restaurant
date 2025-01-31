document.getElementById('animateBtn').addEventListener('click', () => {
    const img = document.querySelector('img');
    img.style.transform = 'translateY(0)';
    img.style.opacity = '1';
  });
  const pastaImage = document.getElementById("pasta");

    const hoverImageSrc = "images/laradrink2.jpeg";
    const originalImageSrc = "images/pasta.jpg" ;

    pastaImage.addEventListener("mouseover", () => {
      pastaImage.style.opacity = 0; 
      setTimeout(() => {
        pastaImage.src = hoverImageSrc; 
        pastaImage.style.opacity = 1;
      }, 250);
    });

    pastaImage.addEventListener("mouseout", () => {
      pastaImage.style.opacity = 0; 
      setTimeout(() => {
        pastaImage.src = originalImageSrc; 
        pastaImage.style.opacity = 1; 
      }, 250);
    });
    function myfunction() {
      // Hide the form
      document.getElementById("reservationForm").style.display = "none";
      
      // Show the thank-you message
      document.getElementById("thankYouMessage").style.display = "block";
  }