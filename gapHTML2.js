var https = require("https");

function getAndPrintHTML(options){

  https.get(options, function(response){

    var myBuffer = "";

    response.setEncoding("utf8");

    response.on("data", function(data){
      console.log("Got Chunk:", data.length);
      myBuffer = myBuffer + data;
      console.log(myBuffer)

    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);