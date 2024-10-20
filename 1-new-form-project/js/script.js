const form = document.getElementById("my-form");
const btn = document.getElementById("submit");
const customIframe = document.getElementById("custom-iframe");
const button = document.getElementById("btn");

//form fields
const formName = document.getElementById('form-name');
const formAge = document.getElementById('form-age');
const formAddress = document.getElementById('form-address');


let flag = true;
function validaForm() {

    if (formName.value == "") {
        document.getElementById("formNameError").innerHTML = "name is empty";
        flag = false;
    } else {
        document.getElementById("formNameError").innerHTML = "";
        flag = true
    }
    if (formAge.value == "") {
        document.getElementById("formAgeError").innerHTML = "age  is empty";
        flag = false
    } else {
        document.getElementById("formAgeError").innerHTML = "";
        flag = true;
    }

    if (formAddress.value == "") {
        document.getElementById("formAddessError").innerHTML = "Address  is empty";
        flag = false;
    } else {
        document.getElementById("formAddessError").innerHTML = "";
        flag = true;
    }


    if (flag) {
        return true;
    } else {
        return false
    }
}

function handleEvent(e) {
    e.preventDefault();

    const data = {
        userName: formName.value,
        userAge: formAge.value,
        userAddress: formAddress.value,
    }

    // console.log(data);
    // addEntry(validaForm())
    addEntry(data);
    formName.value = "";
    formAge.value = "";
    formAddress.value = "";
}

form.addEventListener("submit", handleEvent);

function addEntry(data) {
    const tr = createElement('tr');
    const userName = createElement('td');
    const userAge = createElement('td');
    const userAddress = createElement('td');

    userName.innerText = data.userName;
    userAge.innerText = data.userAge;
    userAddress.innerText = data.userAddress;

    tr.append(userName, userAge, userAddress);
    const table = customIframe.children[0];
    table.append(tr);
    

    let storeData = JSON.parse(localStorage.getItem("DataEntry")) || [];
    storeData.push(data);
    localStorage.setItem("DataEntry", JSON.stringify(storeData));


}

btn.addEventListener("click", saveData)
function saveData() {

    localStorage.setItem("DataEntry",JSON.stringify([]))
   }

button.addEventListener("click", AddDate);

function AddDate() {

    let data1 = localStorage.getItem("DataEntry");
    console.log(JSON.parse(data1));
}
function createElement(name) {
    const ele = document.createElement(name);
    return ele;
}



