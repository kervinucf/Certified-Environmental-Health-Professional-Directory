import {get_county} from "./util.js";

let tableData = [];

function excelDateToJSDate(serial) {
    var utc_days = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;
    var date_info = new Date(utc_value * 1000);
    var month = date_info.getMonth() + 1;
    var day = date_info.getDate();
    var year = date_info.getFullYear();
    return month + '/' + day + '/' + year;
}

function createTable() {
    let tableHTML = "<tr>";
    const headers = ["Last Name", "First Name", "Program Area", "Certification Number", "Expiration Date", "Phone", "County", "Email"];
    headers.forEach(header => tableHTML += `<th>${header}</th>`);
    tableHTML += "</tr>";

    // Start from the third row by using slice(2) to skip the first two rows
    tableData.slice(2).forEach(row => {
        tableHTML += "<tr>";
        tableHTML += `<td style="max-width: 110px;">${row.A}</td>`;
        tableHTML += `<td style="max-width: 110px;">${row.B}</td>`;
        tableHTML += `<td>${row.C}</td>`;
        tableHTML += `<td style="font-weight: 500;color: #3b3b3b;">${row.D}</td>`;
        tableHTML += `<td style="color: red;font-weight: bold;">${excelDateToJSDate(row.E)}</td>`; // Change this line to reference the correct column for Expiration Date
        tableHTML += `<td style="min-width: 120px;">${row.F}</td>`;
        tableHTML += `<td>${row.G}</td>`;
        tableHTML += `<td>${row.H}</td>`;
        tableHTML += "</tr>";
    });
    const listingTable = document.getElementById("listing-table");

    listingTable.innerHTML = tableHTML;
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

export function updateResultsCount() {
    const hiddenRows = document.querySelectorAll(".hidden-row").length;
    const totalRows = tableData.length - 2; // Subtract 2 to account for the header and first row
    const visibleRows = totalRows - hiddenRows;
    document.getElementById("results-count").innerText = `Showing ${visibleRows} results`;
}

// Function to create a virtual table
function createVirtualTable(rows) {
    const table = document.createElement("table");
    rows.forEach(row => {
        const newRow = row.cloneNode(true);
        table.appendChild(newRow);
    });
    return table;
}

async function loadTableData() {
    const response = await fetch("./data.xlsx");
    const data = await response.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(data), {type: "array"});
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    tableData = XLSX.utils.sheet_to_json(sheet, {header: "A"});
    createTable();

}

async function loadGovernmentData() {
    const response = await fetch("./data.csv");
    const data = await response.text();
    const governmentWorkers = parseGovernmentCSV(data);
    updateTableWithEmployer(governmentWorkers);

}


function applyVirtualTable(virtualTable) {
    const rows = virtualTable.querySelectorAll("tr");
    const listingTable = document.getElementById("listing-table");

    rows.forEach((row, index) => {
        if (row.classList.contains("hidden-row")) {
            listingTable.rows[index + 1].classList.add("hidden-row");
        } else {
            listingTable.rows[index + 1].classList.remove("hidden-row");
        }
    });
}

export const filterTable = debounce(async () => {
    const searchInput = document.getElementById("search-input");
    const programSelect = document.getElementById("program-select");
    const countySelect = document.getElementById("county-select");
    const trackSelect = document.getElementById("track-select");


    const searchText = searchInput.value.toUpperCase();
    const programFilter = programSelect.value;
    const countyFilter = countySelect.value; // get selected county
    const trackFilter = trackSelect.value;

    const rows = Array.from(
        document.querySelectorAll("#listing-table tr:not(:first-child)")
    );
    const virtualTable = createVirtualTable(rows);

    await new Promise((resolve) =>
        requestAnimationFrame(() => {
            virtualTable.querySelectorAll("tr").forEach((row) => {
                const lastName = row.cells[0].innerText.toUpperCase();
                const firstName = row.cells[1].innerText.toUpperCase();
                const fullName = `${firstName} ${lastName}`;
                const programArea = row.cells[2].innerText;
                const county = row.cells[6].innerText; // get county from row
                const track = row.cells[3].innerText
                console.log(track)

                let display = false;

                if (searchText || programFilter || trackFilter || countyFilter) {
                    if (
                        (searchText === "" || fullName.includes(searchText) || lastName.includes(searchText) || firstName.includes(searchText)) &&
                        (programFilter === "" || programArea === programFilter) &&
                        (trackFilter === "" || track.includes(trackFilter)) &&
                        (countyFilter === "" || county === countyFilter) // compare selected county to row county
                    ) {
                        display = true;
                    }
                } else {
                    display = true;
                }

                if (display) {
                    row.classList.remove("hidden-row");
                } else {
                    row.classList.add("hidden-row");
                }
            });

            applyVirtualTable(virtualTable);
            resolve();
        })
    );
    updateResultsCount();

}, 300);

function parseGovernmentCSV(data) {
    const rows = data.split("\n");
    const governmentWorkers = {};

    rows.forEach(row => {
        const cells = row.split(",");
        console.log(cells);
        try {
            const firstName = cells[2].trim().toUpperCase();
            const lastName = cells[3].trim().toUpperCase();
            governmentWorkers[`${firstName} ${lastName}`] = {
                "area_code": cells[0].trim().toUpperCase(),
                "phone": cells[1].trim().toUpperCase(),
                "firstName": cells[2].trim().toUpperCase(),
                "lastName": cells[3].trim().toUpperCase(),
                "agency": cells[4].trim().toUpperCase(),
                "email": cells[5].trim().toUpperCase(),
                "city": cells[6].trim().toUpperCase(),
            }
        } catch (e) {
            console.log(e);
        }


    });

    return governmentWorkers;
}

function updateTableWithEmployer(governmentWorkers) {
    const rows = document.querySelectorAll("#listing-table tr:not(:first-child)");

    rows.forEach(row => {
        const lastName = row.cells[0].innerText.replace(", RS", "").toUpperCase();
        const firstName = row.cells[1].innerText.toUpperCase();
        const fullName = `${firstName} ${lastName}`;

        const workerData = governmentWorkers[fullName];
        const labelElement = document.createElement("span");

        let track;
        if (workerData) {
            track = workerData['agency'];
        } else {
            track = "PRIVATE";
        }
        labelElement.innerText = track;
        labelElement.className = `label label-${track.toLowerCase()}`;

        labelElement.style.marginLeft = "10px";


        let phone = "";
        let county = "";
        let email = "";
        let city = "";
        try {
            phone = workerData['area_code'] + '-' + workerData['phone'];
            county = get_county(workerData['city']).toUpperCase();
            email = workerData['email'];
            city = workerData['city'];
        } catch (e) {

        }

        row.cells[3].appendChild(labelElement);
        row.cells[5].innerText = phone;
        row.cells[6].innerText = county;
        row.cells[7].innerText = email;
    });
}

export async function loadData() {
    await Promise.all([loadTableData(), loadGovernmentData()]);
}