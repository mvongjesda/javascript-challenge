// from data.js
let tableData = data;

// Start of CODE HERE!
let tbody = d3.select("tbody");

console.log(data)

data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
    let row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        console.log(key, value);
        let cell = tbody.append("td");
        cell.text(value);
    });
});