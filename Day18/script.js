document.getElementById('fetchData').addEventListener('click', fetchData);

function fetchData() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('GET', 'data.json', true);

    // Set up a callback function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            var data = JSON.parse(xhr.responseText);
            displayData(data);
        } else {
            console.error('Request failed:', xhr.status, xhr.statusText);
        }
    };

    // Send the request
    xhr.send();
}

function displayData(data) {
    var dataDisplay = document.getElementById('dataDisplay');
    dataDisplay.innerHTML = 'Fetched data: ' + data.message;
}
