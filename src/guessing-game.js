// const number = 409;
// const game = new GuessingGame();
// game.setRange(0, 4048)
// let result = game.guess();
// game.lower();

class GuessingGame {
    constructor() { }

    setRange(min, max) { //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
        this.min = min;
        this.max = max;
    }

    guess() { // этот метод возвращает кандидата на решение (вы делаете предположение на основе диапазона и предыдущих предположений)
        this.result = Math.round((this.min + this.max) / 2);
        return this.result;
    }

    lower() { // этот метод вызывается, если предыдущий вызов guess()возвращаемого номера больше, чем ответ
        this.max = this.result;
    }

    greater() { // этот метод вызывается, если предыдущий вызов guess()возвращаемого номера меньше, чем ответ
        this.min = this.result;
    }
}

module.exports = GuessingGame;
