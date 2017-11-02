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
]

// getParent () {
//     {
//         [parent] : {
//             getParent()
//     }
//     }
// }
var tree = {};

// const getTree = (id) => {
//     x = categories.filter((category)=>{
//         return category.id == id;
//     })
//     let current_id = x.parent;
//     return {
//         //getTree(current_id):id
//     }
// }

function getTree(parent_ids = ['E-commerce']) {
//console.log(parent_ids);
var child_node = {}
parent_ids.forEach((parent_id) => {
    let childs = categories.filter((categorie) => {
        return categorie.parent == parent_id;
    }).map((item) => {
        return item;
    })
    if (childs.length > 0) {
        console.log(parent_id,"=>",childs);
        if (child_node[parent_id]) {
            child_node[parent_id].push(childs);
        } else {
            child_node[parent_id] = [getTree(childs)];
        }
        //getTree(childs);
    }
})
// if(Object.keys(child_node).length == 0)
//     console.log(child_node);
//return tree;


}
// categories.map((category) => {
//     getTree(category.id)
// })

getTree();
//console.log(tree);
