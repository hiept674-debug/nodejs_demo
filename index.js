function showinfo(name,age){
    console.log(`Name: ${name}, Age ${age}`)
    
}


function calcAge(birth_year){
    const current_year = new Date().getFullYear();
    return current_year - birth_year
}

let name = "Hiep"
let birth_year = 2005
let age = calcAge(birth_year)
showinfo(name,age)