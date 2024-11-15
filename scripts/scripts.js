//filter cards on index
function filterCards(){
document.getElementById('card-filter').addEventListener('change', function() {
        const selectedType = this.value;
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const cardType = card.getAttribute('data-type');
            if (selectedType === 'all' || cardType === selectedType) {
                card.parentElement.style.display = 'block'; // Show card
            } else {
                card.parentElement.style.display = 'none'; // Hide card
            }
        });
    });
}
filterCards();