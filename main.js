/* Assign task list array & DOM elements */
let tasks = [] ;
let tableData = document.getElementById("data-table")
let inputTask = document.getElementById("task_input")
let emptyData = `<div class="row"><div class="cell">لايوجد</div><div class="cell">لايوجد</div><div class="cell">لايوجد</div><div class="cell"><input type="button" class="buttonInput button-red" value="مسح" onclick=""></div></div>`
/* Assign task Functions */

let addTask = function () {
    if (inputTask.value != "")  {
        let data = {
            name : inputTask.value,
            date : getTime()
        };
        tasks.push(data)
        inputTask.value ="";
        refreshTable();
    } else {
        alert("املأ الفراغات اولا")
    }
}

let deleteTask = function (id) {
    tasks.splice(id, 1);
    refreshTable();
    if (tasks.length == 0) {
        tableData.innerHTML = emptyData;
        console.log("Last item")
    }
}
 
let refreshTable = function () {
    tableData.innerHTML = "";
    tasks.forEach(function (task, index) {
        tableData.innerHTML += `
            <div class="row">
                <div class="cell">
                    ${index}
                </div>
                <div class="cell">
                    ${task.name}
                </div>
                <div class="cell">
                ${task.date}
                </div>
                <div class="cell">
                    <input type="button" class="buttonInput button-red" value="مسح" onclick="deleteTask(${index})">
                </div>
            </div>
    ` ;
 });
}

let getTime = function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}