/**
 * FooController
 *
 * @description :: Server-side logic for managing foos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  find: (req, res) => {
    sails.log.info('[FooController] Before returning res.send()'); 
    return res.send('[Controller] Sensitive information')
  }

};

