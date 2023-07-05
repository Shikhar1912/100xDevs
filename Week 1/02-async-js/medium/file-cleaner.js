// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs");
let content = "";

fs.readFile("1-file-cleaner.md", "utf8", (error, fileContents) => {
  if (error) {
    console.error("Error reading file:", error);
    return;
  }
    content = fileContents;

  // Do something with the file contents
    content = content.replace(/\s+/g, " ").trim();

    console.log(content);
});






