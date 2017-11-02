
const readFile = (evt) => {
    let files = evt.target.files;
    let file = files[0];
    let reader = new FileReader();
    reader.onload =  (event) => {
        parseData(event.target.result);
    }
    reader.readAsText(file)
}

const parseData = (data) => {
    const response = data.split('\n').reduce((accumulator, currentRow) => {

        if (currentRow) {

            let columns = currentRow.split(",");
            let detailsList = {};
            detailsList.desc = columns[1];
            detailsList.price = columns[2];
            detailsList.quantity = columns[3];

            if (accumulator[columns[0]]) {
                accumulator[columns[0]].push(detailsList);
            } else {
                accumulator[columns[0]] = [detailsList];
            }
        }

        return accumulator;
    }, {});
    console.log(response)
}

document.getElementById('file').addEventListener('change', readFile, false);
