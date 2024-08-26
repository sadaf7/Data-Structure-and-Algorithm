let data_one = [1,3,56,7,89,5,6]
let data_two = [2,8,9,78,14,65,32]
let data_three = []
for (let i = 0; i < data_one.length; i++) {
    data_three[i]=data_one[i]
}
for (let i = 0; i < data_two.length; i++) {
    data_three[data_one.length+i]=data_two[i]
}
console.log(data_three)

// merging default func
// data_three = [...data_one,...data_two]
// console.log(data_three)

// reverse default func
// data_three = [...data_one,...data_two]
// console.log(data_three.reverse())