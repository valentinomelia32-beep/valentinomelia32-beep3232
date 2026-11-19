const themeBtn = document.getElementById('theme-btn');
const themeText = document.getElementById('theme-text');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    
    if (document.body.classList.contains('light')) {
        themeBtn.firstChild.textContent = '☀️ ';
        themeText.textContent = 'Modo claro';
    } else {
        themeBtn.firstChild.textContent = '🌙 ';
        themeText.textContent = 'Modo oscuro';
    }
});

const form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const error = document.getElementById('error');

        if (!email.includes('@') || mensaje.length < 10) {
            e.preventDefault();
            error.textContent = 'Revisá que el email sea válido y el mensaje tenga al menos 10 caracteres.';
        } else {
            error.textContent = '';
        }
    });
}