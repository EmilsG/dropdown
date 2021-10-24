const dropdown = document.querySelector('.js-dropdown');
const button = dropdown.querySelector('.js-button');
const dropdownContent = dropdown.querySelector('.js-dropdown-content');
const dropdownItem = dropdown.querySelectorAll('.js-dropdown-item');


button.addEventListener('click', () => {
    dropdownContent.classList.toggle('show-content');
});

dropdownItem.forEach((item) => {
    item.addEventListener('click', () => {
        button.textContent = item.textContent;
        dropdownContent.classList.toggle('show-content');
    })
});

window.addEventListener('click', (event) => {
    const element = event.target as HTMLElement;
    const isOutsideDropdown = !!element.closest('.dropdown');

    if (isOutsideDropdown === false) {
        dropdownContent.classList.remove('show-content');
    }
})