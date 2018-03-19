var https = require("https");

function getAndPrintHTML(){


  var requestOptions = {
    host: "syntantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, function(response){

    var myBuffer = "";

    response.setEncoding("utf8");

    response.on("data", function(data){
      console.log("Got Chunk:", data.length);
      myBuffer = myBuffer + data;
      console.log(myBuffer)
    });
  });
};

console.log(getAndPrintHTML());