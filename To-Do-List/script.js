const input = document.getElementById("input");
const box = document.getElementsByClassName("box");
const output = document.getElementById("List");
const pencil = document.getElementById("pencil");

pencil.addEventListener("click", function() {
    output.innerHTML = "";
});

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addItem();
    }
});

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "-" + input.value;

    h2.addEventListener("click", function() {
        h2.style.textDecoration = "line-through";
    });

    output.appendChild(h2); // Append the new h2 element to the output element

    input.value = ""; // Clear the input field after adding the item
}
