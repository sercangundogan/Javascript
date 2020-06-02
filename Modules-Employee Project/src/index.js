// Başına export yazılan Request Class'ını import ile dahil ettik.
import {Request} from "./requests"
// UI Class'ını ui.js'den dahil edeceğiz.
import {UI} from "./ui"


// Elementleri Seçme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");


// Request Class'ında objeyi oluşturmak (url'yi verdik -> Json Server)
const request = new Request("http://localhost:3000/employees");

// Get Fonksiyonunu denedik -> Sıkıntı yok
// request.get()
// .then(employees => console.log(employees))
// .catch(err => console.log(err));


// Post Fonksiyonunu Denedik -> Çok fazla yeniden başlatıldığı için toplamda 5 adet aynı objeden oluşturdu :)
// request.post({name: "Serhat Say", departmen: "Pazarlama", salary: 6000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));


// Put Fonksiyonunu Denedik -> Sıkıntı Yok
// request.put(1, {name: "Serhat Say", departmen: "Bilişim", salary: 3000})
// .then(employee => console.log(employee))
// .catch(err => console.log(err));

// Delete Fonksiyonunu Denedik -> Sıkıntı yok
// request.delete(3)
// .then(message => console.log(message))
// .catch(err => console.log(err));


const ui = new UI();


// Update Kısmı için gerekli obje-> Güncelle butonuna basıldığında bilgileri tutacak
let updateState = null;


eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",getAllEmployees);
    document.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", updateOrDelete);
    updateEmployeeButton.addEventListener("click", updateEmployee);
}

// Sayfa Yüklenince Tüm çalışanlar arayüzde görünecek
function getAllEmployees(){
    request.get()
    .then(employees => {
        ui.addAllEmployeeToUI(employees)
    })
    .catch(err => console.log(err));
}


// Form Submit edildiğinde, employee eklenecek
function addEmployee(e){
    // formdaki bilgileri alıyoruz, trim ile boşluları kaldırıyoruz.
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();


    if (employeeName === "" || employeeDepartment === ""|| employeeSalary === ""){
        alert("Lütfen Tüm Alanları Doldurun")
    }else {
        request.post({name: employeeName, department: employeeDepartment, salary: Number(employeeSalary)})
        .then(employee => {
            ui.addEmployeeToUI(employee)
        })
        .catch(err => console.log(err));
    }



    // Girilen Inputları Butona Basınca Temizlemek
    ui.clearInputs()

    // Butona tıklanınca sayfa yenilenmesin
    e.preventDefault();
}


// Güncelleme ya da Silme Butonuna Tıklandığında çalışan fonksiyon
function updateOrDelete(e){
    if(e.target.id === "delete-employee") {
        // Silme işlemi
        deleteEmployee(e.target);

    }else if (e.target.id === "update-employee") {
        // Güncelleme işlemi
        updateEmployeeController(e.target.parentElement.parentElement);
    }
}

function deleteEmployee(targetEmployee){
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;

    request.delete(id)
    .then(message => {
        ui.deleteEmployeeFromUI(targetEmployee.parentElement.parentElement);
    })
    .catch(err => console.log(err));
}

function updateEmployeeController(targetEmployee){
    ui.togggleUpdateButton(targetEmployee);

    if (updateState === null) {
        updateState = {
            // tr elementinden id yi aldık
            updateId : targetEmployee.children[3].textContent,
            updateParent : targetEmployee
        }
    } else {
        updateState = null;
    }
}

function updateEmployee(){
    if (updateState) {
        // Null Değilse Güncelleme İşlemi
        const data = {name: nameInput.value.trim(), department: departmentInput.value.trim(), salary : Number(salaryInput.value.trim())}

        request.put(updateState.updateId, data)
        .then(updatedEmployee => {
            ui.updateEmployeeOnUI(updatedEmployee, updateState.updateParent)
        })
        .catch(err => console.log(err));
    }
    
}