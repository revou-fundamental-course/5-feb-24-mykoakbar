document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_celcius").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        konversi_celcius();
    });
    
    function konversi_celcius(){
        var celcius = (document.getElementById("celsius").value);
        var fahrenheit = (celcius * 1.8) + 32;
        document.getElementById("hasil").innerHTML = fahrenheit.toFixed(2) + " °F";
        document.getElementById("hasil-cara").innerHTML = celcius + " * 9/5 + 32 = " + fahrenheit.toFixed(2) + " °F";
        
    }});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_fahrenheit").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        konversi_fahrenheit();
    });
function konversi_fahrenheit(){
    var fahrenheit = (document.getElementById("fahrenheit").value);
    var celcius = (fahrenheit - 32) * 5/9;
    document.getElementById("hasil").innerHTML = celcius.toFixed(2) + " °C";
    document.getElementById("hasil-cara").innerHTML = fahrenheit + " - 32 * 5/9 = " + celcius.toFixed(2) + " °F";
    
}});

