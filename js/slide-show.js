let slideIndex = 0;
showSlides();

function showSlides(){
    var slides = document.getElementsByClassName("sl-item"),
        slideBox = document.querySelector(".side-box");
    for (let i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains("slide") == false){
            slides[i].classList.toggle("slide");
            // slideBox.removeChild(slides[i]);
        }
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].classList.remove("slide");
    // slideBox.appendChild(slides[slideIndex-1]);
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}