document.addEventListener("DOMContentLoaded", () => {
    var httpRequest = new  XMLHttpRequest();
    let url = "http://localhost/info2180_code/info2180-lab4/superheroes.php?query=";
    let search = document.getElementById("search");
    let result = document.getElementById("result");
    

    function showSuperheroes() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = httpRequest.responseText;
                result.innerHTML = response;
            } 
            else {
                alert('There was a problem with the request.');
            }
        }
    }

    search.addEventListener("click", function(event) {
        event.preventDefault();
        var input_tag = document.querySelector('#query');
        var query = input_tag.value.trim()
        console.log(query);
        
        httpRequest.onreadystatechange = showSuperheroes;
        httpRequest.open('GET', url + query, true);
        httpRequest.send();
        
    });

});

//Useful functions
/*
stringwithspaces.trim() //removes any white spaces at start and end
string.length()


*/
