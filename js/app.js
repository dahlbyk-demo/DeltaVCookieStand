"use srict";

var iowaCity1={
  minCustomers: 23,
  maxCustomers: 65,
  averageSales: 6.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity1.maxCustomers-iowaCity1.minCustomers)+iowaCity1.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity1.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity1.averageSales);
    }
  },
};

var iowaCity2={
  minCustomers: 3,
  maxCustomers: 24,
  averageSales: 1.2,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity2.maxCustomers-iowaCity2.minCustomers)+iowaCity2.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity2.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity2.averageSales);
    }
  },
};

var iowaCity3={
  minCustomers: 11,
  maxCustomers: 38,
  averageSales: 3.7,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity3.maxCustomers-iowaCity3.minCustomers)+iowaCity3.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity3.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity3.averageSales);
    }
  },
};

var coralville1={
  minCustomers: 20,
  maxCustomers: 38,
  averageSales: 2.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(coralville1.maxCustomers-coralville1.minCustomers)+coralville1.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      coralville1.hourlyArray[i]= Math.floor(this.numOfCust()*coralville1.averageSales);
    }
  },
};

var northLiberty1={
  minCustomers: 2,
  maxCustomers: 16,
  averageSales: 4.6,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(northLiberty1.maxCustomers-northLiberty1.minCustomers)+northLiberty1.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      northLiberty1.hourlyArray[i]= Math.floor(this.numOfCust()*northLiberty1.averageSales);
    }
  },
};

var hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];

function simulateAndDisplayStoreData(location,id){
  // Run our cookies-per-hour simulation!
  location.cookiesPurchased();

  // Find parent <ul> for this location by id
  var locationlist=document.getElementById(id);

  // For each hour that the store is open...
  for(var i = 0; i < location.hourlyArray.length; i++){
    var cookiesForThisHour = location.hourlyArray[i];

    // Build string to display in the <li>
    var listString=hours[i] + ": " + cookiesForThisHour + " cookies.";

    // Create <li> with that string, and add to <ul>
    var li=document.createElement("li");
    li.textContent=listString;
    locationlist.appendChild(li);
  }
}

simulateAndDisplayStoreData(iowaCity1,"IC1");
simulateAndDisplayStoreData(iowaCity2,"IC2");
simulateAndDisplayStoreData(iowaCity3,"IC3");
simulateAndDisplayStoreData(coralville1,"CV1");
simulateAndDisplayStoreData(northLiberty1,"NL1");
