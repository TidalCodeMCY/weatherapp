export function resetCard() {
    const card = document.getElementById('basecard');
    if (card !== null) {
        card.remove();
    }
}
