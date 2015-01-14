var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log('in getConfig with ts:' + Date.now());
  var cfg = require("config.js");
  return callback(null, {data: cfg.config});
};

exports.timestamp = function( params, callback ) {
  var now = getTime() ;
  return callback( null, {timestamp: now }) ;
};

exports.db = function (params,callback){
  var options = {
  "act": "create",
  "type": "myFirstEntity", // Entity/Collection name
  "fields": { // The structure of the entry/row data. A data is analogous to "Row" in MySql or "Documents" in MongoDB
    "firstName": "Joe",
    "lastName": "Bloggs",
    "address1": "22 Blogger Lane",
    "address2": "Bloggsville",
    "country": "Bloggland",
    "phone": "555-123456"
  }
};
$fh.db(options, function (err, data) {
  if (err) {
    console.error("Error " + err);
  } else {
    console.log(JSON.stringify(data));
    /*
       The output will be something similar to this
       {
        "fields": {
          "address1": "22 Blogger Lane",
          "address2": "Bloggsville",
          "country": "Bloggland",
          "fistName": "Joe",
          "lastName": "Bloggs",
          "phone": "555-123456"
        },
        "guid": "4e563ea44fe8e7fc19000002", // unique id for this data entry
        "type": "myFirstEntity"
      }
    */
  }
});

};
