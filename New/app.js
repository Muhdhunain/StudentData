var student1 = {
    name: "Mohammad",
    fatherName: "Ali",
    age: 25,
    institute: "SAIMS",
    nationality: "Pakistani",
};
// console.log(student1);

var student1 = {
    name: "Mohammad",
    fatherName: "Ali",
    age: 25,
    institute: "SAIMS",
    nationality: "Pakistani",
};
student1.result = "Pass"
// console.log(student1);

var student2 = {
    name: "Mohammad",
    fatherName: "Hunain",
    age: 25,
    institute: "DJ SCIENCE COLLEGE",
    nationality: "Pakistani",
};
student2.result = "Fail"
// console.log(student2);

var student3 = {
    name: "Mohammad",
    fatherName: "Usman",
    age: 25,
    institute: "GTC COLLEGE",
    nationality: "Pakistani",
};
student3.result = "Pass"
// console.log(student3);

var student4 = {
    name: "Mohammad",
    fatherName: "Bilal",
    age: 25,
    institute: "GOVT. ADAMJEE COLLEGE",
    nationality: "Pakistani",
};
student4.result = "Fail"
// console.log(student4);

var student5 = {
    name: "Mohammad",
    fatherName: "Basit",
    age: 25,
    institute: "GOVT. DEGREE BOYS COLLEGE",
    nationality: "Pakistani",
};
student5.result = "Pass"
// console.log(student5);

var students = [student1, student2, student3, student4, student5];
// console.log(students);

for (var i = 0; i < students.length; i++) {
    students[i].rolNum = i + 1;
    // console.log(students[i]);
}

var tbody = document.getElementById("studentData")
var searchInp = document.getElementById("searchInp")

for (var i = 0; i < students.length; i++) {
    tbody.innerHTML += "<tr><td>" + students[i].rolNum + "</td><td>" + students[i].name + "</td><td>" + students[i].fatherName + "</td><td>" + students[i].result + "</td></tr>";
}

function searchResult() {
    var searchInpValue = searchInp.value
    for (var i = 0; i < students.length; i++) {
        if (searchInpValue == students[i].rolNum || searchInpValue == students[i].fatherName) {
            var stu = students[i];
            var rolN = document.getElementById("rolN")
            var nam = document.getElementById("nam")
            var fname = document.getElementById("fname")
            var res = document.getElementById("res")
            rolN.innerHTML = stu.rolNum;
            nam.innerHTML = stu.name;
            fname.innerHTML = stu.fatherName;
            res.innerHTML = stu.result;
        }
    }
}