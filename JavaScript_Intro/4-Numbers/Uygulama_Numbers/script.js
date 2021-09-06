let num = 15.123456789;

// Toplamda 3 basamaklı sayı kullan

console.log(num.toPrecision(3));

// Ondalık kısmı 3 basamakta sınırla

console.log(num.toFixed(3));

// En yakın sayıya yuvarla

console.log(Math.round(num));

// Aşağı yuvarla

console.log(Math.floor(num));

// Yukarı yuvarla

console.log(Math.ceil(num));

// 1,2,10,56,20 sayılarının en küçüğü ve en büyüğünü bul

console.log("Max :", Math.max(1, 2, 10, 56, 20));
console.log("Min :", Math.min(1, 2, 10, 56, 20));

// Sayı aralığını kullanıcının belirleyeceği rasgele bir sayı üretin

let min = 50;
let max = 100;

console.log(Math.floor(Math.random() * (max - min) + min));


/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım. 

  ** Brüt maaş : 3700 TL
  ** Brüt mesai : 10.3 TL
  Ağustos ayı mesait toplamı 42 saat ise toplam brüt maaş nedir?
  Brüt maaaş üzerinden toplam kesinti oranı %25 ise alınacak net maaş nedir?
*/

let brutMaas = 3700;
let mesaiUcreti = 10.3;
let mesaiSuresi = 42;

let toplamBrutMaas = brutMaas + (mesaiUcreti * mesaiSuresi);

let toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));