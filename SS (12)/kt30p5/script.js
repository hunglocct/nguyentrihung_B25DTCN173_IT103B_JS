let students = [
    { id: 1, name: "Nguyen Văn A", score: 8.5, gender: "Nam" },
    { id: 2, name: "Trân Thị B", score: 4.2, gender: "Nữ" },
    { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
    { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
    { id: 5, name: "Hoang Văn E", score: 3.8, gender: "Nam" }
];
let girl = []
function girlut(params) {
    let k = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i].gender == "Nữ") {
            girl[k] = students[i]
            k++
        }

    }

    for (let i = 0; i < girl.length - 1; i++) {
        for (let j = 0; j < girl.length - 1 - i; j++) {
            if (girl[j].score < girl[j + 1].score) {
                let temp = girl[j];
                girl[j] = girl[j + 1];
                girl[j + 1] = temp;

            }
        }
    }
    console.log(girl);
}
girlut();
let vuot = []
function vuotqua() {
    let k = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i].score > 5.0) {
            let nhap = students[i].name
            vuot[k] = nhap
            k++
        }

    }
    console.log(vuot);
}
vuotqua()
let sum = 0, ave
function tb(params) {
    let k = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i].gender == "Nam") {
            sum += students[i].score
            k++
        }

    }
    ave = sum / k
    console.log(ave);
}
tb()
