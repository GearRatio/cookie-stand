"use strict";

//selects main
let selectEl = document.querySelector("main");

//Seattle store hours
let openHours = [
    "6am:",
    "7am:",
    "8am:",
    "9am:",
    "10am:",
    "11am:",
    "12pm:",
    "1pm:",
    "2pm:",
    "3pm:",
    "4pm:",
    "5pm:",
    "6pm:",
    "7pm:",
];

let seattleStore = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    cookiesSold: [],
    totalCookies: 0,
    custPerHour: function() {
        // avg customer per hour
        return Math.floor(
            Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
        );
    }, // provides avg number of cookies per hour
    cookiesPerHour: function() {
        this.custPerHour();
        for (let i = 0; i < openHours.length; i++) {
            this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
            this.totalCookies = this.totalCookies + this.cookiesSold[i];
        }
    }, // creates li element for hours per day for each store
    renderLi: function() {
        this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
        let storeLocation = document.createElement("h2");
        storeLocation.innerText = `Seattle`;
        selectEl.appendChild(storeLocation);
        let addHours = document.createElement("ul");
        for (let i = 0; i < this.cookiesSold.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
            addHours.appendChild(listElement);
        } // adds total cookies sold to bottom of li
        selectEl.appendChild(addHours);
        let total = document.createElement("li");
        total.innerText = `Total: ${this.totalCookies}`;
        addHours.appendChild(total);
    },
};

let tokyoStore = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    cookiesSold: [],
    totalCookies: 0,
    custPerHour: function() {
        return Math.floor(
            Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
        );
    },
    cookiesPerHour: function() {
        this.custPerHour();
        for (let i = 0; i < openHours.length; i++) {
            this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
            this.totalCookies = this.totalCookies + this.cookiesSold[i];
        }
    },
    renderLi: function() {
        this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
        let storeLocation = document.createElement("h2");
        storeLocation.innerText = `Tokyo`;
        selectEl.appendChild(storeLocation);
        let addHours = document.createElement("ul");
        for (let i = 0; i < this.cookiesSold.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
            addHours.appendChild(listElement);
        }
        selectEl.appendChild(addHours);
        let total = document.createElement("li");
        total.innerText = `Total: ${this.totalCookies}`;
        addHours.appendChild(total);
    }, // functions starts a new ul for next store
};

let dubaiStore = {
    minCust: 11,
    maxCust: 33,
    avgCookie: 3.7,
    cookiesSold: [],
    totalCookies: 0,
    custPerHour: function() {
        return Math.floor(
            Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
        );
    },
    cookiesPerHour: function() {
        this.custPerHour();
        for (let i = 0; i < openHours.length; i++) {
            this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
            this.totalCookies = this.totalCookies + this.cookiesSold[i];
        }
    },
    renderLi: function() {
        this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
        let storeLocation = document.createElement("h2");
        storeLocation.innerText = `Dubai`;
        selectEl.appendChild(storeLocation);
        let addHours = document.createElement("ul");
        for (let i = 0; i < this.cookiesSold.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
            addHours.appendChild(listElement);
        }
        selectEl.appendChild(addHours);
        let total = document.createElement("li");
        total.innerText = `Total: ${this.totalCookies}`;
        addHours.appendChild(total);
    },
};

let parisStore = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    cookiesSold: [],
    totalCookies: 0,
    custPerHour: function() {
        return Math.floor(
            Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
        );
    },
    cookiesPerHour: function() {
        this.custPerHour();
        for (let i = 0; i < openHours.length; i++) {
            this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
            this.totalCookies = this.totalCookies + this.cookiesSold[i];
        }
    },
    renderLi: function() {
        this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
        let storeLocation = document.createElement("h2");
        storeLocation.innerText = `Paris`;
        selectEl.appendChild(storeLocation);
        let addHours = document.createElement("ul");
        for (let i = 0; i < this.cookiesSold.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
            addHours.appendChild(listElement);
        }
        selectEl.appendChild(addHours);
        let total = document.createElement("li");
        total.innerText = `Total: ${this.totalCookies}`;
        addHours.appendChild(total);
    },
};

let limaStore = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    cookiesSold: [],
    totalCookies: 0,
    custPerHour: function() {
        return Math.floor(
            Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
        );
    },
    cookiesPerHour: function() {
        this.custPerHour();
        for (let i = 0; i < openHours.length; i++) {
            this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
            this.totalCookies = this.totalCookies + this.cookiesSold[i];
        }
    },
    renderLi: function() {
        this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
        let storeLocation = document.createElement("h2");
        storeLocation.innerText = `Lima`;
        selectEl.appendChild(storeLocation);
        let addHours = document.createElement("ul");
        for (let i = 0; i < this.cookiesSold.length; i++) {
            let listElement = document.createElement("li");
            listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
            addHours.appendChild(listElement);
        }
        selectEl.appendChild(addHours);
        let total = document.createElement("li");
        total.innerText = `Total: ${this.totalCookies}`;
        addHours.appendChild(total);
    },
};

seattleStore.renderLi();
tokyoStore.renderLi();
dubaiStore.renderLi();
parisStore.renderLi();
limaStore.renderLi();