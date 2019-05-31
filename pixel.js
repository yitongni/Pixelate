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
}

function deleteColumn(){
    let table = document.getElementById("table");
    for(let i=0; i<table.rows.length; i++){
        let tr = table.rows[i]
        tr.deleteCell(tr.length-1);
    }
}