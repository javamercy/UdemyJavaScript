// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.


let dt = new Date();

console.log(dt);
console.log(dt.getMonth() + 1);
console.log(dt.getDate());
console.log(dt.getFullYear());


// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

let dtA = new Date("8/24/2010 14:50:10");
var dtB = new Date(2010, 7, 24, 10, 22, 11, 08);
console.log(dtA);
console.log(dtB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.

let dtC = new Date("1/1/1990");
let dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);

// İki tarih arasındaki geçen zamanı bulunuz.

let start = new Date("1/1/1990");
let end = new Date("1/1/1992");

let millisecond = end - start;
let second = millisecond / 1000;
let minute = second / 60;
let hour = minute / 60;
let day = hour / 24;
let year = day / 365;

console.log("millisecond :", millisecond);
console.log("second :", second);
console.log("minute :", minute);
console.log("hour :", hour);
console.log("day :", day);
console.log("year :", year);

// Her yıl mayıs ayının 2.haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanmıştır?

let momDay = new Date();
momDay.setHours(0, 0, 0, 0);
momDay.getFullYear(2019);
momDay.setDate(1);
momDay.setMonth(4);

// while (momDay.getDay() != 0) {
//     momDay.setDate(momDay.getDate() + 1);
// }


momDay.setDate(momDay.getDate() + 7);

console.log(momDay);


// ** Yaş hesaplama nasıl yapılır?

let birthday = new Date("8/1/1985");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now());