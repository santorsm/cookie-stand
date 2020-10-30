'use strict';

//all stores have same hours
//global variable for store hours
var storeHoursArray = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var tfoot = document.createElement('tfoot');
var salmonCookieForm = document.getElementById('salmon-cookie-form');

var allStores = [];
var storeTable = document.getElementById('store-table');
var hourlyTotals = [];
var grandTotal = 0;

//store location constructor - contains unique; stand alone functions
function Store(location, minCustomers, maxCustomers, avgCookiespurchased) {
  this.location = location;
  this.cookieTotal = 0;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiespurchased = avgCookiespurchased;
  this.hourlyCookieSalesArray = [];
  allStores.push(this);
  this.render();
}

Store.prototype.countCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

Store.prototype.hourlyCookiesSold = function () {
  this.countCustomers();
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

function calcTotals(){

  for (var i = 0; i < storeHoursArray.length; i++) {
    var sum = 0;

    for (var j = 0; j < allStores.length; j++) {
      sum += allStores[j].hourlyCookieSalesArray[i];
    }
    hourlyTotals.push(sum);

    grandTotal += sum;
    console.log(allStores.length);
  }
  console.log(allStores.length);
}

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

function renderTableFoot() {
  //clears numbers from footer & grand total
  // hourlyTotals = [];
  // grandTotal = 0;
  calcTotals();
  //create header row and header elements
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (var i = 0; i < storeHoursArray.length; i++) {
    th = document.createElement('th');
    th.textContent = hourlyTotals[i];
    // th.appendChild(hour);
    tr.appendChild(th);
  }
  // Daily Location Total column cookies sold
  // create th
  th = document.createElement('th');
  //give it content
  th.textContent = grandTotal;
  //append to DOM
  tr.appendChild(th);
  tfoot.appendChild(tr);
  storeTable.appendChild(tfoot);
}

function handleSubmit(event){
  event.preventDefault();

  var newStore = event.target.newstore.value;
  console.log(newStore);
  var minimum = parseInt(event.target.minimum.value);
  var maximum = parseInt(event.target.maximum.value);
  var average = parseInt(event.target.average.value);

  var newStoreName = new Store(newStore, minimum, maximum, average);
  newStoreName.render();
  tfoot.innerHTML = '';
  renderTableFoot();
}

new Store('seattle', 16, 65, 6.3);
// console.log(seattle.countCustomers());
new Store('tokyo', 3, 24, 1.2);
// console.log(tokyo.countCustomers());
new Store('dubai', 11, 38, 3.7);
// console.log(dubai.countCustomers());
new Store('paris', 20, 38, 2.3);
// console.log(paris.countCustomers());
new Store('lima', 2, 16, 4.6);
// console.log(lima.countCustomers());


// seattle.render();
// tokyo.render();
// dubai.render();
// lima.render();
// paris.render();

function allStoresRender (){
  storeTable.innerHTML = '';
  tfoot.innerHTML = '';

  renderTableHead();

  for (var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }

  renderTableFoot();
}


allStoresRender();

salmonCookieForm.addEventListener('submit', handleSubmit);
