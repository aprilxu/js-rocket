// redirect to a different page
setTimeout(function () {
    location.href = 'rocket.html';
}, 2000);

// this function change class name
var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;

    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else {
    document.getElementById('cool').className = 'cool';
    }
}

var car = {
            make: 'Honda',
            type: 'Civic',
            color: 'silver',
            isTurnedOn: false,
            numberOfWheels: 4,
            seats: [
                'seat 1', 
                'seat 2', 
                'seat 3', 
                'seat 4'
                ],
            turnOn: function () {
                this.isTurnedOn = true;
            },
            fly: function () {
                alert('fly');
            },
            switchCar: function (isOn) {
                console.log('turn car' +isOn)
                if (isOn == true) {
                    this.isTurnedOn = true;
                } else {
                    this.isTurnedOn = false;
                }
            }
        };

    console.log('My name is april!')