const radioElements = [
    document.getElementById('radio-1'),
    document.getElementById('radio-2'),
    document.getElementById('radio-3')
];

const tableElements = [
    document.getElementById('table-radio-1'),
    document.getElementById('table-radio-2'),
    document.getElementById('table-radio-3')
];

const radioButtons = [
    document.getElementById('radio-button-1'),
    document.getElementById('radio-button-2'),
    document.getElementById('radio-button-3')
]

const handleClick = (selectedId) => {
    radioElements.forEach((element, idx) => {
        const isSelected = element.id === selectedId;
        const table = tableElements[idx];
        const button = radioButtons[idx];
        const icon = button.children[0];

        const activeClasses = ["height-134-11", "border-2", "border-primary-color", "bg-light-red"];
        const inactiveClasses = ["height-34-11", "border-0-9", "border-border-color", "bg-white"];

        activeClasses.forEach(cls => element.classList.toggle(cls, isSelected));
        inactiveClasses.forEach(cls => element.classList.toggle(cls, !isSelected));

        button.classList.toggle('border-primary-color', isSelected);
        button.classList.toggle('border-gray-color', !isSelected);

        table.classList.toggle('display-none', !isSelected);
        icon.classList.toggle('display-none', !isSelected);
    });
};
