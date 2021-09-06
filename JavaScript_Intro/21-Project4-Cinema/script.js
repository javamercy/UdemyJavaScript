const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const selectBox = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function(e) {

    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {

        e.target.classList.toggle("selected");
        calculateTotal();
    }
});


selectBox.addEventListener("change", function(e) {
    calculateTotal();


});


function calculateTotal() {


    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {

        selectedSeatsArr.push(seat);
    });
    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {

        return seatsArr.indexOf(seat);
    });



    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;

    amount.innerText = selectBox.value * selectedSeatCount;
    count.innerText = selectedSeatCount;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {

    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));


    if (selectedSeats !== null && selectedSeats.length > 0) {

        seats.forEach(function(seat, index) {

            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }







    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {

        selectBox.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {

    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", JSON.stringify(selectBox.selectedIndex));
}