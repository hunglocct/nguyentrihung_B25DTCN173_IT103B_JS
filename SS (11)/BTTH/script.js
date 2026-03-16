const students = [
    { id: 1, name: "Nguyen Van An", age: 20, gpa: 8.5, status: "active" },
    { id: 2, name: "Tran Thi Bich", age: 17, gpa: 7.2, status: "active" },
    { id: 3, name: "Le Hoang Cuong", age: 22, gpa: 9.1, status: "inactive" },
    { id: 4, name: "Pham Thi Dung", age: 19, gpa: 6.8, status: "active" }
];
function CreateStudent() {
    let names = prompt("Nhap ten")
    if (names == "") {
        return alert(`khong duoc de trong`)
    }
    let ages = parseInt(prompt("Nhap tuoi"))
    if (ages == "" || ages > 100) {
        return alert(`nhap loi`)
    }
    let gpas = parseFloat(prompt("Nhap gda"))
    if (gpas == "" || gpas > 10 || gpas < 0) {
        return alert(`nhap loi`)
    }
    let statuss = prompt("trang thai")
    if (statuss == "") {
        return alert(`nhap loi`)
    }
    let opp = {
        id: students.length + 1,
        name: names,
        age: ages,
        gpa: gpas,
        status: statuss
    }
    students.push(opp)
}


console.log(students);
let dis = []
function display(params) {
    for (let i = 0; i < students.length; i++) {
        dis[i] = `ID:${students[i].id} | Ten: ${students[i].name}| Tuoi: ${students[i].age} | GDA: ${students[i].gpa} | Trang thai: ${students[i].status}`

    }
    alert(dis.join("\n"));
}

let dsg = [], k = 0
function Scholarship(params) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].gpa >= 8) {
            dsg[k] = `ID:${students[i].id} | Ten: ${students[i].name} | GDA: ${students[i].gpa} | Trang thai: ${students[i].status}`
            k++
        }


    }
    alert(dsg.join("\n"));
}
function Update(params) {
    let nhap = +prompt("Nhap id can tim")
    if (nhap == "") {
        return alert(`Nhap loi`)
    } else {
        let index = students.findIndex(student => student.id === nhap);
        alert(`${index}`)
        if (index == -1) {
            return alert("Khong tim thay")
        } else {
            let names = prompt("Nhap ten")
            if (names == "") {
                return alert(`khong duoc de trong`)
            }
            let ages = parseInt(prompt("Nhap tuoi"))
            if (ages > 100) {
                return alert(`nhap loi`)
            }
            students[index].name = names;
            students[index].age = ages;

        }
    }
}
function deletel(params) {
    let nhap = +prompt("Nhap id can xoá")
    if (nhap == "") {
        return alert(`Nhap loi`)
    } else {
        let index = students.findIndex(student => student.id === nhap);
        alert(`${index}`)
        if (index == -1) {
            return alert("Khong tim thay")
        } else {
            students.splice(index, 1)
            alert("Da xoa")



        }
    }
}


function compliance(params) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].age < 18) {
            alert(`<18true`);
            break;
        } else {
            alert(`<18false`)
            break
        }

    }
    for (let i = 0; i < students.length; i++) {
        if (students[i].status == "inactive") {
            alert(`active false`)
            break
        } else {
            alert(`active true`)
            break
        }
    }
}

function academic(params) {
    let sum = 0, ave
    for (let index = 0; index < students.length; index++) {

        sum += students[index].gpa;
    }
    ave = sum / students.length
    alert(`TB gda: ${ave}`)
}

function normalization(params) {
    for (let index = 0; index < students.length; index++) {
        students[index].name = students[index].name.toUpperCase()

    }
}

console.log(students);

function menu() {
    let choice;

    do {
        choice = prompt(`
======== STUDENT MANAGEMENT ========
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
0. Exit
Nhap lua chon:
        `);

        switch (choice) {
            case "1":
                CreateStudent();
                break;

            case "2":
                display();
                break;

            case "3":
                Scholarship();
                break;

            case "4":
                Update();
                break;

            case "5":
                deletel();
                break;

            case "6":
                compliance();
                break;

            case "7":
                academic();
                break;

            case "8":
                normalization();
                alert("IN HOA");
                break;

            case "0":
                alert("Thoat chuong trinh");
                break;

            default:
                alert("Lua chon khong hop le");
        }

    } while (choice !== "0");
}

menu();