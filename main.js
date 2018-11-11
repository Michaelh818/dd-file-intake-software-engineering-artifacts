$(document).ready(function(){

    run();
    function run() {
        add("v-2.0.1-dd-file-intake-engine-activity-diagram", "activity-diagrams/dd-file-intake/engine/v-2.0.1.svg");
        add("v-2.0.0-dd-file-intake-engine-activity-diagram", "activity-diagrams/dd-file-intake/engine/v-2.0.0.svg"); // html doesnt work
    }
    
    function add(elementID, file_url) {
        var request = getRequest(file_url);
        request.done(function( data ) {
            document.getElementById(elementID).innerHTML = data;
    
        });       
        request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });

        function getRequest(file_url) {
            console.log(file_url);
            return $.ajax({
                url: file_url, // "script.php",
                method: "GET", // "POST",
                // data: { id : menuId },
                dataType: "html" // we are expecting html back text works for svg as well...
              });
        }
    }
});