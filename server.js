var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//routing
require("./app/routing/apiRouters")(app);
require("./app/routing/htmlRouters")(app);


//listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  