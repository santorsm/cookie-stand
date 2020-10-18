'use strict';

//all stores have same hours
//global variable fo store hours
var storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//for the header
var storeTable = document.getElementById('store-table');

//header row created in own stand alone function
//function to create table header
// put this AFTER the table
function generateTableHead(table) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  for (var i = 0; i < storeHoursArray.length; i++) {
    var th = document.createElement('th');
    var hour = document.createTextNode(storeHoursArray[i]);
    th.appendChild(hour);
    row.appendChild(th);
  }
  // Daily Location Total column cookies sold
  // create th
  th = document.createElement('th');
  //give it content
  var total = document.createTextNode('Daily Location Total');
  //append to DOM
  th.appendChild(total);
  row.appendChild(th);
}
var table = document.querySelector('table');
generateTableHead(table);

//replace object literals with single constructor function
//when called with new keyword, creates a new instance
//each location separate render()
//creates & appends row to the table
//footer row created in own stand alone function
//use header row for both header & footer


//replace lists with a data table

//store location constructor - contains unique; stand alone functions
function Stores(location, minCustomers, maxCustomers, avgCookiespurchased) {
  this.location = location;
  this.cookieTotal = 0;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiespurchased = avgCookiespurchased;
  this.hourlyCookieSalesArray = [];
  this.countCustomers = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)
  };
}
Stores.prototype.hourlyCookiesSold = function () {
  for (var i = 0; i < storeHoursArray.length; i++) {
    //calc & assign # of cookies purchased each hour
    var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
    //store each calculation in the hourlyCookieSalesArray
    this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
    //sum this array to calculate total cookies sold in a day
    this.cookieTotal += cookiesSoldPerHour;
  }
};
Stores.prototype.render = function () {
  var tbody = document.createElement('tbody');
  //create row
  var tr = document.createElement('tr');
  //give row content
  td = document.createElement('td');
  //give td content
  td.textContent = this.location;
  //append to row
  tr.appendChild(td);
  //create tds for hourlyCookieSales array
  this.hourlyCookiesSold();
  for (var i = 0; i < storeHoursArray.length; i++) {
    //create row
    td = document.createElement('td');
    //give it content
    //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
    td.textContent = this.hourlyCookieSalesArray[i];
    //append to DOM
    tr.appendChild(td);
  }
  //create td for Daily Location Total
  td = document.createElement('td');
  //give td content
  td.textContent = this.cookieTotal;
  //append to row
  tr.appendChild(td);
}
//append to DOM
storeTable.appendChild(tr);