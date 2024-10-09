// switch page blog.html
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = './blog.html';
})
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

//Add Donate at Noakhali
makeDonate('noakhali-donate-btn', 'noakhali-donate-input', 'total-donate-1', 'balance', 'noakhali-ttl');

//Add Donate at fani
makeDonate('feni-donate-btn', 'feni-donate-input', 'total-donate-2', 'balance', 'feni-ttl');

//Add Donate at Noakhali
makeDonate('quota-donate-btn', 'quota-donate-input', 'total-donate-3', 'balance', 'quota-ttl');
