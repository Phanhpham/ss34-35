
var names = ["xuân đức", "nguyễn huy hoàng","trần mạnh dương","hoàng chấn phong"];

var nameList = document.getElementById("nameList");

names.forEach(function(name) {
    var listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);
});