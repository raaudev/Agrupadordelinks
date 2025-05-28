/*
   ========================================
   RS DEVELOPER - Links Agrupador Script
   ========================================
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.classList.add('hide');
        }, 1000);
    });

    // Dark/Light theme toggle
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeSwitch.querySelector('i').classList.remove('fa-moon');
        themeSwitch.querySelector('i').classList.add('fa-sun');
    }
    
    themeSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        const icon = themeSwitch.querySelector('i');
        
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Link click animation
    const linkItems = document.querySelectorAll('.link-item');
    
    linkItems.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
