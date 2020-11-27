const os = require("os");

// console.log(os.freemem());
// console.log(os.userInfo())
// console.log(os.platform());

// console.log(__filename);

const path = require("path");

// console.log(path.basename(__filename)); // return filename

// console.log(path.join(__dirname, "", "test.js"));
// console.log(path.normalize("////patgh/test.html"));

// console.log(process.argv);

const grabValue = (key) => {

    const index = process.argv.indexOf(key);
    return index !== -1 ? process.argv[index + 1] : null

}

const firstName = grabValue("--first")
const lastName = grabValue("--last")
if(!firstName || !lastName){
    console.log("Please provide necessary info");
}else {
    console.log(`Your are ${firstName} ${lastName}`);
}



