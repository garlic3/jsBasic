var fiat = {
make: "Flat",
model: "500",
year: 1957,
color: "Medium Blue",
passengers: 2,
convertible: false,
mileage: 88000,
started: false,
start: function() {
    started = true;
},
stop: function() {
    started = false;
},

drive: function() {
    if (this.started) {
        alert("Zoom Zoom!!");
    }

    else{
        alert("You need to start the engine first.");
    }
}
};

fiat.drive();