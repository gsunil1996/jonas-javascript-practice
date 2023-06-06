'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/////////////////  Ajax Call ///////////////////////////////////

// const getCountryData = function (country) {
//     const request = new XMLHttpRequest(); // we need to store this in a variable
//     request.open('GET', `https://restcountries.com/v2/name/${country}`); // get call
//     request.send(); // send request

//     request.addEventListener('load', function () {
//         // console.log(request.responseText)
//         // console.log(this.responseText) // this is request here
//         // note in arrow function this is undefined, so always use regular function calls. The result is a JSON here, we need to convert it back to javascript object
//         // const data = JSON.parse(this.responseText); 
//         // since result is comming in array, we can also destructure like this
//         const [data] = JSON.parse(this.responseText);
//         // console.log(data)

//         const html = `
//     <article class="country">
//           <img class="country__img" src="${data?.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data?.name}</h3>
//             <h4 class="country__region">${data?.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data?.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data?.languages[0]?.name}</p>
//             <p class="country__row"><span>💰</span>${data?.currencies[0]?.name}</p>
//           </div>
//         </article>
//     `
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;

//     })
// }

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany')

/////////////////  Ajax Call ///////////////////////////////////

//////////// test the results /////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data?.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0]?.name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0]?.name}</p>
          </div>
        </article>
    `
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

//////////// test the results /////////////////////////////////

////////////// callbackhell setTimeout example ////////////////

// setTimeout(() => {
//     console.log("1 second passed");
//     setTimeout(() => {
//         console.log("2 seconds passed");
//         setTimeout(() => {
//             console.log("3 seconds passed");
//             setTimeout(() => {
//                 console.log("4 seconds passed");
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

////////////// callbackhell setTimeout example ////////////////

////////////  call back hell example //////////////////////////////////

// const getCountryDataAndNeighbour = function (country) {
//     // Ajax  call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log("data", data)
//         // render country 1
//         renderCountry(data);

//         // get neighbour country (2)
//         const neighbour = data?.borders?.[0];

//         if (!neighbour) return

//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);

//         request2.send();

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log("data2", data2);
//             renderCountry(data2, 'neighbour');
//         });

//     })
// }

// // getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('usa');

////////////  call back hell example //////////////////////////////////


////////////  promises //////////////////////////////////

///////////////////////////////////////////////////////////

// const country = 'portugal'
// // get call
// const request = fetch(`https://restcountries.com/v2/name/${country}`);
// console.log("getRequest", request); // this fetch will return a promise

/////////////////////////////////////////////////////////

/////////// Event loop in practice ///////////////////////

// console.log('Start Test');

// setTimeout(() => {
//     console.log('0 sec timer')
// }, 0)

// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//     for (let i = 0; i < 1000000000; i++) { } // this we added to test the behavior. since promises are kept in microtasks queue. this has priority over call stack queue and only after this executed the setTimeout function will run, because setTimeout was in callstack.
//     console.log(res)
// });

// console.log('Test end')

/////////// Event loop in practice //////////////////////////


// from here go and refer promises.js and async-await.js