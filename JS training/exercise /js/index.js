/*****************  1 subquestion  *****************/

/* input array */
var input = ["vinoj, arjun", "dixy", "amala"];

/* input itreation loop start*/
var output = input.reduce(function(accumulator, currentValue){

    //spliting  each item with "," return array merge it with accumulator
    return accumulator.concat(currentValue.split(","));

},[]);
/* input itreation loop end */


console.log(output);





/*****************  2 subquestion  *****************/

/* input array */
var input = [ [{name: "vinoj"}, {name: "dixy"}], {name: "amala"}, {name: "arjun"}];

/* input itreation loop start*/
var output = input.reduce(function(accumulator, currentValue){
    return accumulator.concat(currentValue);
},[]);
/* input itreation loop end */

console.log(JSON.stringify(output));

