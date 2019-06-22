

// Set input character encoding.
process.stdin.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
process.stdin.on('data', function (data) {

    // User input exit.
    if(data === 'x\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    }else
    {
        // Print user input in console.
        console.log('User Input Data : ' + data * 5);
    }
});