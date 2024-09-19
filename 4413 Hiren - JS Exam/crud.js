let record = []

// For record input
const veiwRecord =()=>{
    document.getElementById("submit").style.display = "block"
    document.getElementById("edit").style.display = "none"
    let tbl = ""

    record.map((val,id)=>{
        tbl += `
            <tr>
                <td>
                  ${val.firstName}
                </td>
                <td>
                  ${val.lastName}
                </td>
                <td>
                  ${val.age}
                </td>
                <td>
                  ${val.position}
                </td>
                <td>
                  ${val.salery}
                </td>
                <td>
                  <input type='button' value='Edit employee' onclick='showRecord(${val.userid})'/>
                </td>
                <td>
                  <input type='button' value='Delete user' onclick='deleteRecord(${val.userid})' style='background-color:red' />
                </td>
            </tr>
        `;
        document.getElementById("tbody").innerHTML = tbl
    })
}
veiwRecord()

// dynamic code
const addRecord = () => {
    let fname = document.getElementById("first_name").value
    let lname = document.getElementById("last_name").value
    let employeAge = document.getElementById("Age").value
    let posi = document.getElementById("position").value
    let income = document.getElementById("salary").value

    if(!fname || !lname || !employeAge || !posi || !income){
        alert("All Feild Required...!")
        return false;
    }

    let obj = {
        userid : Math.floor(Math.random()*10000), 
        firstName: fname,
        lastName: lname,
        age: employeAge,
        position: posi,
        salery: income,
    }

    record.push(obj);

    document.getElementById("userId").value = ""
    document.getElementById("first_name").value = ""
    document.getElementById("last_name").value = ""
    document.getElementById("Age").value = ""
    document.getElementById("position").value = ""
    document.getElementById("salary").value = ""

    veiwRecord()
}

// delete Fuction
const deleteRecord = (id) => {
    let deleteData = record.filter((item)=> item.userid !== id)

    record = deleteData;
    veiwRecord();
}

// function for show user detail
const showRecord = (Id) =>{
    document.getElementById("submit").style.display = "none"
    document.getElementById("edit").style.display = "block"

    let data = record.find((val)=> val.userid == Id)

    document.getElementById("userId").value = data.userid
    document.getElementById("first_name").value = data.firstName
    document.getElementById("last_name").value = data.lastName
    document.getElementById("Age").value = data.age
    document.getElementById("position").value = data.position
    document.getElementById("salary").value = data.salery
}

// edit function 
const editRecord = () => {
    let editId = document.getElementById("userId").value
    let fname = document.getElementById("first_name").value
    let lname = document.getElementById("last_name").value
    let employeAge = document.getElementById("Age").value
    let posi = document.getElementById("position").value
    let income = document.getElementById("salary").value

    let upload = record.map((val) => {
        if(val.userid == editId){
            val.firstName = fname
            val.lastName = lname
            val.age = employeAge
            val.position = posi
            val.salery = income
        }
        return val;
    })

    record = upload ;
    alert("Update SuccessFully..!")

    document.getElementById("userId").value = ""
    document.getElementById("first_name").value = ""
    document.getElementById("last_name").value = ""
    document.getElementById("Age").value = ""
    document.getElementById("position").value = ""
    document.getElementById("salary").value = ""

    veiwRecord()
}