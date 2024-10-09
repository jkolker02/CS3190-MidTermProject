/* global bootstrap: false */


document.addEventListener("DOMContentLoaded", function() {
  (() => {
    'use strict'
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    })
  })()
  
  

  function showFeaturedCars() {
    fetch("./data.json")
    .then(response => response.json())
    .then(data => displayCars(data.newCars, 0))
  }

  function showNewVans() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.newCars,1))
  }

  function showUsedVans() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.usedCars,1))
  }

  function showNewTrucks() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.newCars,3))
  }

  function showUsedTrucks() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.usedCars,3))
  }

  function showNewSedans() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.newCars,2))
  }

  function showUsedSedans() {
    fetch("./data.json")
    .then(response=> response.json())
    .then(data => displayCars(data.usedCars,2))
  }

  
  function displayCars(cars, n) {
    var CardCar = document.getElementById("col");
    arrayCars = cars;
    console.log(cars)
  
    CardCar.innerHTML = "";
  
    carsToShow = [];
  
    //Homepage featured Cars
    if(n === 0){
      carsToShow.push(cars.sedans[0])
      carsToShow.push(cars.trucks[0])
      carsToShow.push(cars.vans[0])
    }
    //NewVans
    if(n === 1){
      for (let i = 0; i < cars.vans.length; i++){
        carsToShow.push(cars.vans[i])
      }
    }
    if(n === 2){
      for (let i = 0; i < cars.sedans.length; i++){
        carsToShow.push(cars.sedans[i])
      }
    }
    if(n === 3){
      for (let i = 0; i < cars.trucks.length; i++){
        carsToShow.push(cars.trucks[i])
      }
    }
    
    console.log(carsToShow)
    console.log(carsToShow[0].picture)

    for (var i = 0; i < carsToShow.length; i++) {
      let miles = carsToShow[i].miles;
      let year = carsToShow[i].year;
      let color = carsToShow[i].color;
      let price = carsToShow[i].price;
      let description = carsToShow[i].description;
      let name = carsToShow[i].name;
      let image = carsToShow[i].picture;
      let AddCard = document.createElement("div");
      AddCard.classList.add("col"); // Add Bootstrap class to the column
      AddCard.innerHTML = `
        <div class="card shadow-sm rounded-5" style="width: 340px; height: 400px; border: 1px solid gray">
          <div class="card-body">
            <p class="card-text"> <strong>${year} ${name} </strong></p>
            <div class = "image-container mb-2">  
              <img class = "hover-img rounded-5" src="${image}""/>
            </div>
            <p class="card-text d-flex justify-content-between mb-2">
            <strong>$${price}</strong> 
            <span>Miles: ${miles}</span>
            </p>            
          <p class="card-text"> ${description}
          </div>
        </div>
      `;

      AddCard.addEventListener("mouseover", function () {
          const cardElement = this.querySelector('.card');
          cardElement.style.backgroundColor = '#d8d8d8';
      });
      AddCard.addEventListener("mouseleave", function () {
          const cardElement = this.querySelector('.card');
          cardElement.style.backgroundColor = '';
          
      });

      CardCar.appendChild(AddCard);
  } // end of for
  }

  if (window.location.pathname === "/index.html") {
    showFeaturedCars();

    document.getElementById("UsedSedansButton").addEventListener("click", function() {
      window.location.href = "UsedSedans.html"; // Replace with your target URL
    });
    
    document.getElementById("NewSedansButton").addEventListener("click", function() {
      window.location.href = "NewSedans.html"; // Replace with your target URL
    });
    
    document.getElementById("UsedTrucksButton").addEventListener("click", function() {
      window.location.href = "UsedTrucks.html"; // Replace with your target URL
    });
    
    document.getElementById("NewTrucksButton").addEventListener("click", function() {
      window.location.href = "NewTrucks.html"; // Replace with your target URL
    });
    
    document.getElementById("UsedVansButton").addEventListener("click", function() {
      window.location.href = "UsedVans.html"; // Replace with your target URL
    });
    
    document.getElementById("NewVansButton").addEventListener("click", function() {
      window.location.href = "NewVans.html"; // Replace with your target URL
    });
  }

  console.log(window.location.pathname)
  
  if (window.location.pathname === "/UsedSedans.html") {
    console.log("usedVans");
    showUsedSedans();
  }
  
  if (window.location.pathname === "/UsedTrucks.html") {
    console.log("usedVans");
    showUsedTrucks();

  }
  if (window.location.pathname === "/UsedVans.html") {
    console.log("usedVans");
    showUsedVans();
  }
  
  if (window.location.pathname === "/NewVans.html") {
    console.log("newVans");
    showNewVans();
  }

  if (window.location.pathname === "/NewSedans.html") {
    console.log("usedVans");
    showNewSedans();
  }
  
  if (window.location.pathname === "/NewTrucks.html") {
    console.log("usedVans");
    showNewTrucks();
  }
});