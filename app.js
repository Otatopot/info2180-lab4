document.addEventListener("DOMContentLoaded", () => {
    const httpRequest = new  XMLHttpRequest();
    let url = "http://localhost/info2180_code/info2180-lab4/superheroes.php";
    let search = document.getElementById("search");

    function showSuperheroes() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let response = httpRequest.responseText;
                alert(response);
            } 
            else {
                alert('There was a problem with the request.');
            }
        }
    }

    search.addEventListener("click", function() {
    
        httpRequest.onreadystatechange = showSuperheroes;
        httpRequest.open('GET', url);
        httpRequest.send();
        /*
        var httpRequest = new  XMLHttpRequest();
        //let url = "http://localhost/info2180_code/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                alert(httpRequest.responseText);
            }
        };
        httpRequest.open('GET', "superheroes.php", true);
        httpRequest.send();
        */
    });

});

