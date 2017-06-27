# Redux Weather App

This is a repo for tracking my steps in the Modern React with Redux Udemy course by Stephen Grider. For this excersize I am going to create a weather app that has a search function for the location and when a location is chosen some weather data is taken from a weather API & showed on my page including some nice graphs used from a third party.

## Current state
Just getting started :-)

## ScreenShots
- Screenshot of the React-Redux app
![Screenshot](https://github.com/Winkeltje84/ReduxWeatherApp/blob/master/src/images/Screenshot.png)

## Applying new functionalities
I am learning some new things by following this course. A little summary:

- Axios: Promise based HTTP client for the browser and node.js.

This is used to create an Ajax request within an action like this: const request = axios.get(url);
The url is one customly created depending on the user input in the searchBar while the 'request' constant will be used as a payload so the weather data will be returned by the API.
https://www.npmjs.com/package/axios

- Redux Promise: FSA-compliant promise middleware for Redux.

To handle Redux promises for us. I believe this will make the use of Axios easier for me... but I have to dive deeper into this...
https://www.npmjs.com/package/redux-promise

- React Sparklines: Beautiful and expressive sparklines component for React

Using this component to show graphs easily.
https://github.com/borisyankov/react-sparklines

- GoogleMaps

Because <script src="https://maps.googleapis.com/maps/api/js"></script> has been added to the main index.html we can use "new google.maps.Map" in google_maps.js to create an embedded google map.

See Google Maps APIs documentation:
https://developers.google.com/maps/documentation/javascript/tutorial

## Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:
```
> git clone git@github.com:Winkeltje84/ReduxWeatherApp.git ReduxWeatherApp
> cd ReaduxWeatherApp
> npm install
> npm start

Go to your [localhost](http://localhost:8080) on port 8080(default)
```
