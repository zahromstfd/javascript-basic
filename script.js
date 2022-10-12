let fruits = ["Apel", "Mangga", "Semangka", "Anggur", "Pisang"];
document.getElementById("demo").innerHTML = fruits;

// Join methods = Untuk convert string beserta seperate operator
document.getElementById("demo2").innerHTML = fruits.join(" ");

// Pop Methods = untuk menghapus elemen array terakhir
fruits.pop();
document.getElementById("demo3").innerHTML =fruits;

// Push Methods = untuk menambah elemen array terakhir
fruits.push("Kiwi");
document.getElementById("demo4").innerHTML =fruits;

// Shift Methods = untuk menghapus data pada elemen array pertama
fruits.shift();
document.getElementById("demo5").innerHTML =fruits;

// Unshift Methods = untuk menambah data pada elemen array pertama 
fruits.unshift("Buah Naga");
document.getElementById("demo6").innerHTML = fruits;

// Concat Methods = Menggabung 2 data array dengan membuat data array baru
let transportasi_darat = ["Motor", "Mobil" , "Bus"];
let transportasi_umum= ["Pesawat", "Kapal", "Kereta"];

let transportasi2 = transportasi_darat.concat(transportasi_umum);

// ES6 Menggabung data array
let transportasi = [...transportasi_darat,...transportasi_umum];
document.getElementById("demo7").innerHTML = transportasi;

// Data Array Baru
let fashion =["Baju", "Celana", "Sepatu", "Kaos"];
document.getElementById("demo8").innerHTML = fashion;

// Splice Methods = Menambahkan data array pada elemen array yang ditentukan
fashion.splice(2,0,"Sendal");
document.getElementById("demo9").innerHTML =fashion;

// Slice Methods = Menghapus data array pada elemen array yang ditentukan
const remove =fashion.slice(2);
document.getElementById("demo10").innerHTML=remove;
