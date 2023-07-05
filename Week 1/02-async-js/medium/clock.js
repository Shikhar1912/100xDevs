setInterval(function (){
    console.clear();
    const date = new Date();
    console.log(date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }));
    console.log(date.toTimeString().replace(/\sGMT.*/, ""));
}, 1000);


