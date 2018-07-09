// node myFile.js
// write up the entire lifecycle of a node application


const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

//New timers, tasks, operations are records from myFile running
//symbolically indicates the execution of node
myFile.runContents();

function shouldContinue(){
    //Check one: Any pending setTimenout, setInterval, setImmediate?
    //Check two: Any pending OS tasks? (like server listening to port)
    //Check three: Any pending long running operations? (like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

//run the event loop. This is a pseudo code for an event loop
//Entire body executes in one 'tick'
while(shouldContinue()) {
    // 1. Node looks at pendingTimers and sees if any functions are ready to be called. setTimenout setInterval

    //2. Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

    //3. Pause execution. Continue when ...
      // - a new pendingOSTasks is shouldContinue
      // - a new pendingOperations is done
      // - a timer is about to complete

    //4. Look at pendingTimers. Call any setImmediates

    //5. Handles any 'close' events
}

//exit back to terminal
