const passport = require('passport');
const local = require('./loacal');

module.exports = () => {
   passport.serializeUser(() => {

   });

   passport.deserializeUser(() => {

   });

   local();
}