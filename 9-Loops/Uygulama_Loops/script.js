// Demo  Loops : Sayı tahmin oyunu


/* 

1-10 arası rasgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile 
buldurmaya çalışın.

** puanlama yapın.
** kullanıcı kaç kerede bileceğini belirtebilsin.

*/


let life;
let guess;
let count = 0;
const number = Math.floor(Math.random() * 10 + 1);
let trying = Number(prompt("How much life do you want ?"));
life = trying;

while (life > 0) {

    ++count;
    guess = Number(prompt("Enter a number!"));

    if (count === trying) {
        console.log("No more life loser! :", number);
        break;
    }


    if (guess === number) {

        console.log("Well done!");
        console.log("Count :", count);
        console.log(`Point : ${100-(100/trying)*count-1}`);
        break;

    } else if (guess < number) {

        console.log("UP");
        life--;
        continue;

    } else {

        console.log("DOWN");
        life--;
        continue;
    }






}