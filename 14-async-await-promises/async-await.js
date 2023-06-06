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

/////////////////////////////////////////////////////////////////////////////////////////

// const countryData = async (country) => {

//   try {
//     // country 1
//     const country1 = await fetch(`https://restcountries.com/v2/name/${country}`);
//     const country1Data = await country1.json();
//     // console.log("country1", country1);
//     // console.log("country1Data", country1Data);

//     if (!country1.ok) {
//       throw new Error(`Country not found ${response.status}`)
//     }

//     renderCountry(country1Data?.[0]);

//     const neighbour = country1Data?.[0]?.borders?.[0];

//     if (!neighbour) {
//       throw new Error("No neighbouring country found!")
//     }

//     // country 2
//     const country2 = await fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     const company2Data = await country2.json();

//     if (!country2.ok) {
//       throw new Error(`Neighbour Country not found ${response.status}`)
//     }

//     renderCountry(company2Data, 'neighbour')

//   } catch (err) {
//     // console.log("fetchError", err);
//     renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//   }
// }

// countryData('portugal')

/////////////////////////////////////////////////////////////////////////////////////////

// const test = "a";

// const testAsync = async () => {
//   try {
//     const simplePromise = new Promise((resolve, reject) => {
//       if (test == "a") {
//         resolve("correct");
//       } else {
//         reject("wrong");
//       }
//     });

//     const result = await simplePromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// testAsync();

// // the above code can also be written like this

// const test1 = "a";

// const simplePromise1 = new Promise((resolve, reject) => {
//   if (test1 == "a") {
//     resolve("correct")
//   } else {
//     reject("wrong")
//   }
// })

// const consumePromise = async () => {
//   try {
//     const result = await simplePromise1;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// consumePromise();


/////////////////////////////////////////////////////////////////////////////////////////

// const wait = (seconds) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   })
// }

// const consumeWaitPromise = async () => {
//   const wait1sec = await wait(1);
//   console.log('1 second passed');

//   const wait2sec = await wait(1);
//   console.log('2 seconds passed');

//   const wait3sec = await wait(1);
//   console.log('3 seconds passed');
// }

// consumeWaitPromise()

/////////////////////////////////////////////////////////////////////////////////////////

// const getPosition = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (err) => reject(err)
//     )
//   })
// }


// const whereAmI = async () => {
//   try {
//     // geo location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // reverse geo coding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     const dataGeo = await resGeo.json();

//     if (!resGeo.ok) {
//       throw new Error('Problem in getting location data')
//     }

//     const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error('Problem in getting Country data')
//     }

//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`

//   } catch (err) {
//     console.log("errorFromAsync:", err)
//     renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//   }
// }

// // whereAmI() // if we do not want to see any return value

// // if we want to see return value
// (async () => {
//   try {
//     const city = await whereAmI();
//     console.log("checkCity", city)
//   } catch (err) {
//     console.log("checkCityError", err)
//   }
//   console.log('Finished getting location')
// })()

/////////////////////////////////////////////////////////////////////////////////////////

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// const consumeCreateImagePromise = async () => {
//   try {
//     let img = await createImage('https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-36703721.jpg');
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg');
//     await wait(2)
//     img.style.display = 'none';
//   } catch (err) {
//     console.log(err)
//   }
// }

// consumeCreateImagePromise()

/////////////////////////////////////////////////////////////////////////////////////////

//////////////////// Promise.all ///////////////////////////////////////////////////////

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };


// // The below api calls will run parallely because of Promise.all. It will take an array of promises and will return new promise, which will then run all the promises in the array at the same time.

// //  Note : if one of the promises rejects, whole promises will get rejected.

// const get3Countries = async (c1, c2, c3) => {
//   try {
//     const data = await Promise.all(
//       [
//         getJSON(`https://restcountries.com/v2/name/${c1}`),
//         getJSON(`https://restcountries.com/v2/name/${c2}`),
//         getJSON(`https://restcountries.com/v2/name/${c3}`)
//       ]
//     );

//     console.log("checkParallelData", data, data.map(item => item[0].capital)) // ['Lisbon', 'Ottawa', 'Dodoma']

//   } catch (err) {
//     console.log(err)
//   }
// }

// get3Countries('portugal', 'canada', 'tanzania');


//////////////////// Promise.all ///////////////////////////////////////////////////////


//////////////// Promise.race  //////////////////////////////////////////////////////////////

// // Promise.race is receive an array of promises and it also return a promise. it setteled as soon as one of the input promises setteled. setteled means any value available does not matter if promise got fullfilled or rejected. Here only first setteled promise wins the race.

// Promise.all(
//   [
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve('Another Success')
//   ]
// ).then(data => console.log("checkSimplePromise.all", data)).catch(err => console.log("checkSimplePromise.allError", err)); // this will give "Error"


// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };


// (async function () {
//   const res = await Promise.race(
//     [
//       getJSON(`https://restcountries.com/v2/name/italy`),
//       getJSON(`https://restcountries.com/v2/name/egypt`),
//       getJSON(`https://restcountries.com/v2/name/mexico`)
//     ]
//   )
//   console.log("checkCountries", res[0]); // the fastest response will be the only one result. here it is italy. sometimes it may get change
// })()

// ///////// check fast executable example using timeout ///////////

// const timeout = (milliSeconds) => {
//   // if we do not use first argument resolve, then we need to use "_", because function will ignore.
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error('request took too long, try again!'));
//     }, milliSeconds)
//   })
// }

// Promise.race(
//   [
//     getJSON(`https://restcountries.com/v2/name/tanzania`),
//     timeout(1) // here 1 millisecond is not enough to get tanzania data, so it will throw error. if time is enough we will not get error, we will get tanzania data. try it by increaing time to 1000
//   ]
// ).then(data => console.log("checkTimeOutData", data[0])).catch(err => console.log("checkTimeOutError", err));



// // the above will print Error, because promise.all would reject entire promises, if one is failed

/////////// Promise.race  /////////////////////


/////////// Promise.allSettled  ///////////////////

// // Promise.allSettled is receive an array of promises and it also return a promise. It will return an array of all the setteled promises. setteled means any value available does not matter if promise got fullfilled or rejected. it simply return all the results of all the promises.

// Promise.allSettled(
//     [
//         Promise.resolve('Success'),
//         Promise.reject('Error'),
//         Promise.resolve('Another Success')
//     ]
// ).then(data => console.log(data)).catch(err => console.log(err));
// // output

// // [
// //     {
// //         "status": "fulfilled",
// //         "value": "Success"
// //     },
// //     {
// //         "status": "rejected",
// //         "reason": "Error"
// //     },
// //     {
// //         "status": "fulfilled",
// //         "value": "Another Success"
// //     }
// // ]

/////////// Promise.allSettled  ///////////////////

///////////////// Promise.any  ///////////////////

// // Promise.any is receive an array of promises and it also return a promise. but it return first fullfilled promise and ignore rejected promise

// Promise.any(
//     [
//         Promise.reject('Error'),
//         Promise.resolve('Success'),
//         Promise.resolve('Another Success')
//     ]
// ).then(data => console.log(data)).catch(err => console.log(err)); // Success

///////////////// Promise.any  ///////////////////


/////////// coding challange 3 /////////////////////

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

/////////// solution /////////////////////


// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// // part 1
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2); // wait does not have any resultant value, so we do not need to assign it to any variable
//     img.style.display = 'none';

//     // Load image 2
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';

//   } catch (err) {
//     console.log(err)
//   }
// }

// // loadNPause()

// // part 2
// const loadAll = async function (imgArr) {
//   try {
//     const imgs = imgArr.map(async (img) => await createImage(img));
//     //  console.log(imgs);
//     const imgEl = await Promise.all(imgs);
//     // console.log(imgEl)
//     imgEl.forEach(img => img.classList.add('parallel'));
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

/////////// coding challange 3 /////////////////////