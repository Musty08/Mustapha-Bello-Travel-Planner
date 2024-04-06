
document.addEventListener("DOMContentLoaded", function() {
    const addDestinationForm = document.getElementById("addDestinationForm");
    const destinationInput = document.getElementById("destinationInput");
    const addDestinationBtn = document.getElementById("addDestinationBtn");
    const destinationList = document.getElementById("destinationList");
    const itineraryList = document.getElementById("itineraryList");
    addDestinationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const destination = destinationInput.value.trim();
        if (destination !== "") {
            addDestination(destination);
            destinationInput.value = "";
        }
    });
    function addDestination(destination) {
        const destinationItem = document.createElement("li");
        destinationItem.textContent = destination;
        destinationList.appendChild(destinationItem);        
        const itineraryItem = document.createElement("li");
        itineraryItem.textContent = destination;
        itineraryList.appendChild(itineraryItem);
    }
});