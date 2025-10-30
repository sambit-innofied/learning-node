const fs = require("fs");

// fs.writeFileSync("./test.txt", "hey there");

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

fs.appendFileSync("./test.txt", `hey there\n`)

//delete file 
// fs.unlinkSync("./contact.txt")

//check if it is a file
console.log(fs.statSync("./test.txt").isFile());
  