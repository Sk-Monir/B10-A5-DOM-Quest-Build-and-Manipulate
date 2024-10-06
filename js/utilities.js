// toggle button function 
function swapOption(id) {
    document.getElementById('donate-btn').classList.remove('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400');
    document.getElementById('donate-btn').classList.add('text-gray-500', 'border-2', 'font-medium');

    document.getElementById('history-btn').classList.remove('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400')
    document.getElementById('history-btn').classList.add('text-gray-500', 'border-2', 'font-medium');

    document.getElementById(id).classList.add('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400')
    document.getElementById(id).classList.remove('text-gray-500')
}
// HiddenElement
function hiddenElement(id) {
    const hidden = document.getElementById(id).classList.add('hidden');
    return hidden;
}
// ShowHiddenElement
function ShowHiddenElement(id) {
    const show = document.getElementById(id).classList.remove('hidden');
    return show;
}