function addRow(){
    console.log("Adding Row");
    let table=document.getElementById("table");
    var row = table.insertRow(table.size);
    var cell1 = row.insertCell(0);
    cell1.bgColor="Blue"
}