$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/users/mc"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.name);
       console.log(data);
    }); 
});