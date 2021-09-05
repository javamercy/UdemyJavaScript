// Demo : Strings

var sentence = " Template Literals or template strings is the ability have multi-line strings without any funny business.  ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// Cümle kaç karakterlidir ?

console.log(sentence.length);

// Kaç kelimeden oluşuyor ?

console.log(sentence.trim().split(" ").length);

// Tüm cümleyi küçük harfe çevirin.

console.log(sentence.toLowerCase());

// Cümlenin başındaki ve sonundaki boşlukları silin.

console.log(sentence.trim());

// "-" karakterini silin

console.log(sentence.replace("-", ""));

//  Url'nin içinden str kısmını silin.

var str = "http://";
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// Url hangi protocol'ü kullanmaktadır ? (http,https)

console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

// Url .com ifadesini içeriyor mu ?

console.log(url.indexOf(".com"));
console.log(url.includes(".com"));

// Url string ifadesini geçerli bir url olarak düzenleyiniz.


console.log(
    url.trim()
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/ı/g, "i"));