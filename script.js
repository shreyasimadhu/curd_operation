var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["eq"] = document.getElementById("eq").value;
    formData["skills"] = document.getElementById("skills").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.dob;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = data.gender;
    cell4 = newRow.insertCell(5);
        cell4.innerHTML = data.eq;
    cell4 = newRow.insertCell(6);
        cell4.innerHTML = data.skills;
    cell4 = newRow.insertCell(7);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[4].innerHTML;
    document.getElementById("eq").value = selectedRow.cells[5].innerHTML;
    document.getElementById("skills").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.gender;
    selectedRow.cells[5].innerHTML = formData.eq;
    selectedRow.cells[6].innerHTML = formData.skills;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("number").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("eq").value = '';
    document.getElementById("skills").value = '';
    selectedRow = null;
}
