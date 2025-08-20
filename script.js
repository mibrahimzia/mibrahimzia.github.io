        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('.page-section');

            // Function to show a specific page section and hide others
            const showPage = (pageId) => {
                sections.forEach(section => {
                    if (section.id === pageId) {
                        section.style.display = 'flex';
                        setTimeout(() => section.classList.add('active'), 100); // Add active class after a short delay for animation
                    } else {
                        section.style.display = 'none';
                        section.classList.remove('active');
                    }
                });
            };

            // Event listener for navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const targetId = link.getAttribute('href').substring(1); // Get section ID from href
                    showPage(targetId);

                    // If a main page link is clicked, scroll to the section
                    if (link.getAttribute('data-page') === 'main') {
                        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Handle the initial page view based on the URL hash
            const initialHash = window.location.hash.substring(1);
            if (initialHash && document.getElementById(initialHash)) {
                showPage(initialHash);
            } else {
                showPage('hero-section');
            }
        });
