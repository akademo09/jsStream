var i = 0;
var idValue;
var filenameValue;
//var idValue;
addEventListener("message", (message) => {
    if (message.data.command === "stream") {
      idValue = message.data.idValue
      filenameValue = message.data.filename;
        console.log(`Filename ${message.data.filename}`);
        timedCount();
        //idValue = message.data.id;
    }
  });

function timedCount() {
  i = i + 1;
  postMessage({value : i, idValue : idValue, filenameValue : filenameValue});
  setTimeout("timedCount()", 1000);

  // Use FileReader to get chunks and pass to server.
}

//timedCount(); 