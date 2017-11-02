const categories = [
    {id: 'E-commerce', parent: null},
    {id: 'Electronics', parent: 'E-commerce'},
    {id: 'Mobiles', parent: 'Electronics'},
    {id: 'Laptops', parent: 'Electronics'},
    {id: 'Camera', parent: 'Electronics'},
    {id: 'Lifestyle', parent: 'E-commerce'},
    {id: 'Clothing', parent: 'Lifestyle'},
    {id: 'Footware', parent: 'Lifestyle'},
    {id: 'Grooming', parent: 'Lifestyle'},
    {id: 'Jewellery', parent: 'Lifestyle'},
];

// let tree = {};
//
// const getTree = (categories, parent_id = 'E-commerce') => {
//     let child_node = {};
//     let children = categories.filter((category) => category.parent === parent_id)
//     console.log("parent_id",children)
//     x=children.reduce((acc, curr) => {
//         child_node[parent_id] = {};
//        // console.log(child_node);
//         getTree(categories, curr.id);
//         return Object.assign(acc,child_node);
// }, {});
//     console.log(x)
//
// }
//
// getTree(categories);
// //console.log(tree)



const createObject = ((data, parentId) => {

        let childObj = data.filter((line) => line.parent == parentId);
        const result = childObj.reduce((obj, value) => {
            obj[value.id] = createObject(data, value.id)
            return obj;
        }, {});
        return result;
    });

console.log("Result", createObject(categories));

//
//
// const findFactorial = ((number) => {
//     return (number == 0) ? 1 : number * findFactorial(number - 1);
// });
//
// console.log(findFactorial(3));
//
// const findFibonacci = ((number) => {
//
// })