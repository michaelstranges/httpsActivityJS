module.exports = function getHTML(options, callback){
  var https = require("https");

  https.get(options, function(response){

    var myBuffer = "";

    response.setEncoding("utf8");

    response.on("data", function(data){
      console.log("Got Chunk:", data.length);
      myBuffer = myBuffer + data;

      callback(myBuffer);

    })
  })
}