document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Sidebar toggle functionality
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('sidebar-active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close sidebar on mobile after clicking a link
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mainContent.classList.remove('sidebar-active');
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        contactForm.reset();
    });

    // Cambiar color de fondo de la barra de progreso al pasar el ratón
    document.querySelectorAll('.progress-bar').forEach(bar => {
        bar.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'var(--accent-color)';
        });
        bar.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'var(--secondary-color)';
        });
    });

    // Añadir efecto de zoom a las tarjetas de proyectos
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

