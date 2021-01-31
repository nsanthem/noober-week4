async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let outputElement = document.querySelector('.rides')
  
  for (let i = 0; i < json.length; i++) { 
    if(json[i].length > 1){
      levelOfService = 'Noober Pool'
      outputElement.insertAdjacentHTML("beforeend",`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
      `)
  
  for (let x = 0; x < json[i].length; x++){
    passengerName = `${json[i][x].passengerDetails.first} ${json[i][x].passengerDetails.last}`
    passengerPhone = `${json[i][x].passengerDetails.phoneNumber}`
    passengerNumber = `${json[i][x].numberOfPassengers} passengers`
    pickupAddress1 = `${json[i][x].pickupLocation.address}`
    pickupAddress2 = `${json[i][x].pickupLocation.city}, ${json[i][x].pickupLocation.state} ${json[i][x].pickupLocation.zip}`
    dropoffAddress1 = `${json[i][x].dropoffLocation.address}`
    dropoffAddress2 = `${json[i][x].dropoffLocation.city}, ${json[i][x].dropoffLocation.state} ${json[i][x].dropoffLocation.zip}`
  
    outputElement.insertAdjacentHTML("beforeend",`<div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengerNumber}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress1}</p>
          <p>${pickupAddress2}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress1}</p>
          <p>${dropoffAddress2}</p>
        </div>
      </div>
      </div>`)
      }

    } else if (json[i].purpleRequested = 'true') {
      levelOfService = 'Noober Purple'
      outputElement.insertAdjacentHTML("beforeend",`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
      `)
  
  for (let x = 0; x < json[i].length; x++){
    passengerName = `${json[i][x].passengerDetails.first} ${json[i][x].passengerDetails.last}`
    passengerPhone = `${json[i][x].passengerDetails.phoneNumber}`
    passengerNumber = `${json[i][x].numberOfPassengers} passengers`
    pickupAddress1 = `${json[i][x].pickupLocation.address}`
    pickupAddress2 = `${json[i][x].pickupLocation.city}, ${json[i][x].pickupLocation.state} ${json[i][x].pickupLocation.zip}`
    dropoffAddress1 = `${json[i][x].dropoffLocation.address}`
    dropoffAddress2 = `${json[i][x].dropoffLocation.city}, ${json[i][x].dropoffLocation.state} ${json[i][x].dropoffLocation.zip}`
  
    outputElement.insertAdjacentHTML("beforeend",` 
      <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-purple-600 text-white p-2">
             ${passengerNumber}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAddress1}</p>
            <p>${pickupAddress2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAddress1}</p>
            <p>${dropoffAddress2}</p>
          </div>
        </div>
      </div>
      `)
      }

    } else if (json[i].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
      outputElement.insertAdjacentHTML("beforeend",`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>
      `)
  
  for (let x = 0; x < json[i].length; x++){
    passengerName = `${json[i][x].passengerDetails.first} ${json[i][x].passengerDetails.last}`
    passengerPhone = `${json[i][x].passengerDetails.phoneNumber}`
    passengerNumber = `${json[i][x].numberOfPassengers} passengers`
    pickupAddress1 = `${json[i][x].pickupLocation.address}`
    pickupAddress2 = `${json[i][x].pickupLocation.city}, ${json[i][x].pickupLocation.state} ${json[i][x].pickupLocation.zip}`
    dropoffAddress1 = `${json[i][x].dropoffLocation.address}`
    dropoffAddress2 = `${json[i][x].dropoffLocation.city}, ${json[i][x].dropoffLocation.state} ${json[i][x].dropoffLocation.zip}`
  
    outputElement.insertAdjacentHTML("beforeend",` 
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumber}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAddress1}</p>
            <p>${pickupAddress2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAddress1}</p>
            <p>${dropoffAddress2}</p>
          </div>
        </div>
      </div>
      `)
      }

    }


  }  




  // end of code 


}

window.addEventListener('DOMContentLoaded', pageLoaded)