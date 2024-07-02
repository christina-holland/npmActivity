//Task 6 - Import the 'moment' modules in your application
const moment = require('moment');

//Task 7 - Use 'moment' to output the timestamp for when the response arrives using the format h:mm:ss a
const currentTime = moment().format('h:mm:ss a');
console.log('Current time:', currentTime);