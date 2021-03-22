const Flight = require('../models/flight');


module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        //We can push subdocs into mongoose arrays
        flight.arrivals.push(req.body);
        //Must save the movie docs, dont call save on the reviews because 
        //you pushed it into the movies array so you save the movie doc.
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });

}