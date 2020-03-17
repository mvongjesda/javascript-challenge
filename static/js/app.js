// from data.js
let tableData = data;

// Reflect the data into the main table 
let tbody = d3.select("tbody");

tableData.forEach(function(ufoSightings) {
    let row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        let cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the button
let button = d3.select("#button");

// Complete the click handler for selected input
button.on("click", function() {
    //Prevents page from reloading
    d3.event.preventDefault();
    
    d3.select(".overview").html("");

    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    let selectedData = tableData.filter(tableData => tableData.datetime === inputValue);

    selectedData.forEach((searchDate) => {
        let row = tbody.append("tr");
        Object.entries(searchDate).forEach(([key, value]) => {
            let cell = tbody.append("td");
            cell.text(value);
        });
    });
});