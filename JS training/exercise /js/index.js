/*****************  1 subquestion  *****************/

/* input array */
const input_first = ["vinoj, arjun", "dixy", "amala"];
/* input itreation loop start*/
const output_first = input_first.reduce((accumulator, currentValue)=>{

    //spliting  each item with "," return array merge it with accumulator
    return accumulator.concat(currentValue.split(","));

},[]);
/* input itreation loop end */


console.log(output_first);


/*****************  2 subquestion  *****************/

/* input array */
const input_second = [ [{name: "vinoj"}, {name: "dixy"}], {name: "amala"}, {name: "arjun"}];

/* input itreation loop start*/
const output_second = input_second.reduce((accumulator, currentValue)=>{
    return accumulator.concat(currentValue);
},[]);
/* input itreation loop end */

console.log(JSON.stringify(output_second));

