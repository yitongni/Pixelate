function addRow() {
    let table = document.getElementById("table");
    let row = table.insertRow(table.size);
    let icell = row.insertCell(0);
    icell.addEventListener("click", function () { icell.style.backgroundColor = "yellow"; });

    let cells = table.rows[0].cells;

    //for each column - add a row
    for (let i = 1; i < cells.length; i++) {
        let cell = row.insertCell(0);
        cell.addEventListener("click", function () { cell.style.backgroundColor = "yellow"; });
    }
}

function deleteRow() {
    let table = document.getElementById("table");
    table.deleteRow(table.rows.length - 1);
}

function addColumn() {
    let table = document.getElementById("table");

    for (let i = 0; i < table.rows.length; i++) {
        let tr = table.rows[i];
        let cell = tr.insertCell(tr.length);
        cell.addEventListener("click", function () { cell.style.backgroundColor = "yellow"; });
    }
}