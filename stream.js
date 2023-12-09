var i = 0;

addEventListener("message", (message) => {
    if (message.data.command === "stream") {
        console.log(`Filename ${message.data.filename}`);
        timedCount(message.data.filename);
    }
  });

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

//timedCount(); 