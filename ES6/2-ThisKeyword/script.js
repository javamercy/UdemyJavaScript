// "This" Keyword

// ES5

// let list = {

//     category: "phone",
//     names: ["Iphone", "Samsung", "Vivo", "Huawei"],
//     call: function() {
//         var self = this;
//         this.names.map(function(name) {
//             console.log(`${self.category} ${name}`);
//         });
//     }
// }



// ES6

// let list = {

//     category: "phone",
//     names: ["Iphone", "Samsung", "Vivo", "Huawei"],
//     call: function() {
//         this.names.map((name) => {
//             console.log(`${this.category} ${name}`);
//         });
//     }
// }

// list.call();



// ES5
// function Game() {

//     this.live = 0;
//     this.addLive = function() {
//         this.oneUp = setInterval(function() {

//             console.log(++this.live);
//         }.bind(this), 1000);
//     }
// }



//ES6

function Game() {

    this.live = 0;
    this.addLive = function() {
        this.oneUp = setInterval(() => {

            console.log(++this.live);
        }, 1000);
    }
}

let player = new Game();
player.addLive();