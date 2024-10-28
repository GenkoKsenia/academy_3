let step = 'X';
let gameWho = document.getElementById('gameWho');
let winner = '';

const who = () => {
    gameWho.textContent = `Игрок ${step === 'X' ? 1 : 2} ${step === 'X' ? 'Крестики' : 'Нолики'}`;
}

who();

let gameItem = document.querySelectorAll('.gameItem');
let counter = 0;

gameItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.textContent === '') {
            item.textContent = step;
            counter++;
            checkWin();
            step = step === 'X' ? 'O' : 'X';
            who();
        }
    });
});

// массив выйгрышных комбинаций 
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// функции проверки
let crossWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (gameItem[win[i][0]].textContent === 'X' && gameItem[win[i][1]].textContent === 'X' && gameItem[win[i][2]].textContent === 'X') {
            return true;
        }
    }
    return false;
}

let circleWin = () => {
    for (let i = 0; i < win.length; i++) {
        if (gameItem[win[i][0]].textContent === 'O' && gameItem[win[i][1]].textContent === 'O' && gameItem[win[i][2]].textContent === 'O') {
            return true;
        }
    }
    return false;
}

let noWin = () => {
    return counter === 9;
}

// функция завершения игры
let endGame = (winner) => {
    document.getElementById('spanWin').textContent = winner;
    document.getElementById('Winner').style.display = 'block';
}

// проверка победы
let checkWin = () => {
    if (crossWin()) {
        endGame('Игрок 1 Крестики');
    } else if (circleWin()) {
        endGame('Игрок 2 Нолики');
    } else if (noWin()) {
        endGame('Ничья');
    }
}

btnNewGame.addEventListener('click', () => {
    gameItem.forEach((item) => {
        item.textContent = '';
    });
    counter = 0;
    step = 'X';
    who();
    document.getElementById('Winner').style.display = 'none';
});
