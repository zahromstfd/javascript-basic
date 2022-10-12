// function untuk memanggil input value dari form
function inputValue(){
    // varibel untuk memanggil id dari input type
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const list = document.getElementById("list");

    // menampilkan value dalam bentuk list di elemen HTML
    list.innerHTML += 
    `<li>
        <p>${name}</p>
        <p>${email}</p>
    </li>`;

    console.log(name);
}

// Penulisan function dalam es6
const onSubmit = (event) => {
    // disable refresh otomatis pada browser
    event.preventDefault();
    // variabel untuk memanggil id pada input type
    const {name,nohp} = event.target;

    // menampilkan value dalam bentuk list di elemen HTML
    listuser.innerHTML += 
    `<li>
        <p>${name.value}</p>
        <p>${nohp.value}</p>
    </il>`
}

// Salah satu Event pada button
addEventListener("submit",onSubmit);


let text ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let buah ="apel, mangga, semangka";

let upperCase = "hElLo wOrlD !"

// Slice methods
document.getElementById("demo").innerHTML = buah.slice(6,12)

// Convert ke huruf kecil semua
document.getElementById("string").innerHTML = upperCase.toLowerCase();
