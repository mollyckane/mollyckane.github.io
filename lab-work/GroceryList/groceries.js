let input = document.getElementById("gc-input");
let uList = document.getElementById("grocery-ulist");
const groceryArray = [];

function createGroceryList() {
    let inputValue = input.value.trim();
    //prevent empty items
    if (inputValue === "") return;
    //add value to array list
    groceryArray.push(inputValue);

    //create new elements inside <ul>
    //<div>
    const itemDiv = document.createElement("div");
    itemDiv.className = "output-items-container";

    //<li> item
    let listItem = document.createElement("li");
    listItem.className = "gc-input";
    listItem.innerHTML = inputValue;

    //create remove <button>
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "X";
    removeButton.className = "gc-btn-x gc-btn";

    //remove button function
    removeButton.addEventListener("click", function () {
        //remove the created div (and array value) when X button is pressed
        itemDiv.remove();
        let index = groceryArray.indexOf(inputValue);
        if (index > -1) {
            groceryArray.splice(index, 1);
        }
    });

    //append child elements to parent
    
    itemDiv.appendChild(listItem);
    itemDiv.appendChild(removeButton);
    uList.appendChild(itemDiv);
}


//taken from w3 schools: Pressing enter carries out button function
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("add-item-btn").click();
    }
}); 