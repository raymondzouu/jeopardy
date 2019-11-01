var clicked_id = window.location.hash.substring(1);
            //document.getElementById("myHeader").innerHTML = clicked_id;
        
            fetch('http://jservice.io/api/clues?category=' + clicked_id)
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log('There was a problem. Status code: ' + response.status);
                                
                    }

                    response.json().then(function(data) {
                        console.log(data);
                        console.log(data.length);
                        var output = document.getElementById('clueTable');
                        var i;
                        var table = '<tr class="header"><th style="width:40%;">Question</th><th style="width:20%;">Answer</th><th style="width:20%;">Value</th><th style="width:20%;">Airdate</th></tr>';
                        document.getElementById('categoryTitle').innerHTML = '<p class="p" id="categoryTitle">Category: "' + data[0].category.title + '"</p>';
                        //console.log(categories);

                        for(i = 0; i < data.length; i++) {
                            table += '<tr>';
                            table += '<td align="center" height="100">' + data[i].question + '</td>';
                            table += '<td align="center" height="100">' + data[i].answer + '</td>';
                            table += '<td align="center" height="100">' + data[i].value + '</td>';
                            table += '<td align="center" height="100">' + data[i].airdate.substring(0, 10) + '</td>';
                            //table += '<td> <button type="button" id =' + data[i].id + ' onClick="reply_click(this.id)">View</button> </td>';
                            //table += '<td> <a href="clues.html" class="button" id =' + data[i].id + '>View</a> </td>';
                            table += '<tr>';
                        }
                        output.innerHTML = '<table>' + table + '</table>';
                    })
                    
                })
        
                .catch(function(error) {
                    console.log('Fetch Error :-S', error);
                })