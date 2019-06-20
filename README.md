# Angular 5 - SCB Assignment

### From your assignment

Develop a reusable component that display email inbox. This component requests data from a configured endpoint and display as a scrollable list. The data format returned by the endpoint defined as an example below. Please create your component using the visual design as provided in the attached 2 screenshots with the font from https://fonts.google.com/specimen/Roboto

##### Visual Design
[![visual-design-screen-1](https://github.com/jiratp/scb_assignment/blob/master/readme/assignment/screen-1.png)](https://github.com/jiratp/scb_assignment/blob/master/readme/assignment/screen-1.png)
Screen 1

[![visual-design-screen-2](https://github.com/jiratp/scb_assignment/blob/master/readme/assignment/screen-2.png)](https://github.com/jiratp/scb_assignment/blob/master/readme/assignment/screen-2.png)
Screen 2


## My solution from your assignment
## [LIVE DEMO](https://affilnost.github.io/angular5-example-shopping-app/)

## Description
The app provides the look and feels is as close to the visual design

1) The app can filter email list by datetime
    - sort by desc,acs
2) The app support infinite scroll
    - Emails will be dated for 2 months from the current date  
    - Each email item will be different for 1 hours.
    - Can handle large list with good performance
3) The app support mobile device events such as tap, press, etc.
4) The app can choose an email item with press event 2 seconds.
5) The app can read an email item with double tab event 2 times.
6) The app support responsive design
7) The app support handle data error and empty data


## Environment installation
You need to have `Node.js` and `npm` installed on your PC/Mac.

Then just run `npm install` in the project's root.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
