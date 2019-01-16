var friendData = require ("../data/friends");

//Routing

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        console.log("here is everybody!")
      });
    
    app.post("/api/friends", function(req, res) {
        var newPerson = req.body;
        friendData.push(newPerson); 
        console.log("new person is in API")     
      });
};