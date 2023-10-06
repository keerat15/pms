function assignEmployees() {
    var projectSelect = document.getElementById("project-select");
    var employeeSelect = document.getElementById("employee-select");

    var selectedProject = projectSelect.options[projectSelect.selectedIndex].text;
    var selectedEmployees = [];

    for (var i = 0; i < employeeSelect.options.length; i++) {
        if (employeeSelect.options[i].selected) {
            selectedEmployees.push(employeeSelect.options[i].text);
        }
    }

    displayAssignments(selectedProject, selectedEmployees);
}

function displayAssignments(project, employees) {
    var projectAssignments = document.getElementById("project-assignments");
    var employeeAssignments = document.getElementById("employee-assignments");
    var notification = document.getElementById("notification");

    var projectAssignmentDiv = document.createElement("div");
    projectAssignmentDiv.innerText = "Project Selected:   " + project;
    projectAssignments.appendChild(projectAssignmentDiv);


    employees.forEach(function(employee) {
        var employeeAssignmentDiv = document.createElement("div");
      
employees.forEach(function(employee) {
    var employeeAssignmentDiv = document.createElement("div");
    employeeAssignmentDiv.innerHTML = "Employee Selected: " + employee + "<br>" + project + " is assigned to " + employee ;
    employeeAssignments.appendChild(employeeAssignmentDiv);
});

        employeeAssignments.appendChild(employeeAssignmentDiv);
    });

    notification.innerText = employees + " assigned to " + project + " has been notified via mail.";
}
