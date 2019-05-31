function addRow() {
    let table = document.getElementById("table");
    var row = table.insertRow(table.size);
    row.insertCell(0);

    var cells = table.rows[0].cells;

    //for each column - add a row
    for (let i = 1; i < cells.length; i++) {
        row.insertCell(0);
    }
}

function deleteRow(){
    let table=document.getElementById("table");
    table.deleteRow(table.rows.length-1);
}

function addColumn() {
    let table = document.getElementById("table");
    let tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        var cell = tr[i].insertCell(0);
    }


    // let row = table.insertColumn(table.columns.size);
    // let cell = column.insertCell(0);
    // cell.bgColor = "Blue"
    // cell.style.width = "50px"
    // cell.style.height = "50px"
}