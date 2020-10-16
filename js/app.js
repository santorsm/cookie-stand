'use strict';

var parentElement = document.getElementById('seattle');

//we need to:
// create separate JS object literals for each shop location -----> OPEN
// shop location object litteral outputs on SALES.html:
//Stores the min/max hourly customers, and the average cookies per customer


var seattle = {
  location: 'seattle',
  customersPerhr: [],
  storeHours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'Total:'],
  min: 23,
  max: 65,
  avgCookiespurchased: 6.3,
  customerCount: function () {
    console.log(this.location);
    this.customersPerhr = randomCustomers(this.min, this.max) + ' customers per hour.';
    console.log(this.customersPerhr);
  }
};
seattle.customerCount();

console.log(seattle);



for (var i = 0; i < seattle.storeHours.length; i++) {
  var li = document.createElement('li');
  li.textContent = seattle.storeHours[i];
  parentElement.appendChild(li);
}


//Uses a method of that object to generate a random number of customers per hour
function randomCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
