'use strict';

//all stores have same hours
//global variable for store hours
var storeHoursArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];



var allStores = [];
//for the header
var storeTable = document.getElementById('store-table');



//stand alone function to create header row using header cell
function renderTableHead() {
  //create header row and header elements
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  //create blank space over store names
  tr.appendChild(th);
  for (var i = 0; i < storeHoursArray.length; i++) {
    th = document.createElement('th');
    th.textContent = (storeHoursArray[i]);
    // th.appendChild(hour);
    tr.appendChild(th);
  }
  // Daily Location Total column cookies sold
  // create th
  th = document.createElement('th');
  //give it content
  var total = document.createTextNode('Daily Location Total');
  //append to DOM
  th.appendChild(total);
  tr.appendChild(th);

  storeTable.appendChild(tr);
}


//replace lists with a data table

//store location constructor - contains unique; stand alone functions
function Store(location, minCustomers, maxCustomers, avgCookiespurchased) {
  this.location = location;
  this.cookieTotal = 0;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiespurchased = avgCookiespurchased;
  this.hourlyCookieSalesArray = [];
  allStores.push(this);
  this.countCustomers = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  };
}
Store.prototype.hourlyCookiesSold = function () {
  for (var i = 0; i < storeHoursArray.length; i++) {
    //calc & assign # of cookies purchased each hour
    var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
    //store each calculation in the hourlyCookieSalesArray
    this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
    //sum this array to calculate total cookies sold in a day
    this.cookieTotal += cookiesSoldPerHour;
  }
};
Store.prototype.render = function () {
  //create row
  var tr = document.createElement('tr');
  //give row content
  var td = document.createElement('td');
  //give td content
  td.textContent = this.location;
  // tr.setAttribute('id',`${this.location}`);
  tr.setAttribute('class', `${this.location}`);
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
  // //append to DOM

  storeTable.appendChild(tr);
};

function renderColumnTotal() {
  //create header row and header elements
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  //give it content
  var columnTotal = document.createTextNode('Total');
  //name Total row
  th.appendChild(columnTotal);
  //append to row
  tr.appendChild(th);
  tr.setAttribute('id', 'row-total');
  storeTable.appendChild(tr);

}

// var table = document.getElementById('store-table');
// var ths = table.getElementsByTagName('th');
// var tds = table.getElementsByTagName('td');
// // console.log(tdArray);
// for (var i = 1; i < ths.length; i++) {
//   //th for column total
//   var tr = document.createElement('tr');
//   var th = document.createElement('th');
//   var sum = 0;
//   for (var j = 1; j < ths.length[i]; j++) {
//     sum += tds[j][i];
//     th = document.createElement(sum);
//     console.log(tds[j][i]);
//   }
//   th.appendChild(sum);
//   tr.appendChild(th);
//   storeTable.appendChild(tr);
// }



for (var i = 0; i < storeHoursArray.length; i++) {
  //th for column total
  console.log(storeHoursArray[i]);
  // th = document.createElement('th');
  var sum = 0;
  for (var j = 1; j < storeHoursArray.length; j++) {
    sum += storeHoursArray[j][i];
    console.log(sum);
  }
}

// // Space to calculate the total of Daily location total
// // create th
// th = document.createElement('th');
// //give it content
// var total = document.createTextNode('Daily Location Total');
// //append to DOM
// th.appendChild(total);
// tr.appendChild(th);


// function renderAllStores() {
//   for (var i = 0; i < renderAllStores.length; i++) {
//     allStores[i].render;
//   }





//footer row created in own stand alone function
//use header row for both header & footer



var seattle = new Store('seattle', 16, 65, 6.3);
// console.log(seattle.countCustomers());
var tokyo = new Store('tokyo', 3, 24, 1.2);
// console.log(tokyo.countCustomers());
var dubai = new Store('dubai', 11, 38, 3.7);
// console.log(dubai.countCustomers());
var paris = new Store('paris', 20, 38, 2.3);
// console.log(paris.countCustomers());
var lima = new Store('lima', 2, 16, 4.6);
// console.log(lima.countCustomers());

renderTableHead();

seattle.render();
tokyo.render();
dubai.render();
lima.render();
paris.render();

renderColumnTotal();

// renderAllStores();
