var list =
    [
        {title: "A", checked: false},
        {title: "B", checked: true},
        {title: "C", checked: false},
        {title: "D", checked: true},
        {title: "E", checked: false},
        {title: "F", checked: true}];

list.sort((a, b) => (a.checked !== b.checked) ? (!a.checked) : a.title > b.title);
console.log(list);

