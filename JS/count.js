
function getPlayerNameById(nameId) {
    const playerNameElement = document.getElementById(nameId)
    const playerName = playerNameElement.innerText;
    return playerName;
}


function setNameInPlayerList(playerName, value) {
    const selectedPlayerField = document.getElementById(playerName);
    const list = document.createElement('h1');
    list.innerText = value;
    selectedPlayerField.appendChild(list)
}



document.getElementById('player-1-select-btn').addEventListener('click', function () {
    const messi = getPlayerNameById('messi');
    const list = setNameInPlayerList('set-player-name', messi)

})


document.getElementById('player-2-select-btn').addEventListener('click', function () {
    const neymar = getPlayerNameById('neymar');
    const list = setNameInPlayerList('set-player-name', neymar)
})


document.getElementById('player-3-select-btn').addEventListener('click', function () {
    const mbappe = getPlayerNameById('Mbappe');
    const list = setNameInPlayerList('set-player-name', mbappe);
})


document.getElementById('player-4-select-btn').addEventListener('click', function () {
    const rolando = getPlayerNameById('rolando');
    const list = setNameInPlayerList('set-player-name', rolando);
})


document.getElementById('player-5-select-btn').addEventListener('click', function () {
    const maria = getPlayerNameById('maria');
    const list = setNameInPlayerList('set-player-name', maria);
})


document.getElementById('player-6-select-btn').addEventListener('click', function () {
    const ozil = getPlayerNameById('ozil');
    const list = setNameInPlayerList('set-player-name', ozil);
})

document.getElementById('player-7-select-btn').addEventListener('click', function () {
    const sergio = getPlayerNameById('Sergio');
    const list = setNameInPlayerList('set-player-name', sergio);
})

document.getElementById('player-8-select-btn').addEventListener('click', function () {
    const Andres = getPlayerNameById('Andres');
    const list = setNameInPlayerList('set-player-name', Andres);
})

document.getElementById('player-9-select-btn').addEventListener('click', function () {
    const Xavi = getPlayerNameById('Xavi');
    const list = setNameInPlayerList('set-player-name', Xavi);
})





