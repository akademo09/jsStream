var i = 0;
var idValue;
//var idValue;
addEventListener("message", (message) => {
    if (message.data.command === "stream") {
      idValue = message.data.idValue
        console.log(`Filename ${message.data.filename}`);
        timedCount();
        //idValue = message.data.id;
    }
  });

function timedCount() {
  i = i + 1;
  postMessage({value : i, idValue : idValue});
  setTimeout("timedCount()",500);

  // Use FileReader to get chunks and pass to server.
}

//timedCount(); 