// Demo : Conditionals Statements


// let trafigeCikis = new Date("04/20/2017");
// trafigeCikis.setHours(0, 0, 0, 0);
// let trafiktekiMs = Date.now() - trafigeCikis.getTime();
// let trafiktekiYıl = Math.floor(trafiktekiMs / (1000 * 60 * 60 * 24 * 365));


// if (trafiktekiYıl <= 1) {

//     console.log("1.servis bakım süreniz geldi.");

// } else if (trafiktekiYıl > 1 && trafiktekiYıl <= 2) {

//     console.log("2.servis bakım süreniz geldi.");

// } else if (trafiktekiYıl > 2 && trafiktekiYıl <= 3) {

//     console.log("3.servis bakım süreniz geldi.");

// } else {

//     console.log("UNKNOWN DURATION");
// }









var result = prompt("Who is there ?");

if (result === "cancel") {

    console.log("Cancelled");

} else if (result === "admin") {

    var password = prompt("enter password")

    if (password === "cancel") {

        console.log("cancelled");

    } else if (password === "1234") {

        console.log("Welcome Admin!");
    } else {

        console.log("Wrong Password");
    }
} else {

    console.log("Who the hell are you ?");
}