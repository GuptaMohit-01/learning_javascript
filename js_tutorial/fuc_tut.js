 // Global scope

function printvalues(){ 
    // No redeclaration of 'b' here.
    var a = 1;
    const b = ""
    let c = 4;
    return{a,b,c}; // Using the global 'b'
}

console.log(typeof printvalues())
console.log(printvalues())

