let data_one = [5,8,11,15,19,22,30]
let data_two = [6,9,13,17]
let data_three = [];
let d1=0;
let d2=0
let d3 = 0;

while (d1<data_one.length && d2<data_two.length) {
    if(data_one[d1]<data_two[d2]){
        data_three[d3] = data_one[d1]
        d1++;
    } else{
        data_three[d3] = data_two[d2];
        d2++;
    }
    d3++;
}
while (d1<data_one.length) {
    data_three[d3]=data_one[d1];
    d1++;
    d3++;
}
console.log(data_three)