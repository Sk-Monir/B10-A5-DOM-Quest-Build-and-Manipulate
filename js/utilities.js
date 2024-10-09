// toggle button function 
function swapOption(id) {
    document.getElementById('donate-btn').classList.remove('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400');
    document.getElementById('donate-btn').classList.add('text-gray-500', 'border-2', 'font-medium', 'hover:bg-gray-100', 'border-lime-400');

    document.getElementById('history-btn').classList.remove('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400')
    document.getElementById('history-btn').classList.add('text-gray-500', 'border-2', 'font-medium', 'hover:bg-gray-100', 'border-lime-400');

    document.getElementById(id).classList.add('bg-lime-400', 'font-semibold', 'hover:bg-lime-300', 'duration-300', 'ease-in-out', 'border-2', 'border-lime-400')
    document.getElementById(id).classList.remove('text-gray-500', 'hover:bg-gray-100')
}

// HiddenElement function
function hiddenElement(id) {
    const hidden = document.getElementById(id).classList.add('hidden');
    return hidden;
}

// ShowHiddenElement function
function ShowHiddenElement(id) {
    const show = document.getElementById(id).classList.remove('hidden');
    return show;
}

// get input value by id function
function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue
}

//get text value by id function
function getTextValueById(id) {
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue
}

//Add Donate at function
function makeDonate(btn, input, totalDonateAmount, balance, donateTitle) {
    document.getElementById(btn).addEventListener('click', function (event) {
        // event.preventDefault();
        const donateAmount = getInputValueById(input);

        // validation
        if (donateAmount <= 0 || isNaN(donateAmount)) {
            alert(`${donateAmount} Is Invalid Amount`);
            return
        }
        const totalDonate = getTextValueById(totalDonateAmount);
        const mainBalance = getTextValueById(balance);
        // validation
        if (donateAmount > mainBalance) {
            alert(`${donateAmount} BDT Is Not Available In Account`);
            return;
        }

        // total collection
        const donate = totalDonate + donateAmount;
        document.getElementById(totalDonateAmount).innerText = donate.toFixed(2);

        // Remaining Balance
        const remainingBalance = mainBalance - donateAmount;
        document.getElementById(balance).innerText = remainingBalance.toFixed(2);

        // clear input value after submit
        document.getElementById(input).value = '';

        // Add history
        const title = document.getElementById(donateTitle).innerText;
        const div = document.createElement('div');
        div.className = 'p-3 border-2 mb-4 rounded-lg'
        div.innerHTML = `
            <p class=" text-base lg:text-xl font-bold mb-2 p-2">${donateAmount} ${title}</p>
            <p class=" text-text-xs lg:text-base font-light rounded-lg bg-gray-100 p-2">${new Date().toString()} </p>
             `
        const container = document.getElementById('history-container');
        container.insertBefore(div, container.firstChild);

        // Show model 
        const model = document.getElementById('my_modal_1');
        model.showModal()

    })
}
