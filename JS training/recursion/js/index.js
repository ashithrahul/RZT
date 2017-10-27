const categories =[
    { id: 'E-commerce', parent: null },
    { id: 'Electronics', parent: 'E-commerce' },
    { id: 'Mobiles', parent: 'Electronics' },
    { id: 'Laptops', parent: 'Electronics' },
    { id: 'Camera', parent: 'Electronics' },
    { id: 'Lifestyle', parent: 'E-commerce' },
    { id: 'Clothing', parent: 'Lifestyle' },
    { id: 'Footware', parent: 'Lifestyle' },
    { id: 'Grooming', parent: 'Lifestyle' },
    { id: 'Jewellery', parent: 'Lifestyle' },
]

function getTree(categories,parent_id = null){
    let tree = [];
    categories.forEach((categorie)=>{
        let child =[];
        if(categorie.id === parent_id || parent_id === null)
            child = getTree(categories, categorie.id);
            if (child.length > 0)
                tree[categorie.id] = child;
});
    return tree;
}

console.log(getTree(categories));