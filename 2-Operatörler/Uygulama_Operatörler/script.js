// Demo : Operatörs

// 1 - Emre ve Ada'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
// ** Formül : Kişinin kilosu / Boy Uzunluğunun karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre Emre ve Ada hangi gruba giriyor?

// 0 - 18,4 : Zayıf
// 10,5 - 24,9 : Normal
// 25,0 - 29,9 : Kilolu
// 30,0 - 34,9 : Şişman (Obez)

let indexEmre;
let indexAda;


const kgEmre = 53;
const kgAda = 40;

const heightEmre = 1.68;
const heightAda = 1.55;

indexAda = (kgAda) / (heightAda * heightAda);
indexEmre = (kgEmre) / (heightEmre * heightEmre);

console.log(indexAda.toFixed(2), indexEmre.toFixed(2));


let isAdaHasHigherIndex = indexAda > indexEmre;
let isEmreHasHigherIndex = indexEmre > indexAda;


console.log("Ada'nın kilo indexi Emre'nin kilo indexinden daha mı büyük ? :", isAdaHasHigherIndex);
console.log("Emre'nin kilo indexi Ada'nin kilo indexinden daha mı büyük ? :", isEmreHasHigherIndex);

let adaZayif = (indexAda >= 0) && (indexAda <= 18.4);
let adaNormal = (indexAda >= 19.5) && (indexAda <= 24.9);
let adaObez = (indexAda >= 30.0) && (indexAda <= 34.9);

console.log("Ada Zayıf mı? :", adaZayif);
console.log("Ada Normal mi? :", adaNormal);
console.log("Ada Obez mi? :", adaObez);