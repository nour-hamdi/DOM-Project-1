// JavaScript for handling cart functionality

document.addEventListener('DOMContentLoaded', () => {
    const totalPriceElement = document.querySelector('.total');
    
    // Update total price function
    function updateTotalPrice() {
        const prices = document.querySelectorAll('.unit-price');
        let totalPrice = 0;
        prices.forEach((price, index) => {
            const quantity = document.querySelectorAll('.quantity')[index].textContent;
            totalPrice += parseFloat(price.textContent.replace(' $', '')) * parseInt(quantity);
        });
        totalPriceElement.textContent = `${totalPrice} $`;
    }

    // Handle quantity adjustments
    document.querySelectorAll('.fa-plus-circle').forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantityElement = document.querySelectorAll('.quantity')[index];
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.fa-minus-circle').forEach((button, index) => {
        button.addEventListener('click', () => {
            const quantityElement = document.querySelectorAll('.quantity')[index];
            if (parseInt(quantityElement.textContent) > 0) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotalPrice();
            }
        });
    });

    // Handle item deletion
    document.querySelectorAll('.fa-trash-alt').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.target.closest('.card-body').remove();
            updateTotalPrice();
        });
    });

    // Handle item liking
    document.querySelectorAll('.fa-heart').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.target.classList.toggle('liked');
        });
    });
});
