const fetch = require("node-fetch");
console.log("test");

function getCategories() {
    //fetch('http://jservice.io/api/categories?count=100&offset=3')
    //fetch('http://jservice.io/api/clues?category=' + '11571')
    fetch('http://jservice.io/api/clues?min_date=2012-04-02&max_date=2019-03-20')
    .then(function(response) {
        if (response.status !== 200) {
            console.log('There was a problem. Status code: ' + response.status);
            return;
        }

        response.json().then(function(data) {
            console.log(data);
            console.log(data.length);
            return data;
        })
        
    })
    
    .catch(function(error) {
        console.log('Fetch Error :-S', error);
    })

}
 getCategories();
// var i;
// var table = '';
// var categories = getCategories();
// var output = document.getElementById('myTable');
// //console.log(categories);

// for(i = 0; i < categories.length; i++) {
//     table += '<tr>';
//     table += categories[i].title;
//     table += '<tr>';
// }
// output.innerHTML = '<table>' + table + '</table>';
// document.write('hi');
