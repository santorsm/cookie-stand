'use strict';

//all stores have same hours
//global variable fo store hours
var storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//renaming for each of the location cities
var seattleUL = document.getElementById('seattle');
var tokyoUL = document.getElementById('tokyo');
var dubaiUL = document.getElementById('dubai');
var parisUL = document.getElementById('paris');
var limaUL = document.getElementById('lima');

//we need to:
// create separate JS object literals for each shop location -----> OPEN
// shop location object litteral outputs on SALES.html:
//Stores the min/max hourly customers, and the average cookies per customer

var seattle = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiespurchased: 6.3,
  //Total cookies sold
  cookieTotal: 0,
  //Arrayto hold of number of cookies sold per hour
  hourlyCookieSalesArray: [],
  countCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  hourlyCookiesSold: function () {
    for (var i = 0; i < storeHoursArray.length; i++) {
      //calc & assign # of cookies purchased each hour
      var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
      //store each calculation in the hourlyCookieSalesArray
      this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
      //sum this array to calculate total cookies sold in a day
      this.cookieTotal += cookiesSoldPerHour;
    }
  },
  render: function () {
    //call hourly hourlyCookiesSold function for cookie calcs
    this.hourlyCookiesSold();
    for (var i = 0; i < storeHoursArray.length; i++) {
      //create element
      var li = document.createElement('li');
      //give it content
      //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
      li.textContent = `${storeHoursArray[i]}: ${this.hourlyCookieSalesArray[i]} cookies`;
      //append to DOM
      seattleUL.appendChild(li);
    }
    //TOTAL cookies sold
    //create element
    li = document.createElement('li');
    //give it content
    li.textContent = `Total: ${this.cookieTotal} cookies`;
    //append to DOM
    seattleUL.appendChild(li);
  }

};

var tokyo = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiespurchased: 1.2,
  //Total cookies sold
  cookieTotal: 0,
  //Arrayto hold of number of cookies sold per hour
  hourlyCookieSalesArray: [],
  countCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  hourlyCookiesSold: function () {
    for (var i = 0; i < storeHoursArray.length; i++) {
      //calc & assign # of cookies purchased each hour
      var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
      //store each calculation in the hourlyCookieSalesArray
      this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
      //sum this array to calculate total cookies sold in a day
      this.cookieTotal += cookiesSoldPerHour;
    }
  },
  render: function () {
    //call hourly hourlyCookiesSold function for cookie calcs
    this.hourlyCookiesSold();
    for (var i = 0; i < storeHoursArray.length; i++) {
      //create element
      var li = document.createElement('li');
      //give it content
      //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
      li.textContent = `${storeHoursArray[i]}: ${this.hourlyCookieSalesArray[i]} cookies`;
      //append to DOM
      tokyoUL.appendChild(li);
    }
    //TOTAL cookies sold
    //create element
    li = document.createElement('li');
    //give it content
    li.textContent = `Total: ${this.cookieTotal} cookies`;
    //append to DOM
    tokyoUL.appendChild(li);
  }
};

var dubai = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiespurchased: 3.7,
  //Total cookies sold
  cookieTotal: 0,
  //Arrayto hold of number of cookies sold per hour
  hourlyCookieSalesArray: [],
  countCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  hourlyCookiesSold: function () {
    for (var i = 0; i < storeHoursArray.length; i++) {
      //calc & assign # of cookies purchased each hour
      var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
      //store each calculation in the hourlyCookieSalesArray
      this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
      //sum this array to calculate total cookies sold in a day
      this.cookieTotal += cookiesSoldPerHour;
    }
  },
  render: function () {
    //call hourly hourlyCookiesSold function for cookie calcs
    this.hourlyCookiesSold();
    for (var i = 0; i < storeHoursArray.length; i++) {
      //create element
      var li = document.createElement('li');
      //give it content
      //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
      li.textContent = `${storeHoursArray[i]}: ${this.hourlyCookieSalesArray[i]} cookies`;
      //append to DOM
      dubaiUL.appendChild(li);
    }
    //TOTAL cookies sold
    //create element
    li = document.createElement('li');
    //give it content
    li.textContent = `Total: ${this.cookieTotal} cookies`;
    //append to DOM
    dubaiUL.appendChild(li);
  }
};

var paris = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiespurchased: 2.3,
  //Total cookies sold
  cookieTotal: 0,
  //Arrayto hold of number of cookies sold per hour
  hourlyCookieSalesArray: [],
  countCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  hourlyCookiesSold: function () {
    for (var i = 0; i < storeHoursArray.length; i++) {
      //calc & assign # of cookies purchased each hour
      var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
      //store each calculation in the hourlyCookieSalesArray
      this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
      //sum this array to calculate total cookies sold in a day
      this.cookieTotal += cookiesSoldPerHour;
    }
  },
  render: function () {
    //call hourly hourlyCookiesSold function for cookie calcs
    this.hourlyCookiesSold();
    for (var i = 0; i < storeHoursArray.length; i++) {
      //create element
      var li = document.createElement('li');
      //give it content
      //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
      li.textContent = `${storeHoursArray[i]}: ${this.hourlyCookieSalesArray[i]} cookies`;
      //append to DOM
      parisUL.appendChild(li);
    }
    //TOTAL cookies sold
    //create element
    li = document.createElement('li');
    //give it content
    li.textContent = `Total: ${this.cookieTotal} cookies`;
    //append to DOM
    parisUL.appendChild(li);
  }
};

var lima = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiespurchased: 4.6,
  //Total cookies sold
  cookieTotal: 0,
  //Arrayto hold of number of cookies sold per hour
  hourlyCookieSalesArray: [],
  countCustomers: function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  hourlyCookiesSold: function () {
    for (var i = 0; i < storeHoursArray.length; i++) {
      //calc & assign # of cookies purchased each hour
      var cookiesSoldPerHour = Math.ceil((this.avgCookiespurchased * this.countCustomers()));
      //store each calculation in the hourlyCookieSalesArray
      this.hourlyCookieSalesArray.push(cookiesSoldPerHour);
      //sum this array to calculate total cookies sold in a day
      this.cookieTotal += cookiesSoldPerHour;
    }
  },
  render: function () {
    //call hourly hourlyCookiesSold function for cookie calcs
    this.hourlyCookiesSold();
    for (var i = 0; i < storeHoursArray.length; i++) {
      //create element
      var li = document.createElement('li');
      //give it content
      //combine storeHoursArray & hourlyCookieSalesArray for cookies per hour output
      li.textContent = `${storeHoursArray[i]}: ${this.hourlyCookieSalesArray[i]} cookies`;
      //append to DOM
      limaUL.appendChild(li);
    }
    //TOTAL cookies sold
    //create element
    li = document.createElement('li');
    //give it content
    li.textContent = `Total: ${this.cookieTotal} cookies`;
    //append to DOM
    limaUL.appendChild(li);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//Uses a method of that object to generate a random number of customers per hour. See README for documentation
// function randomCustomers(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
//
