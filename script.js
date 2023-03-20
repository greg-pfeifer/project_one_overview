


// Base URL - the part of the URL that won't change

// Question mark "?" precedes the FIRST query parameter.
// Ampersand "&" precedes ALL FOLLOWING parameters


var baseURL = 'https://api.openweathermap.org/data/2.5'
var apiKey = 'c99d36592ac7f6c76c8592278329bdfb'
// var url = baseURL + '/weather?appid=' + apiKey
// var locale = url + '&lat=39.890947&lon=-75.072950' 
var url = baseURL + '/weather?appid=' + apiKey


// Generate the latitude/longitude within the browser

function getLocation(){
    navigator.geolocation.getCurrentPosition(function(locationData){
        console.log(locationData);
    $.get(url + '&lat=' + locationData.coords.latitude + '&lon=' + locationData.coords.longitude).
    then(function(data){
        console.log(data)
});
    })
}

getLocation()

function getWeatherByCity () {
    $.get(url + '&q=audubon').then(function (data) {
        console.log(data)
    })
}

getWeatherByCity ()




console.log(url)

// Make a request to Open Weather Map API - this gets data from a server-side API


// Show the data on the page

// Once the info is received, THEN the data is passed into the function (the function is a callback - "call me when it's ready"). THEN is an asynchronous action

// The "?" is a parameter for the URL - "the URL is listening, now what?"


// $.get(locale).then(function(data){
//     console.log(data)
// });



// Get method returns a promise object - think of promise as an object (see var below) with then and catch as key-value pairs. Catch will catch all errors if info wasn't requested properly

var promise = {
    then: function(){

    },
    catch: function() {

    },
}





// If we CALL someFunc, what will line 42 become?
// The function call BECOMES the OBJECT - the function call IS the returned value

// function someFunc() {
//     return {
//         then: function() {

//         },
//         catch: function() {

//         },
//     }
// }

// someFunc()

// Note that a function returns "undefined" by default UNLESS we use the RETURN keyword - if the RETURN keyword is used, the return is now defined as something