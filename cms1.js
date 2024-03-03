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
    let whoami = []
    let whatido = []
    let academics = []
    for (y = 1; y < rowsSplit.length; y++) {
        if (rowsSplit[y].split(",")[0].trim() != "") {
            whoami.push(rowsSplit[y].split(",")[0])
        }
        if (rowsSplit[y].split(",")[1].trim() != "") {
            whatido.push(rowsSplit[y].split(",")[1])
        }
        if (rowsSplit[y].split(",")[2].trim() != "") {
            academics.push(rowsSplit[y].split(",")[2])
        }
    }
    populate("whoami", whoami)
    populate("whatido", whatido)
    populate("academics", academics)
}
fetchCSV()

function populate(id, array) {
    for (string of array) {
        document.getElementById(id).innerHTML += `<li>${string}</li>`
    }
}