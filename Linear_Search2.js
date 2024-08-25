let data = [14,56,23,98,47,98,65,98];
let target = 98;
let index = [];

for (let i = 0; i < data.length; i++) {
    if(data[i]==target){
        index[index.length] = i; // stored indexes in an array
    }
}
console.log(index)