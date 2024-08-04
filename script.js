// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`Más información sobre ${card.querySelector('h3').textContent}`);
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje y te responderemos a la brevedad.`);
        form.reset();
    });
});
