
/*
class person start

params:type
    name:string
    people_tree:object
    age_tree:object

*/

class Person{

    constructor(name,people_tree,age_tree){
        this.name = name;
        this.ancestors = this.getAncestors(name,people_tree);
        this.ages = this.getAges(this.ancestors,age_tree);
    }

    /*

    Toget the ancestors array
    params:
        name:string
        people_tree:object
    output params:
        array

     */

    getAncestors(name,people_tree){
        var response=[];
        response.push(name)
        for(var key in people_tree){
            if(response.indexOf(key) != -1){
                response.push(people_tree[key])
            }
        }
        return response;
    }
    /* get ancestors end */

    /*
        Toget the age array

        params:type
            name:string
            people_tree:object
        output params:
            array

         */
    getAges(ancestors,ages){
        var x = ancestors.map(function (ancestor, index, array) {
            if(ancestor !='undefined' && ages[ancestor]){
                return ages[ancestor];
            }
        });
        return x;
    }
    /* get age end */
}

/* class person end */

var peopleTree = {
    "sandeep": "shashi",
    "nanha": "shashi",
    "harish": "nanha",
    "divya": "harish",
    "arjun": "sandeep",
    "shashi": "vinoj",
    "vishal": "divya"
}
var ages = {
    'sandeep': 23,
    'shashi': 26,
    'nanha': 22,
    'harish': 24,
    'divya': 30,
    'arjun': 25,
    'vinoj': 26,
    'vishal': 5
}

var sandeep = new Person('sandeep', peopleTree, ages);
console.log(sandeep.ancestors);