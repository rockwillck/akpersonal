const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQQAzTdTPnWJjcU2bHPhsx005aGBU1nJ2okA9beZ68bQD0bte2BfcFZjQxModDjX9NsB-aJoPTEB6H-/pub?gid=0&single=true&output=csv';

// Function to fetch the CSV file
const fetchCSV = async () => {
  try {
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch CSV');
    }
    const csvData = await response.text();
    
    // Process the CSV data here (e.g., parse it, display it, etc.)
    process(csvData);
    // Now you can work with the CSV data as needed
    
  } catch (error) {
    console.error('Error fetching CSV:', error);
  }
};

function process(csvData) {
    rowsSplit = csvData.split("\n")
    first = rowsSplit[0].split(",")
    let blogs = []
    for (y = 1; y < rowsSplit.length; y++) {
        if (rowsSplit[y].split(",")[3].trim() != "") {
            document.getElementById("content").innerHTML = `<div class="post">
            <h2>${rowsSplit[y].split(",")[3]}</h2>
            <p>${rowsSplit[y].split(",")[4].replace("\\n", "<br>")}</p>
        </div>` + document.getElementById("content").innerHTML
        }
    }
}
fetchCSV()

// function populate(id, array) {
//     for (string of array) {
//         document.getElementById(id).innerHTML += `<li>${string}</li>`
//     }
// }