// escaping string
let data1 = 'Si anjing berkata "Apa kabar?"';
console.log(data1);
let data2 = "Si bangau menjawab \"Yntkts\""
console.log(data2);
let data3 = "Si anjing mengatakan 'Kok kamu gitu? \nLagi bete kah?'"
console.log(data3);

// literal string
let namaKarakter1 = "Anjing";
let namaKarakter2 = "Bangau";
let umurKarakter = 9;
let namaKarakter = umurKarakter + " " + namaKarakter1 + " dan " + namaKarakter2;
console.log(namaKarakter);

// biar program tidak bingung dengan tipe data
let biodata = `${namaKarakter1} dan ${namaKarakter2} sama-sama berumur ${umurKarakter}`;
console.log(biodata);
