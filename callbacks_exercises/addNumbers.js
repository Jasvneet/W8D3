const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question(`Enter a num (You have ${numsLeft} numbers left.)`, function (str) {
            const parsed = parseInt(str);
            sum += parsed;
            console.log(sum);

            addNumbers(sum, numsLeft -1, completionCallback);

        });
    }
    else {
        completionCallback(sum)
    }

    
    };

    addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));