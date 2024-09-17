let images = document.getElementById("images");
let text = document.getElementById("text");
let btnBox = document.getElementById("btnBox");
let input = document.getElementById("input");

let name = "Ваше имя";

input.onkeypress = function(event) {

    if (event.key == "Enter" || event.keyCode == 13) {
        name = input.value;
        console.log(name);
        input.parentNode.removeChild(input);

        moveNextStep(scenario.two);
    }
}

let changeText = function(words) {
    console.log(words)
    text.innerHTML = words.replace("Ваше имя", name);
}

let changeImage = function(img) {
    images.style.backgroundImage = "url("+ img +")";
}

let changeButtons = function(buttonList) {
    console.log(buttonList)
    btnBox.innerHTML = "";

    for (let i = 0; i < buttonList.length; i++) {
        btnBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button";
    }
}


let moveNextStep = function(s) {
    console.log(s, 's')
    changeText(s.text);
    changeImage(s.image);
    changeButtons(s.buttons);
};

let box = document.querySelector(".box");
let app =document.querySelector(".app");
let body = document.querySelector("body");

// let startGame = function() {
//     box.parentNode.removeChild(box);
//     app.classList.add("activeApp");
//     body.classList.add("activeBody");
// }






let scenario = {
    one: {
        image: "images/просто.jpg",
        text: "Это Рома. Его пригласили на вечеринку в другой город. Давай поможем ему попасть на вечеринку! Но для начала скажи, как тебя зовут?)"
    },

    two: {
        image: "images/один.jpg",
        text: "Роме 18 лет. Может ли он получить права на управление легковым автомобилем?",
        buttons: [["Может", "moveNextStep(scenario.three)"], ["Нет", "moveNextStep(scenario.eleven)"]]
    },

    three: {
        image: "images/два.jpg",
        text: "Один из друзей Ромы, которому 16 лет, позвонил и попросил подвезти его домой после вечеринки. </br> Нужно ли Роме брать с собой специальное кресло для перевозки пассажира на переднем сиденьи?",
        buttons: [["Нет, потому что другу больше 12 лет", "moveNextStep(scenario.four)"], ["Да, нужно, так как пассажиры до 18 лет должны сидеть на специальном кресле", "moveNextStep(scenario.eleven)"]]
    },

    four: {
        image: "images/три.jpg",
        text: "Рома едет по дороге и видит впереди него машину, которая едет очень медленно. Он хочет обогнать автомобиль. Может ли он это сделать?",
        buttons: [["Может", "moveNextStep(scenario.five)"], ["Не может", "moveNextStep(scenario.eleven)"]]
    },

    five: {
        image: "images/четыре.jpg",
        text: "О нет! </br> Рома попал в туман! Что же ему делать?",
        buttons: [["Проехать этот участок дороги как можно быстрее", "moveNextStep(scenario.eleven)"], ["Снизить скорость и ехать очень внимательно", "moveNextStep(scenario.six)"]]
    },

    six: {
        image: "images/пять.jpg",
        text: "Ура! Рома выехал из тумана. Теперь ему встретился такой знак - автомагистраль. Роме нужно остановиться, но где?",
        buttons: [["После автомагистрали", "moveNextStep(scenario.seven)"], ["Остановиться на обочине", "moveNextStep(scenario.eleven)"]]
    },

    seven: {
        image: "images/шесть.jpg",
        text: "Наконец, Рома въехал в город. Он решил пересесть на другой транспорт. </br> Какой транспорт стоит выбрать для передвижения по пешеходной зоне?",
        buttons: [["Мотоцикл", "moveNextStep(scenario.eleven)"], ["Велосипед", "moveNextStep(scenario.eight)"]]
    },

    eight: {
        image: "images/семь.jpg",
        text: "Пересев на велосипед, Рома отправился к другу. </br> Ему нужно переехать на другую сторону дороги. </br> Может ли Рома, не слезая с транспорта, перейти пешеходный переход?",
        buttons: [["Нет, не может", "moveNextStep(scenario.nine)"], ["Конечно, может", "moveNextStep(scenario.eleven)"]]
    },

    nine: {
        image: "images/восемь.jpg",
        text: "Рома слез с велосипеда. Как ему нужно переходить дорогу?",
        buttons: [["Посмотреть налево и направо, а потом переходить дорогу", "moveNextStep(scenario.ten)"], ["Перебежать дорогу, чтобы не задерживать движение машин", "moveNextStep(scenario.eleven)"]]
    },

    ten: {
        image: "images/девять.jpg",
        text: "Ваше имя, ты молодец! Благодаря тебе Рома приехал на вечеринку в целости и сохранности!",
    },

    eleven: {
        image: "images/неправильно.jpg",
        text: "Ваше имя, это неправильный ответ, попробуй начать сначала.",
        buttons: [["Сначала", "moveNextStep(scenario.two)"]]
    },


    // eleven: {
    //     image: "images/девять.jpg",
    //     text: "Спасибо за прохождение математической игры.",
    //     buttons: [["Вернуться к началу", "moveNextStep(scenario.one)"]]
    // }
}

// // Tic-Tac game

// let items = document.getElementsByClassName("app__block");
// let movePlayer = true;
// let game = true;

// // Ход (нажатие на ячейку)

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", function() {

//         if (!this.classList.contains("active")) {
//             if (movePlayer) {
//                 if (this.innerHTML == "") {
//                     this.classList.add("active");
//                     this.classList.add("active_x");
//                     this.innerHTML = "x";
//                 }

//                 let result = checkMap();

//                 if (result.val) {
//                     game = false;
//                     setTimeout(function() {
//                         exit(result)
//                     }, 1);
//                 }

//                 movePlayer = !movePlayer;
//             }

//             if (game) {
//                 setTimeout(function() {
//                     botMove();
//                 }, 200)
//             }
//         }
//     });
// }

// function getRandomInt(value) {
//     return Math.floor(Math.random()  * Math.floor(value)); // from 1 to 9
// }

// function botMove() {
//     let items = document.querySelectorAll(".app__block:not(.active)");
//     let step = getRandomInt(items.length);

//     items[step].innerHTML = "o";
//     items[step].classList.add("active");
//     items[step].classList.add("active_o");

//     let result = checkMap();

//     if (result.val) {
//         game = false;
//         setTimeout(function() {
//             exit(result)
//         }, 1);
//     }

//     movePlayer = !movePlayer
// }

// function checkMap() {
//     let block = document.querySelectorAll(".app__block");
//     let items = [];

//     for (let i = 0; i < block.length; i++) 
//         items.push(block[i].innerHTML);

//     console.log(items);
    

//     if (items[0] == "x" && items[1] == "x" && items[2] == "x" ||
//        items[3] == "x" && items[4] == "x" && items[5] == "x" ||
//        items[6] == "x" && items[7] == "x" && items[8] == "x" ||
//        items[0] == "x" && items[3] == "x" && items[6] == "x" ||
//        items[1] == "x" && items[4] == "x" && items[7] == "x" ||
//        items[2] == "x" && items[5] == "x" && items[8] == "x" ||
//        items[0] == "x" && items[4] == "x" && items[8] == "x" ||
//        items[6] == "x" && items[4] == "x" && items[2] == "x")
//         return {val: true, win: "Игрок"}
//     else if (items[0] == "o" && items[1] == "o" && items[2] == "o" ||
//             items[3] == "o" && items[4] == "o" && items[5] == "o" ||
//             items[6] == "o" && items[7] == "o" && items[8] == "o" ||
//             items[0] == "o" && items[3] == "o" && items[6] == "o" ||
//             items[1] == "o" && items[4] == "o" && items[7] == "o" ||
//             items[2] == "o" && items[5] == "o" && items[8] == "o" ||
//             items[0] == "o" && items[4] == "o" && items[8] == "o" ||
//             items[7] == "o" && items[4] == "o" && items[2] == "o")
//         return {val: true, win: "Бот"}
//     else if (items.includes("") == 0)
//         return {val: true, win: "Ничья"}

//     return {val: false}

// }

// function exit(obj) {
//     alert("Game Over! Winner of the game is: " + obj.win);
//     localation.reload();
// }

moveNextStep(scenario.one);