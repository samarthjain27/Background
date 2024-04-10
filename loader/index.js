
var colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"]
function changebackgroundcolor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    var selectedcolor = colors [randomIndex];
    document.body.style.backgroundColor = selectedcolor;
}
