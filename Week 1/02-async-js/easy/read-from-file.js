const fs = require('fs');

fs.readFile("3-read-from-file.md", "utf8", (error, fileContents) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }
    console.log(fileContents);
  // Do something with the file contents
});

let sum = 0;
for (let i = 0; i < 10000000000; i++){
    sum += i;
}