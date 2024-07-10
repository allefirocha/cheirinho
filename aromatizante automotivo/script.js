document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    const signupForm = document.getElementById('signup-form');
    
    buyButton.addEventListener('click', () => {
        alert('Obrigado pelo seu interesse! A página de compra será disponibilizada em breve.');
    });
    
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Obrigado por se inscrever, ${email}! Você receberá novidades e ofertas exclusivas.`);
        signupForm.reset();
    });
});