var path = require("path");

//routing
module.exports = function(app) {
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    
}

