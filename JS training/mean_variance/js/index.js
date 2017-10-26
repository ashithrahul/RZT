var list = [1, 2, 3, 4];

total = list.reduce((sum, curentValue) =>   sum + curentValue);
const mean = total/list.length;
console.log("mean :"+mean)

varinceSqure  = list.reduce((sum, curentValue) => sum+Math.pow(mean-curentValue,2),0);
const varince = varinceSqure/(list.length-1);

console.log(varince)