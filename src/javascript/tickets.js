'use strict'

/* INGRESSOS */
const ticketOptions = [
    {
        element: document.getElementById('defaultTicket'),
        type: 'Normal',
        price: 35
    },
    {
        element: document.getElementById('vipTicket'),
        type: 'VIP',
        price: 80
    },
    {
        element: document.getElementById('premiumTicket'),
        type: 'Premium',
        price: 120
    }
];

const visor = document.getElementById('visor');
const decreaseTickets = document.getElementById('decreaseTickets');
const addTickets = document.getElementById('addTickets');
const ticketType = document.getElementById('ticketType');
const ticketQuantity = document.getElementById('ticketQuantity');
const ticketPrice = document.getElementById('ticketPrice');
const ticketTotal = document.getElementById('ticketTotal');
const continueButton = document.querySelector('.fiscal-note .green-btn');

let selectedTicket = ticketOptions[0];
let quantity = 1;

const formatarPreco = (valor) => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

const atualizarCompra = () => {
    const total = selectedTicket.price * quantity;

    if (visor) {
        visor.querySelector('p').textContent = quantity;
    }
    if (ticketType) {
        ticketType.textContent = selectedTicket.type;
    }
    if (ticketQuantity) {
        ticketQuantity.textContent = quantity;
    }
    if (ticketPrice) {
        ticketPrice.textContent = formatarPreco(total);
    }
    if (ticketTotal) {
        ticketTotal.textContent = formatarPreco(total);
    }
};

const selecionarIngresso = (ticket) => {
    ticketOptions.forEach(option => {
        if (!option.element) {
            return;
        }

        option.element.classList.remove('activated-div');

        const radio = option.element.querySelector('.radio-button');
        const radioCircle = radio?.querySelector('span');

        if (radio) {
            radio.classList.remove('activated-button');
        }
        if (radioCircle) {
            radioCircle.classList.remove('activated-radio');
        }
    });

    ticket.element.classList.add('activated-div');

    const radio = ticket.element.querySelector('.radio-button');
    const radioCircle = radio?.querySelector('span');

    if (radio) {
        radio.classList.add('activated-button');
    }
    if (radioCircle) {
        radioCircle.classList.add('activated-radio');
    }

    selectedTicket = ticket;
    atualizarCompra();
};

ticketOptions.forEach(ticket => {
    if (!ticket.element){
        return;
    }

    ticket.element.addEventListener('click', () => {
        selecionarIngresso(ticket);
    });
});

if (decreaseTickets) {
    decreaseTickets.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            atualizarCompra();
        }
    });
}

if (addTickets) {
    addTickets.addEventListener('click', () => {
        quantity++;
        atualizarCompra();
    });
}

/* CONTINUAR */
if (continueButton) {
    continueButton.addEventListener('click', () => {
        const checkout = document.querySelector('.checkout-section');

        if (checkout) {
            checkout.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };
    });
};

atualizarCompra();

/* FINALIZAÇÃO */
const checkoutForm = document.querySelector('.checkout-form');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = checkoutForm.querySelector('input[type="text"]');
        const email = checkoutForm.querySelector('input[type="email"]');
        const phone = checkoutForm.querySelector('input[type="tel"]');
        const agreement = checkoutForm.querySelector('input[type="checkbox"]');

        if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
            alert('Preencha todos os seus dados para continuar.');
            return;
        }

        if (!agreement.checked) {
            alert('Você precisa concordar com os termos de compra.');
            return;
        }

        alert(`Pedido preparado para ${name.value.trim()} com ${quantity} ingresso(s) ${selectedTicket.type}.`);
    });
}