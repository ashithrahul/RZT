var list = [
    {
        "id": 1,
        "status": 1,
        "inputs": [
            "asd",
            ""
        ],
        "outputs": [
            ""
        ]
    },
    {
        "id": "",
        "status": 1,
        "inputs": [
            "test",
            ""
        ],
        "outputs": [
            ""
        ]
    },
    {
        "id": "",
        "status": 1,
        "inputs": [
            "",
            "test1"
        ],
        "outputs": [
            ""
        ]
    },
    {
        "id": "",
        "status": 1,
        "inputs": [
            "asa",
            ""
        ],
        "outputs": [
            ""
        ]
    }
]

error = list.filter((item) => {
    return (item.inputs === undefined || !item.inputs.filter((input_elemts) => input_elemts !== "").length > 0)
});

if (error.length > 0) {
    console.log("missing the input fields")
} else {
    console.log("input is validated ")
}