document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return;
        }

        emailjs.send('service_iwn33e3', 'template_5k8ujk9', {
            from_name: name,
            from_email: email,
            message: message
        }, '88vx44w2fGmxMApMr')
        .then(response => {
            alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje y te responderemos a la brevedad.`);
            form.reset();
        })
        .catch(error => {
            alert('Hubo un problema al enviar el mensaje.');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
