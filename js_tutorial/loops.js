// for loops
for (let i = 0; i <10 ; i++) {
    const element = i;
    // console.log(element)
    
} 
for (let i = 1; i < 11; i++) {
    // const element = array[i];
    // console.log(i)
    for (let j = 1; j < 11; j++) {
        // const element = array[j];
        // console.log(j)
        // console.log(i+'x'+ j + '='+ i*j)
        
    }
    // console.log("\n")

}
// while (condition) {
    
// }
// do (condition){

//     while (condition) {
        
//     }
// }
const mynums =[1,2,3,88,66,5,45,78,65,555]
const myindex = mynums.map((nums, index) =>{ return `Index: ${index+1}, Value: ${nums+2}`});
console.log(myindex)