// What is the input to the program
// What is the output of the program
// What is the input to each recursive calls
// What is the output of each recursive calls

// Counting Sheep
// function sheep(num) {
//     if(num === 0) {
//         return;
//     }
//     console.log(`${num} - Another sheep jump over the fence`);
//     sheep(num -1);
// }
// sheep(3);

//Array Double
function double(arr) {
    if(arr.length === 0) {
        return;
    }
    console.log(arr[0] * 2) 
    return double(arr.slice(1));
}
double([2,3,4]);