// function to generate line chart
function generateLineChart(employees) {
  // get the canvas element
  var ctx = document.getElementById("line").getContext("2d");

  // create data array for regular hours
  var regularHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    regularHoursData.push(employees[i].regularHours);
  }

  // create data array for overtime hours
  var overtimeHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    overtimeHoursData.push(employees[i].overtimeHours);
  }

  // create data array for vacation hours
  var vacationHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    vacationHoursData.push(employees[i].vacationHours);
  }

  // create the chart
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Hasnain Moore",
        "Abraham Cooper",
        "Flynn Anthony",
        "Alivia Forbes",
      ],
      datasets: [
        {
          label: "Regular Hours",
          data: regularHoursData,
          borderColor: "#3e95cd",
          fill: false,
        },
        {
          label: "Overtime Hours",
          data: overtimeHoursData,
          borderColor: "#8e5ea2",
          fill: false,
        },
        {
          label: "Vacation Hours",
          data: vacationHoursData,
          borderColor: "#3cba9f",
          fill: false,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Employee Hours",
      },
    },
  });
}

// function to generate bar chart
function generateBarChart(employees) {
  // get the canvas element
  var ctx = document.getElementById("bar").getContext("2d");

  // create data array for regular hours
  var regularHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    regularHoursData.push(employees[i].regularHours);
  }

  // create data array for overtime hours
  var overtimeHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    overtimeHoursData.push(employees[i].overtimeHours);
  }

  // create data array for vacation hours
  var vacationHoursData = [];
  for (var i = 0; i < employees.length; i++) {
    vacationHoursData.push(employees[i].vacationHours);
  }

  // create the chart
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Hasnain Moore",
        "Abraham Cooper",
        "Flynn Anthony",
        "Alivia Forbes",
      ],
      datasets: [
        {
          label: "Regular Hours",
          data: regularHoursData,
          backgroundColor: "#3e95cd",
        },
        {
          label: "Overtime Hours",
          data: overtimeHoursData,
          backgroundColor: "#8e5ea2",
        },
        {
          label: "Vacation Hours",
          data: vacationHoursData,
          backgroundColor: "#3cba9f",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Employee Hours",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  });
}

// create a new AJAX request to load the JSON data
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var employees = JSON.parse(this.responseText).employees;
    generateLineChart(employees);
    generateBarChart(employees);
  }
};
xhttp.open("GET", "timesheet.json", true);
xhttp.send();

//-------------------------------------------------JSON API-------------------------------------------------//

// function to generate pie chart
function generatePieChart(data) {
  // get the canvas element
  var ctx = document.getElementById("pie").getContext("2d");

  // create the chart
  var chart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.map(function (item) {
        return item.name;
      }),
      datasets: [
        {
          label: "Company Data",
          data: data.map(function (item) {
            return item.company.bs.split(" ").length;
          }),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#8C8C8C",
            "#4BC0C0",
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Company BS Keywords",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  });
}

// function to generate table
function generateTable(data) {
  var table = document.getElementById("datatable-example1");

  // create table rows from data
  for (var i = 0; i < data.length; i++) {
    var row = table.insertRow(i + 1);

    var nameCell = row.insertCell(0);
    nameCell.innerHTML = data[i].name;

    var usernameCell = row.insertCell(1);
    usernameCell.innerHTML = data[i].username;

    var emailCell = row.insertCell(2);
    emailCell.innerHTML = data[i].email;

    var companyCell = row.insertCell(3);
    companyCell.innerHTML = data[i].company.name;

    var bsCell = row.insertCell(4);
    bsCell.innerHTML = data[i].company.bs;
  }
}

// AJAX code to load API data and generate charts
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    generatePieChart(data);
    generateTable(data);
  }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();
