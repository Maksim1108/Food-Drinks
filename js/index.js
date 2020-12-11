function sortSection() {
    const sortItems = document.querySelectorAll('.filter__items');
    const sortItemsName = ['All', 'Red', 'Rose', 'White'];
    sortItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            sortItems.forEach((everyElement) => {
                everyElement.classList.remove('filter__items--active');
            });
            item.classList.add('filter__items--active');
            console.log(item);
            if (item.textContent == sortItemsName[index]) {
                sortFilter(index);
            }
        });
    });
}
sortSection();
function sortFilter(index) {
    const filterItems = document.querySelectorAll('.sort__item');
    const filterItemsName = [
        'data-all',
        'data-red',
        'data-rose',
        'data-white',
    ];
    filterItems.forEach((ayday) => {
        if (!ayday.hasAttribute(filterItemsName[index])) {
            ayday.style.display = 'none';
        } else {
            ayday.style.display = 'flex';
        }
    });
}