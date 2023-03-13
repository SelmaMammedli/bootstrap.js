let input1 = document.querySelector("input");
let addStudent = document.querySelector("button");
let showStudent = document.querySelector("table");



addStudent.addEventListener("click", function(){
    showStudent.textContent += "<tr>${input.value}</tr>";
    input.value = " ";
    
})

