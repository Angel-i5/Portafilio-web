document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded and scripts are running.');

    const cards = document.querySelectorAll('.pricing-card');

    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice()) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5 degrees
                const rotateY = ((x - centerX) / centerX) * 5; // Max rotation 5 degrees

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                if (card.classList.contains('recommended') && window.innerWidth > 992) {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                 if (card.classList.contains('recommended') && window.innerWidth > 992) {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1.05)';
                } else if (card.classList.contains('recommended') && window.innerWidth <= 768) {
                     card.style.transform = 'scale(1.05)';
                 }
            });
        });
    }

});

