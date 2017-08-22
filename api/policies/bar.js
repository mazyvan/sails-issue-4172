/**
 * Bar
 *
 * @description :: Policy bar that always returns badRequest
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Policies
 */

module.exports = function (req, res, next) {

  sails.log.info('[Policy Bar] Before returning badRequest()');  
  return res.badRequest()
  sails.log.info('[Policy Bar] After returning badRequest()');
  return next()
}