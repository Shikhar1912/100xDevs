const fs = require("fs");

const content = "This is the content to be written to the file bppp.";

fs.writeFile("write-to-file.md", content, "utf8", (error) => {
  if (error) {
    console.error("Error writing file:", error);
    return;
  }

  console.log("File has been written successfully.");
});
