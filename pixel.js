function addRow() {
    let table = document.getElementById("table");
    let td = table.getElementsByTagName("td");
    let td = table.getElementsByTagName("td");
    var row = table.insertRow(table.size);
    var cell1 = row.insertCell(0);
    cell1.bgColor = "Blue"
    cell1.style.width = "50px"
    cell1.style.height = "50px"

    //for each column - add a row
    for (let i = 0; i < td.length; i++) {
        var cell1 = td[i].insertCell(0);
        cell1.bgColor = "Blue"
        cell1.style.width = "50px"
        cell1.style.height = "50px"
    }


    // var tr = table.insertRow(table.size);
    // let td = table.getElementsByTagName("td");

    // if (tr.length === 0) {
    //     var cell1 = tr.insertCell(0);
    //     cell1.bgColor = "Blue"
    //     cell1.style.width = "50px"
    //     cell1.style.height = "50px"
    // }
    // else {
    //     for (let i = 0; i < td.length; i++) {
    //         var cell1 = tr.insertCell(0);
    //         cell1.bgColor = "Blue"
    //         cell1.style.width = "50px"
    //         cell1.style.height = "50px"
    //     }
    // }

}

function addColumn() {
    let table = document.getElementById("table");
    let tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        var cell = tr[i].insertCell(0);
        cell.bgColor = "Blue"
        cell.style.width = "50px"
        cell.style.height = "50px"
    }


    // let row = table.insertColumn(table.columns.size);
    // let cell = column.insertCell(0);
    // cell.bgColor = "Blue"
    // cell.style.width = "50px"
    // cell.style.height = "50px"
}