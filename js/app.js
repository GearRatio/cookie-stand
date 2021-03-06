"use strict";

//selects main
//let selectEl = document.querySelector("main");
let tableBody = document.getElementById("tableBody");
let tableFoot = document.getElementById("tableFoot");
let storeFormEl = document.getElementById("storeManage");
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

// define constructor object to create a store location and provide sales totals / daily and hourly
function StoreData(name, minCust, maxCust, average) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.average = average;
    this.sold = [];
    this.totalCookies = 0;
    StoreData.all.push(this);
    // console.log(StoreData.all); // pushes every constructor into an array
}

//create an average cookies sold per hour prototype
StoreData.prototype.custPerHour = function() {
    return Math.floor(
        Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
    );
};

//prototype to generate and push cookies per hour into the sold array
StoreData.prototype.cookiesPerHour = function() {
    for (let i = 0; i < openHours.length; i++) {
        this.sold.push(Math.ceil(this.custPerHour() * this.average)); //takes random number pushes to, rounds to next whole int
        this.totalCookies = this.totalCookies + this.sold[i];
        // console.log(this.totalCookies);
    }
};

//create a render prototype to insert into table and display store location and hourly sales
StoreData.prototype.renderLi = function() {
    this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
    let tableRow = document.createElement("tr"); // table row
    let tableHead = document.createElement("th"); //table header
    tableHead.innerText = this.name;
    tableRow.appendChild(tableHead);
    for (let i = 0; i < this.sold.length; i++) {
        let listElement = document.createElement("td"); // create a td
        listElement.innerText = `${this.sold[i]}`; //need to output hours and cookies sold
        tableRow.appendChild(listElement); //append to tr
    } // adds total cookies sold to bottom of li
    let listTotal = document.createElement("td");
    listTotal.innerText = `${this.totalCookies}`;
    tableRow.appendChild(listTotal);
    tableBody.appendChild(tableRow);
};

//function generates sales totals in bottom row and adds up all stores hourly rates.
function tableFooter() {
    let tableRow = document.createElement("tr");
    let tableHead = document.createElement("th");
    tableHead.textContent = `Totals All`;
    tableRow.appendChild(tableHead);
    let counter = 0;
    for (let i = 0; i < openHours.length; i++) {
        let hourlySales = 0;
        for (let j = 0; j < StoreData.all.length; j++) {
            hourlySales += StoreData.all[j].sold[i];
            counter += StoreData.all[j].sold[i];
        }
        tableHead = document.createElement("th");
        tableHead.textContent = hourlySales;
        tableRow.appendChild(tableHead);
    }
    tableHead = document.createElement("th");
    tableHead.textContent = counter;
    tableRow.appendChild(tableHead);
    tableFoot.appendChild(tableRow);
}
//hold all constructors in array/ multidimensional
StoreData.all = [];

new StoreData("Seattle", 23, 65, 6.3);
new StoreData("Tokyo", 3, 24, 1.2);
new StoreData("Dubai", 11, 38, 3.7);
new StoreData("Paris", 20, 38, 2.3);
new StoreData("Lima", 2, 16, 4.6);

//loops over all data stored and and outputs into table footer.
function renderAll() {
    for (let i = 0; i < StoreData.all.length; i++) {
        StoreData.all[i].renderLi();
    }
    tableFooter();
}

//DOM function for form submission
function createStore(formsubmission) {
    formsubmission.preventDefault();
    // let {storeLocation, minCustomer, maxCustomer, avgDailySales } = formsubmission.event

    let storeName = formsubmission.target.storeLocation.value;
    let minCustomer = formsubmission.target.minCustomer.value;
    let maxCustomer = formsubmission.target.maxCustomer.value;
    let avgDaily = formsubmission.target.avgDailySales.value;
    let numMinCust = parseInt(minCustomer);
    let numMaxCust = parseInt(maxCustomer);
    let newAvgDaily = parseFloat(avgDaily);

    let newStoreLocation = new StoreData(
        storeName,
        numMinCust,
        numMaxCust,
        newAvgDaily
    );
    tableFoot.innerHTML = "";
    newStoreLocation.renderLi();
    tableFooter();
}

storeFormEl.addEventListener("submit", createStore);

renderAll();

// Object Literals from class 06

// console.log(totalCookiesSold);
// let seattleStore = {
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     cookiesSold: [],
//     totalCookies: 0,
//     // avg random customer per hour
//     custPerHour: function() {
//         return Math.floor(
//             Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
//         );
//     }, // provides avg number of cookies per hour based off of random customers
//     cookiesPerHour: function() {
//         //this.custPerHour();
//         for (let i = 0; i < openHours.length; i++) {
//             this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
//             this.totalCookies = this.totalCookies + this.cookiesSold[i];
//         }
//     }, // creates li element for hours per day for each store
//     renderLi: function() {
//         this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
//         let storeLocation = document.createElement("h2");
//         storeLocation.innerText = `Seattle`;
//         selectEl.appendChild(storeLocation);
//         let addHours = document.createElement("ul");
//         for (let i = 0; i < this.cookiesSold.length; i++) {
//             let listElement = document.createElement("li");
//             listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
//             addHours.appendChild(listElement);
//         } // adds total cookies sold to bottom of li
//         selectEl.appendChild(addHours);
//         let total = document.createElement("li"); //repeat when you need to add elements, create, mod, append.
//         total.innerText = `Total: ${this.totalCookies}`;
//         addHours.appendChild(total);
//     },
// };

// let tokyoStore = {
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     cookiesSold: [],
//     totalCookies: 0,
//     custPerHour: function() {
//         return Math.floor(
//             Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
//         );
//     },
//     cookiesPerHour: function() {
//         this.custPerHour();
//         for (let i = 0; i < openHours.length; i++) {
//             this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
//             this.totalCookies = this.totalCookies + this.cookiesSold[i];
//         }
//     },
//     renderLi: function() {
//         this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
//         let storeLocation = document.createElement("h2");
//         storeLocation.innerText = `Tokyo`;
//         selectEl.appendChild(storeLocation);
//         let addHours = document.createElement("ul");
//         for (let i = 0; i < this.cookiesSold.length; i++) {
//             let listElement = document.createElement("li");
//             listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
//             addHours.appendChild(listElement);
//         }
//         selectEl.appendChild(addHours);
//         let total = document.createElement("li");
//         total.innerText = `Total: ${this.totalCookies}`;
//         addHours.appendChild(total);
//     }, // functions starts a new ul for next store
// };

// let dubaiStore = {
//     minCust: 11,
//     maxCust: 33,
//     avgCookie: 3.7,
//     cookiesSold: [],
//     totalCookies: 0,
//     custPerHour: function() {
//         return Math.floor(
//             Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
//         );
//     },
//     cookiesPerHour: function() {
//         this.custPerHour();
//         for (let i = 0; i < openHours.length; i++) {
//             this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
//             this.totalCookies = this.totalCookies + this.cookiesSold[i];
//         }
//     },
//     renderLi: function() {
//         this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
//         let storeLocation = document.createElement("h2");
//         storeLocation.innerText = `Dubai`;
//         selectEl.appendChild(storeLocation);
//         let addHours = document.createElement("ul");
//         for (let i = 0; i < this.cookiesSold.length; i++) {
//             let listElement = document.createElement("li");
//             listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
//             addHours.appendChild(listElement);
//         }
//         selectEl.appendChild(addHours);
//         let total = document.createElement("li");
//         total.innerText = `Total: ${this.totalCookies}`;
//         addHours.appendChild(total);
//     },
// };

// let parisStore = {
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3,
//     cookiesSold: [],
//     totalCookies: 0,
//     custPerHour: function() {
//         return Math.floor(
//             Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
//         );
//     },
//     cookiesPerHour: function() {
//         this.custPerHour();
//         for (let i = 0; i < openHours.length; i++) {
//             this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
//             this.totalCookies = this.totalCookies + this.cookiesSold[i];
//         }
//     },
//     renderLi: function() {
//         this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
//         let storeLocation = document.createElement("h2");
//         storeLocation.innerText = `Paris`;
//         selectEl.appendChild(storeLocation);
//         let addHours = document.createElement("ul");
//         for (let i = 0; i < this.cookiesSold.length; i++) {
//             let listElement = document.createElement("li");
//             listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
//             addHours.appendChild(listElement);
//         }
//         selectEl.appendChild(addHours);
//         let total = document.createElement("li");
//         total.innerText = `Total: ${this.totalCookies}`;
//         addHours.appendChild(total);
//     },
// };

// let limaStore = {
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     cookiesSold: [],
//     totalCookies: 0,
//     custPerHour: function() {
//         return Math.floor(
//             Math.random() * (this.maxCust - this.minCust + 1) + this.minCust
//         );
//     },
//     cookiesPerHour: function() {
//         this.custPerHour();
//         for (let i = 0; i < openHours.length; i++) {
//             this.cookiesSold.push(Math.ceil(this.custPerHour() * this.avgCookie)); //takes random number pushes to, rounds to next whole int
//             this.totalCookies = this.totalCookies + this.cookiesSold[i];
//         }
//     },
//     renderLi: function() {
//         this.cookiesPerHour(); // loops through hours array and fills cookiesSold based off of avg cust per hour.
//         let storeLocation = document.createElement("h2");
//         storeLocation.innerText = `Lima`;
//         selectEl.appendChild(storeLocation);
//         let addHours = document.createElement("ul");
//         for (let i = 0; i < this.cookiesSold.length; i++) {
//             let listElement = document.createElement("li");
//             listElement.innerText = `${openHours[i]} ${this.cookiesSold[i]}`; //need to output hours and cookies sold
//             addHours.appendChild(listElement);
//         }
//         selectEl.appendChild(addHours);
//         let total = document.createElement("li");
//         total.innerText = `Total: ${this.totalCookies}`;
//         addHours.appendChild(total);
//     },
// };

// seattleStore.renderLi();
// tokyoStore.renderLi();
// dubaiStore.renderLi();
// parisStore.renderLi();
// limaStore.renderLi();