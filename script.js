document.addEventListener('DOMContentLoaded', () => {
    // This function updates the total price displayed at the bottom of the cart
    const updateTotalPrice = () => {
        let total = 0;
        document.querySelectorAll('.card-body').forEach(card => {
            const quantity = parseInt(card.querySelector('.quantity').innerText);
            const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
            total += quantity * unitPrice;
        });
        document.querySelector('.total').innerText = `${total} $`;
    };

    // Event listener for "+" buttons to increase the quantity
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.card-body');
            const quantityElement = card.querySelector('.quantity');
            quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
            updateTotalPrice();
        });
    });

    // Event listener for "-" buttons to decrease the quantity
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.card-body');
            const quantityElement = card.querySelector('.quantity');
            if (parseInt(quantityElement.innerText) > 0) {
                quantityElement.innerText = parseInt(quantityElement.innerText) - 1;
                updateTotalPrice();
            }
        });
    });

    // Event listener for "Delete" buttons to remove an item
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.card-body');
            card.remove();
            updateTotalPrice();
        });
    });

    // Event listener for "Like" buttons to toggle the liked status
    document.querySelectorAll('.fa-heart').forEach(button => {
        button.addEventListener('click', event => {
            event.target.classList.toggle('liked');
        });
    });

    // Initial calculation of the total price when the page loads
    updateTotalPrice();
});
