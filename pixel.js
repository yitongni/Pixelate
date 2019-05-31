function addRow(){
    console.log("Adding Row");
    let table=document.getElementById("table");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
}

function deleteRow(){
    let table=document.getElementById("table");
    var row = table.deleteRow(table.rows.length-1);
}