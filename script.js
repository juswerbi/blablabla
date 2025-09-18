document.addEventListener('DOMContentLoaded', () => {
    const parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        
        parallaxSections.forEach(section => {
            let sectionTop = section.offsetTop;
            
            // Tylko na desktopie, aby uniknąć problemów na mobile
            if (window.innerWidth > 768) {
                // Oblicza nową pozycję tła dla efektu paralaksy
                section.style.backgroundPositionY = (sectionTop - scrollPosition) * 0.4 + 'px';
            }
        });
    });
});
