const cardsContainer = document.getElementById('cards-container');
// const cards = [...document.querySelectorAll('#cards-container .scene')];
// const cardsImage = [...document.querySelectorAll('#cards-container .gallery')];
let x = document.querySelectorAll('#cards-container .scene');
let y = document.querySelectorAll('#cards-container .gallery');
const cards = Array.from(x);
const cardsImage = Array.from(y);
let opennedCard = null;

console.log(cards);

cardsContainer.addEventListener('click', e => {
    const cardNode = getNode(e.target, 'scene');

    toggleCard(cardNode);
});

function getNode(node, className) {
    while (node) {
        if (node.classList?.contains(className)) {
            return node;
        } else {
            return getNode(node.parentNode, className);
        }
    }
}

function toggleCard(card) {
    if (!card) return;
    
    if (!opennedCard) {
        opennedCard = card;
        card.classList.toggle('open');

        cards.forEach(c => {
            if (c === card) return;

            c.style.opacity = 0;

            setTimeout(() => {
                c.classList.add('hidden');
            }, 300);
        });

        cardsImage.forEach(c => c.classList.remove('hidden'));
    } else {
        cards.forEach(c => {
            c.classList.remove('hidden');
            c.style.opacity = 1;
        });

        cardsImage.forEach(c => c.classList.add('hidden'));

        card.classList.toggle('open');

        opennedCard = null;
    }
}
