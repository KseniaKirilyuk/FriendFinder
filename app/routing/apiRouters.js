var friendData = require ("../data/friends");

//Routing

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
        console.log("here is everybody!")
      });
    
    app.post("/api/friends", function(req, res) {
        var newPerson = req.body;
        var newScores = newPerson.scores;
        var diff;

        var match = {
            name: "",
            photo: "",
            friendDifference: Infinity
          };
        
          for (var i = 0; i < friendData.length; i++) {
            var dataFriend = friendData[i];
            diff= 0;
      
            console.log(dataFriend.name);
      
            for (var j = 0; j < dataFriend.scores.length; j++) {
              var dataFriendScores = dataFriend.scores[j];
              var userScores = newScores[j];
      
              diff += Math.abs(parseInt(userScores) - parseInt(dataFriendScores));
            }
      
            if (diff <= match.friendDifference) {
              match.name = dataFriend.name;
              match.photo = dataFriend.photo;
              match.friendDifference = diff;
            }
          }
      
        friendData.push(newPerson); 
        console.log("new person is in API")    
        res.json(match);
        
      });
};