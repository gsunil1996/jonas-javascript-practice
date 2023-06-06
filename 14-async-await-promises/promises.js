'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const countryData = (country) => {
//   // country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       // console.log(response)
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`)
//       }
//       return response.json() // to read the data from response we need to call json() method on that response object. this will return new promise.

//       // Note: "what ever we return here that will go the next .then parameter".
//       // in this we return response.json(), so in next .then in the place of (data), the returned value will go

//     })
//     .then(data => {
//       //  console.log("insideFetchCall", data);
//       renderCountry(data?.[0]);
//       const neighbour = data?.[0]?.borders?.[0];

//       if (!neighbour) {
//         throw new Error("No neighbouring country found!") //  Here we are creating our own error message, this will go in error.message in catch block
//       }
//       // country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Neighbour Country not found ${response.status}`) //  Here we are creating our own error message, this will go in error.message in catch block
//       }
//       return response.json()
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log("fetchError", err);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
// }

// countryData('portugal')

// // countryData('dfsdf'); // this is to test error handling

/////////////////////////////////////////////////////////////////////////////////////////

// // building a simple promise

// const test = "a"

// const simplePromise = new Promise((resolve, reject) => {
//     if (test == "a") {
//         resolve(`correct`)
//     } else {
//         reject(`Wrong`)
//     }
// })

// simplePromise.then(res => console.log(res)).catch(err => console.log(err))

/////////////////////////////////////////////////////////////////////////////////////////

// //  promisifying setTimeout 

// const wait = (seconds) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, seconds * 1000);
//     })
// }

// wait(1)
//     .then(res => {
//         console.log('1 second passed')
//         return wait(1);
//     })
//     .then(res => {
//         console.log("2 seconds passed");
//         return wait(1)
//     })
//     .then(res => {
//         console.log("3 seconds passed")
//     })

/////////////////////////////////////////////////////////////////////////////////////////

// const getPosition = () => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => resolve(position),
//             (err) => reject(err)
//         )
//     })
// }

// getPosition().then(res => console.log(res)).catch(err => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////

// const getPosition = () => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => resolve(position),
//             (err) => reject(err)
//         )
//     })
// }

// const whereAmI = () => {
//     getPosition().then(res => {
//         // console.log(res);
//         const { latitude: lat, longitude: lng } = res.coords
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//             return res.json()
//         })
//         .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//             return fetch(`https://restcountries.com/v2/name/${data.country}`);
//         })
//         .then(res => {
//             if (!res.ok) throw new Error(`Country not found (${res.status})`);
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => {
//             console.error(`${err.message} 💥`)
//             renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//         });
// }


// // whereAmI() // if we do not want to see any return value

// // we can also handle like this

// // whereAmI()
// //     .then(city => console.log("checkCity", city))
// //     .catch(err => console.log("checkCityError", err))
// //     .finally(() => console.log('Finished getting location'))

/////////////////////////////////////////////////////////////////////////////////////////

// const wait = (seconds) => {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     })
// }

// const imgContainer = document.querySelector('.images');

// const createImage = (imgPath) => {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', () => {
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error', () => {
//             reject('Image not found')
//         })
//     })
// }

// let currentImg;

// createImage('https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg')
//     .then((img) => {
//         currentImg = img
//         console.log('Image 1 loaded')
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')
//     })
//     .then((img) => {
//         currentImg = img
//         console.log('Image 2 loaded')
//         return wait(2)
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => console.log(err))

/////////////////////////////////////////////////////////////////////////////////////////