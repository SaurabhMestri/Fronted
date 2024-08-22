
// const gallery = document.getElementById("gallery");
// const prevButton = document.getElementById("prev-button")
// const nextButton = document.getElementById("next-button")
 

// const images = ["./public/images/fruite-item-1.jpg","./public/images/fruite-item-1.jpg"]
// let currentIndex = 0

// prevButton.addEventListener("click",() =>{
//     currentIndex = (currentIndex + 1 +images.length) % images.length;
//     updateImage();

// });

// nextButton.addEventListener("click",() =>{
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();

// });

// function updateImage() {
//     const Image = gallery.querySelector("#current-image")
//     Image.classList.add("fade-out")
//     setTimeout(() => {
//         Image.src = images[currentIndex]
//         Image.alt = images[currentIndex]
//         Image.classList.remove("fade-out")

//     },500)
// }