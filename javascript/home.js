function search() {
    //alert(clicked_id);
    //document.getElementById("myBody").innerHTML = "Have a nice day!";
    var clueVal = document.getElementById("clueVal").value;

    //alert(clueVal);
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    window.location.href = 'clues.html' + '#' + clueVal + '&' + startDate + '%' + endDate;
    
    //console.log("Hi");
}

function reply_click(clicked_id) {
    //alert(clicked_id);
    //document.getElementById("myBody").innerHTML = "Have a nice day!";
    window.location.href = 'category.html' + '#' + clicked_id;
    
    //console.log("Hi");
}

var clues = new Array();
        var j;
        var output = document.getElementById('myTable');
        var i;
        //var table = '<tr class="header"> <th style="width:40%;">Category</th><th style="width:40%;">Clue Count</th><th style="width:20%;">View</th></tr>';
        var table = '';

        var output = document.getElementById('myTable');
        //for (j = 1; j < 3; j++) {
        table = '';
        

        fetch('https://cors-anywhere.herokuapp.com/http://jservice.io/api/categories?count=100&offset=' + 1)
            .then(function(response) {
                if (response.status !== 200) {
                    console.log('There was a problem. Status code: ' + response.status);
                    
                }

                response.json().then(function(data) {
                    console.log(data);
                    console.log(data.length);
                    
                    //console.log(categories);

                    for(i = 0; i < data.length; i++) {
                        //clues.push[data[i]];

                        table += '<tr>';
                        table += '<td align="center">' + data[i].title + '</td>';
                        table += '<td align="center">' + data[i].clues_count + '</td>';
                        table += '<td align="center"> <button class="viewbutton" type="button" id =' + data[i].id + ' onClick="reply_click(this.id)">View</button> </td>';
                        
                        table += '<tr>';
                    }
                    output.innerHTML +=  table;
                })
        
            })
    
            .catch(function(error) {
                console.log('Fetch Error :-S', error);
            })

        // var i;
        // var table = '';
        // var categories = ["test1", "test2", "test3"];
        // var output = document.getElementById('myTable');
        //console.log(categories);


        // for(i = 0; i < clues.length; i++) {
        //     table += '<tr>';
        //     table += '<td>' + clues[i].title + '</td>';
        //     table += '<td>' + clues[i].clues_count + '</td>';
        //     table += '<td> <button type="button" id =' + data[i].id + ' onClick="reply_click(this.id)">View</button> </td>';
        //     table += '<tr>';
        // }
        // output.innerHTML = '<table>' + table + '</table>';
        //}
        console.log("hi");

        function myFunction() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
              td = tr[i].getElementsByTagName("td")[0];
              if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
                } else {
                  tr[i].style.display = "none";
                }
              }       
            }
          }