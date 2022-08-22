
// <<----------------------------------get player names by id ----------------------->>>>>>>>


function getPlayerNameById(nameId) {
    const playerNameElement = document.getElementById(nameId)
    const playerName = playerNameElement.innerText;
    return playerName;
}

// <<<<<<-------------------------set selected player  in the selected list -------------------->>>>>


function setNameInPlayerList(playerName, value) {

    const selectedPlayerField = document.getElementById(playerName)
    const list = document.createElement('li');
    list.innerText = value;
    const totalPlayer = selectedPlayerField.childNodes.length;
    if (totalPlayer > 5) {
        alert('You can not select player more than 5.')
    }
    else {
        selectedPlayerField.appendChild(list)
    }
    console.log(totalPlayer)
}


// <<<<<<<---------------------- get select player  by id and add evenlistener  start--------------------------->>>>>>>>




// player-1----->>>

document.getElementById('player-1-select-btn').addEventListener('click', function () {
    document.getElementById('player-1-select-btn').setAttribute('disabled', true);
    document.getElementById('player-1-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-1-select-btn').addEventListener('click', function () {
    const messi = getPlayerNameById('messi');
    const list = setNameInPlayerList('set-player-name', messi)

})


// player-2----->>>
document.getElementById('player-2-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-2-select-btn').setAttribute('disabled', true);
    document.getElementById('player-2-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-2-select-btn').addEventListener('click', function () {
    const neymar = getPlayerNameById('neymar');
    const list = setNameInPlayerList('set-player-name', neymar)
})

// player-3----->>>
document.getElementById('player-3-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-3-select-btn').setAttribute('disabled', true);
    document.getElementById('player-3-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-3-select-btn').addEventListener('click', function () {
    const mbappe = getPlayerNameById('Mbappe');
    const list = setNameInPlayerList('set-player-name', mbappe);
})

// player-4----->>>
document.getElementById('player-4-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-4-select-btn').setAttribute('disabled', true);
    document.getElementById('player-4-select-btn').style.backgroundColor = 'gray';
})
document.getElementById('player-4-select-btn').addEventListener('click', function () {
    const rolando = getPlayerNameById('rolando');
    const list = setNameInPlayerList('set-player-name', rolando);
})

// player-5----->>>
document.getElementById('player-5-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-5-select-btn').setAttribute('disabled', true);
    document.getElementById('player-5-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-5-select-btn').addEventListener('click', function () {
    const maria = getPlayerNameById('maria');
    const list = setNameInPlayerList('set-player-name', maria);
})

// player-6----->>>
document.getElementById('player-6-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-6-select-btn').setAttribute('disabled', true);
    document.getElementById('player-6-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-6-select-btn').addEventListener('click', function () {
    const ozil = getPlayerNameById('ozil');
    const list = setNameInPlayerList('set-player-name', ozil);
})

// player-7----->>>
document.getElementById('player-7-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-7-select-btn').setAttribute('disabled', true);
    document.getElementById('player-7-select-btn').style.backgroundColor = 'gray';
})

document.getElementById('player-7-select-btn').addEventListener('click', function () {
    const sergio = getPlayerNameById('Sergio');
    const list = setNameInPlayerList('set-player-name', sergio);
})


// player-8----->>>

document.getElementById('player-8-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-8-select-btn').setAttribute('disabled', true);
    document.getElementById('player-8-select-btn').style.backgroundColor = 'gray';
})
document.getElementById('player-8-select-btn').addEventListener('click', function () {
    const Andres = getPlayerNameById('Andres');
    const list = setNameInPlayerList('set-player-name', Andres);
})


// player-9----->>>

document.getElementById('player-9-select-btn').addEventListener('click', function () {
    const btn = document.getElementById('player-9-select-btn').setAttribute('disabled', true);
    document.getElementById('player-9-select-btn').style.backgroundColor = 'gray';
})
document.getElementById('player-9-select-btn').addEventListener('click', function () {
    const Xavi = getPlayerNameById('Xavi');
    const list = setNameInPlayerList('set-player-name', Xavi);
})




// <<<<<<<---------------------- get select player  by id and add evenlistener end --------------------------->>>>>>>>





// <<<<--------------- get player ,coach & manager  amount by id from input field------------------------------>>>>>>>>




function getAmountById(amountId) {
    const amountElement = document.getElementById(amountId)
    const amountElementString = amountElement.value;
    const amount = parseFloat(amountElementString)
    return amount;
}




// <<<<<<---------------------- get total expenses amount field -------------------------------------->>>>>



function setAmountInTextFieldById(fieldId) {
    const expensesAmountElement = document.getElementById(fieldId);
    const expensesAmountElementString = expensesAmountElement.innerText
    const expensesAmount = parseFloat(expensesAmountElementString);
    return expensesAmount;
}





// <<<<------------------ get calculate amount and add evenlistener--------------------------------->>>>>
// ---------------------------------------


document.getElementById('calculate-btn').addEventListener('click', function () {

    const perPlayerAmount = setNameInPlayerList('player-amount');
    const playerExpenses = setAmountInTextFieldById('player-expenses')





    // const totalPlayerExpense = perPlayerAmount * number;








})

//  <<<<<<----------------------calculate all total Amount and set in the total amount field----------------------->>>>>





document.getElementById('calculate-total-btn').addEventListener('click', function () {
    const managerAmount = getAmountById('manager-amount')
    const coachAmount = getAmountById('coach-amount')
    const playerExpenseAmount = setAmountInTextFieldById('player-expenses');

    // sum all expense ---------->>>>
    const totalExpenses = managerAmount + coachAmount + playerExpenseAmount;

    //  set amount in the last field------->>>>
    const totalExpensesPlace = document.getElementById('total-amount');
    totalExpensesPlace.innerText = totalExpenses;

})



// <<<<<<---------------------------------- JS END ------------------------->>>>>>>>>>>>> 