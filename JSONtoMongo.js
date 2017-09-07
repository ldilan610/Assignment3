'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    listingsJSON = require('./listings'),
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var i = 0; i < listingsJSON.entries.length; i++) {
    var newListing = Listing({
        code: listingsJSON.entries[i].code,
        name: listingsJSON.entries[i].name,
        coordinates: listingsJSON.entries[i].coordinates,
        address: listingsJSON.entries[i].address
    });
    newListing.save(function(err){
        if (err) throw err;
    });
}



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */