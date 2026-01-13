// operasi string 

let dataString = "opqrx";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`);
// jika ditambahkan lagi tapi dataString nya tidak cukup, maka hasilnya akan kosong

// menyambung string
let namaDepan = "Yanto";
let namaBelakang = "Kopling";

let namaLengkap = namaDepan.concat(' ',namaBelakang,' keren bgt');
console.log(namaLengkap);

//mengambil index 
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('c'));
console.log(namaLengkap.indexOf('u'));
console.log(namaLengkap.indexOf('u'));

//substring
let namaLengkap_5_12 = namaLengkap.substring(5,12);
console.log(namaLengkap_5_12);
console.log(namaLengkap.substring(12,5));

//slice
console.log(namaLengkap.slice(5,12));
console.log(namaLengkap.slice(12,5)); // jadi kosong

//replace
namaLengkap = namaLengkap.replace('Yanto Kopling','Farhan Gowes');
console.log(namaLengkap);

//toLower
console.log(namaLengkap.toLowerCase());

//uppercase
console.log(namaLengkap.toUpperCase());

//extract data number
let dataSring2 = '10';
console.log(typeof dataString);
let dataInteger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInteger);

let dataString3 = '6.509'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);