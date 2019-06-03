function changeColorOfCell(cell){
    cell.style.backgroundColor = document.getElementById("Colors").value;
}


function changeColorOnHover(){
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        for(let j=0; j<table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            cell.addEventListener("mouseover", function () { changeColorOfCell(cell) });
        }
    }
}

function removeOnHover(){
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        for(let j=0; j<table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            cell.removeEventListener("mouseover", function () {});
        }
    }
}

function addRow() {
    let table = document.getElementById("table");
    let row = table.insertRow(table.size);
    let icell = row.insertCell(0);
    icell.addEventListener("click", function () { changeColorOfCell(icell) });
    //icell.addEventListener("mouseover", function () { icell.style.backgroundColor = "yellow"; });
    icell.addEventListener("mousedown", function () {changeColorOnHover()});
    icell.addEventListener("mouseup", function () {removeOnHover()});

    let cells = table.rows[0].cells;

    //for each column - add a row
    for (let i = 1; i < cells.length; i++) {
        let cell = row.insertCell(0);
        cell.addEventListener("click", function () { changeColorOfCell(cell) });
        //cell.addEventListener("mouseover", function () { cell.style.backgroundColor = "yellow"; });
        cell.addEventListener("mousedown", function () {changeColorOnHover()});
        cell.addEventListener("mouseup", function () {removeOnHover()});
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
        cell.addEventListener("click", function () { changeColorOfCell(icell) });
        //cell.addEventListener("mouseover", function () { cell.style.backgroundColor = "yellow"; });
        cell.addEventListener("mousedown", function () {changeColorOnHover()});
        cell.addEventListener("mouseup", function () {removeOnHover()});
    }
}

function deleteColumn() {
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
        let tr = table.rows[i]
        tr.deleteCell(tr.length - 1);
    }
}

function restoreCellsToOriginalColor(){
    console.log("Restoring");
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
       
        for(let j=0; j<table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            cell.style.backgroundColor="rgb(27, 150, 152)";
        }
    }
}

function fillCellsWithSelectedColor(){
    console.log("Filling");
    let table = document.getElementById("table");
    for (let i = 0; i < table.rows.length; i++) {
       
        for(let j=0; j<table.rows[i].cells.length; j++){
            let cell = table.rows[i].cells[j];
            cell.style.backgroundColor="yellow";
        }
    }
}

