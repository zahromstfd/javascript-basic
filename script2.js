let x = myFunction(4,3);

function myFunction(a,b){
    console.log(a*b);
}

let user = fullName("Zahrotul")

function fullName(fname){
    console.log(fname);
}

function myName ({fname,lname,email}){
    const fullName = `${fname}${lname}${email}`;
    console.log(fullName);
}

myName({fname: 'Zahro', lname: 'tul', email: 'zahro@gmail.com'});