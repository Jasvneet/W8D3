const readline = require("readline");
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askIfGreaterThan = function(el1,el2,callback) {

    rl.question(`is ${el1} greater than ${el2}?`, answer => answer === 'yes' ? callback(true) : callback(false));
}

const innerBubbleSortLoop = function(arr,i,madeAnySwaps,outerBubbleSortLoop){
    if (i < arr.length-1){
        askIfGreaterThan(arr[i],arr[i+1],function(isgreaterthan) { 
            if (isgreaterthan) {
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                madeAnySwaps = true; 
            }
            innerBubbleSortLoop(arr,i+1,madeAnySwaps, outerBubbleSortLoop);
        });
    }

    if (i === (arr.length-1)) {
        console.log(arr);
        outerBubbleSortLoop(madeAnySwaps);
    }
};


const absurdBubbleSort = function(arr,sortCompletionCallback){
    const outerBubbleSortLoop = function(madeanyswaps) {
        if (madeanyswaps) {
            innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(true);

};

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    rl.close();
  });