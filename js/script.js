// toggle the button show and hide option
document.getElementById('donate-btn').addEventListener('click', function () {
    swapOption('donate-btn');
    ShowHiddenElement('donate-container');
    hiddenElement('history-container');
});
document.getElementById('history-btn').addEventListener('click', function () {
    swapOption('history-btn')
    ShowHiddenElement('history-container');
    hiddenElement('donate-container');
});