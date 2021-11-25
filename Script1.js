// Request to server using API

// 1. Create request Object
var request = new XMLHttpRequest();

// 2. Open my request connection
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

//3. Send a request
request.send();

// 4. Data after response
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for(i=0;i<data.length;i++)
    {
        console.log(data[i].id);
    }
    
}