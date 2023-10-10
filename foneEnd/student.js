let arr;
function display(){$.ajax({
    url: "http://localhost:8080/api/students",
    type: "GET",
    success: function (data) {
        arr = data
        let content = `<table class="table table-striped"><tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>DateOfBirth</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>ClassRoom</th>
                        <th colspan="2">Action</th>
                        </tr>`
        for (let i = 0; i < arr.length; i++) {
            content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].localDate}</td>
                        <td>${arr[i].email}</td>
                        <td>${arr[i].address}</td>
                        <td>${arr[i].phoneNumber}</td>
                     
                        <td>${arr[i].classRoom.name}</td>
                        <td><button onclick="updateStudent(${arr[i].id})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="deleteStudent(${arr[i].id})" class="btn btn-danger">Delete</button></td>
                        </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    }
})
}
function deleteStudent(id){
    $.ajax({
        url: `http://localhost:8080/api/students/${id}`,
        type: "DELETE",
        success: function () {
            alert("delete success!!!")
            display();
        }
    })
}
function create(){
    window.location.href="create.html"
}
function createPost(){
        let student
        let name = $("#name").val()
        let address = $("#address").val()
        let email = $("#email").val()
        let phone = $("#phone").val()
        let localDate = $("#localDate").val()
        let id = $("#classRoom").val()
            student = {
                name: name,
                email: email,
                phoneNumber: phone,
                address:address,
                localDate:localDate,
                classRoom :{
                    id:id
                }
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/api/students",
            type: "POST",
            data : JSON.stringify(student),
            success: function () {
                alert("Create successfully!")
                window.location.href="homeStudent.html"
            }
        })
        document.getElementById("form").reset()
        event.preventDefault()
}
function updateStudent(id){
    localStorage.setItem("idStudent",id)
    window.location.href="update.html"
}
function updatePost(){
    let student
    let name = $("#name").val()
    let address = $("#address").val()
    let email = $("#email").val()
    let phone = $("#phone").val()
    let localDate = $("#localDate").val()
    let id = $("#classRoom").val()
    let idUpdate = localStorage.getItem("idStudent");
    student = {
        name: name,
        email: email,
        phoneNumber: phone,
        address:address,
        localDate:localDate,
        classRoom :{
            id:id
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/students/${idUpdate}`,
        type: "POST",
        data : JSON.stringify(student),
        success: function () {
            alert("update successfully!")
            window.location.href="homeStudent.html"
        }
    })
    document.getElementById("form").reset()
    event.preventDefault()
}
function back(){
    window.location.href="homeStudent.html"
}
function searchByName(){
    let name =  $(`#nameSearch`).val();
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/students/searchByName/${name}`,
        type: "POST",
        success: function (data) {
            let content = `<table class="table table-striped"><tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>DateOfBirth</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>ClassRoom</th>
                        <th colspan="2">Action</th>
                        </tr>`
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
                        <td>${i + 1}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].localDate}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].address}</td>
                        <td>${data[i].phoneNumber}</td>
                     
                        <td>${data[i].classRoom.name}</td>
                        <td><button onclick="updateStudent(${data[i].id})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="deleteStudent(${data[i].id})" class="btn btn-danger">Delete</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("display").innerHTML = content
        }
    })
}
