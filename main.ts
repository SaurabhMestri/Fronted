// document.addEventListener('DOMContentLoaded', () => {
//     // Get the login button, modal, and close button elements
//     const loginBtn = document.getElementById('loginBtn') as HTMLButtonElement | null;
//     const loginModal = document.getElementById('loginModal') as HTMLDivElement | null;
//     const closeBtn = document.querySelector('.close') as HTMLSpanElement | null;

//     // Check if elements exist before adding event listeners
//     if (loginBtn && loginModal && closeBtn) {
//         // Open the modal
//         loginBtn.onclick = () => {
//             loginModal.style.display = 'block';
//         };

//         // Close the modal
//         closeBtn.onclick = () => {
//             loginModal.style.display = 'none';
//         };

//         // Close the modal if user clicks outside of it
//         window.onclick = (event: MouseEvent) => {
//             const target = event.target as Node;
//             if (loginModal && target === loginModal) {
//                 loginModal.style.display = 'none';
//             }
//         };
//     }
// });
