const fs = require('fs');
const program = require('commander');
const Log = require('./xnb/log');
const Xnb = require('./xnb/xnb');

// turn on debug printing
Log.DEBUG = true;

// local variables for input and output to check if they were set later
let inputValue;
let outputValue;

// create the program and set version number
program.version('0.0.1');

// XNB unpack command
program
    .command('unpack <input> [output]')
    .description('Used to unpack XNB files.')
    .action((input, output) => {
        // create new instance of XNB
        let xnb = new Xnb();
        // load the XNB and get the object from it
        let result = xnb.load(input);
        // save the result into a file
        fs.writeFileSync('/Users/LeonBlade/Desktop/test.json', JSON.stringify(result, null, 4));
    });

// XNB pack Command
program
    .command('pack <input> [output]')
    .description('Used to pack XNB files.')
    .action((input, output) => {
        // TODO: add functionality to pack XNB files
    });

// default action
program.action(() => program.help());

// parse the input and run the commander program
program.parse(process.argv);

// show help if we didn't specify any valid input
if (!process.argv.slice(2).length) {
    //program.help();
    let xnb = new Xnb();
    xnb.load('test/Farm.xnb');
}

// TODO: process input/output into the XNB tool
