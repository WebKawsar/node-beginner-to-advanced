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

// const grabValue = (key) => {

//     const index = process.argv.indexOf(key);
//     return index !== -1 ? process.argv[index + 1] : null

// }

// const firstName = grabValue("--first")
// const lastName = grabValue("--last")
// if(!firstName || !lastName){
//     console.log("Please provide necessary info");
// }else {
//     console.log(`Your are ${firstName} ${lastName}`);
// }

// console.log("Hello");
// console.log("World");

// process.stdout.write("Kawsar \n")
// process.stdout.write("Ahmed")





// Danger Zone

// process.stdin.on("data", text => {

//     console.log(text.toString());
//     if(text.toString().trim().toLowerCase() === "exit"){
//         process.exit();
//     }
    
// })

// process.on("exit", () => {
//     console.log("You are exiting app");
// })



// const questions = ["What's your name?", "What's your Profession?"]
// const answers = [];

// process.stdout.write(questions[0]);
// process.stdin.on("data", (text) => {

//     // console.log(text.toString());
//     answers.push(text.toString().trim())
//     if(answers.length < questions.length){
//         process.stdout.write(questions[answers.length])
//     }else {
//         process.exit();
//     }

// })

// process.on("exit", () => {
    
//     for (let i = 0; i < answers.length; i++) {
//         const element = answers[i];
//         console.log(element);
//     }
//     console.log("You are exiting app");
// })


// const readline = require("readline");
// const rl = readline.createInterface(process.stdin, process.stdout);

// const questions = ["What's your name?", "What's your Profession?"]
// const answers = [];
// rl.question(questions[0], data => {

//     answers.push(data.toString().trim())
//     if(answers.length < questions.length){

//         rl.setPrompt(questions[answers.length]);
//         rl.prompt();
//         rl.on("line", data => {
            
//             if(data.toLowerCase().trim() === "exit"){
//                 rl.close()
//                 return
//             }
//             rl.setPrompt("If you want to say please write?");
//             rl.prompt();
//             answers.push(data.trim().toString())
//         })
//     }
    
// })

// rl.on("close", () => {
//     console.log(`You are exit. your ans is ${answers}`);
// })

// rl.question('What is your favorite food? ', (answer) => {
//     console.log(`Oh, so your favorite food is ${answer}`);
// });


const EventEmitter = require("events").EventEmitter;
const myEvents = new EventEmitter();

// function greetings(){

//     myEvents.on("greet", (data) => {
//         console.log(data);
//     })
//     console.log("Listening to event greet");
// }
// greetings();
// myEvents.emit("greet", "Kawsar Ahmed")


// class Greetings extends EventEmitter {
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     greet(){
//         this.on("greet", data => {

//             console.log(`${this.name} ${data}`);
//         })
//     }
// }

// const myGreetings = new Greetings("Kawsar");
// myGreetings.greet();
// myGreetings.emit("greet", "Hi")

const fs = require("fs");
const myPath  = path.join(__dirname, "Folders", "sample.txt");

// if(fs.existsSync(myPath)){

//     fs.appendFile(myPath, " Again", () => {
//         console.log("File updated successfully");
//     })
// }else {
//     fs.writeFile(myPath, "Hello World", () => {
//         console.log("File created successfully");
//     })
// }

// const myDirPath = path.join(__dirname, "Filles", "sample.txt")
// if(fs.existsSync(myDirPath)){
//     fs.unlink(myDirPath, () => {
//         console.log("File Deleted successfully");
//     })
// }else{
//     console.log("File already removed");
// }

// const newPath = path.join(__dirname, "Filles", "sample.txt");
// fs.rename(myPath, newPath, () => {

//     console.log("File is renamed successfully");
// })

// const myDir = path.join(__dirname, "Folders")
// fs.mkdir(myDir, {}, () => {

//     console.log("Directory is created");
// })

// if(!fs.existsSync(myDir)){

//     fs.mkdir(myDir, {}, () => {

//         fs.writeFile(myPath, "Hello World", () => {
//             console.log("File created successfully");
//         })
//     })


// }else{

//     fs.appendFile(myPath, " Again", () => {
//         console.log("File exists so updated text");
//     })
// }



// fs.readdir(myDir, "utf-8", (error, filles) => {
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     for (const file of filles) {
//         fs.unlink(myPath, (error) => {
//             console.log("file removed");
//         })

//     }
//     fs.rmdir(myDir, (err) => {

//         if(err){
//             console.log(err.message);
//             return;
//         }
//         console.log("Directory is removed");
//     })
// })


// fs.readFile(myPath, "utf-8", (error, data) => {
//     if(error){
//         console.log(error.message);
//         return;
//     }
//     console.log(data);
// })

const stream = fs.createReadStream(myPath);
const writableStream = fs.createWriteStream(path.join(__dirname, "Folders", "test.txt"))
stream.once("data", () => {
    console.log("Startting in first");
})
stream.on("data", (data) => {
    writableStream.write(data)
    console.log(data.toString());
})




