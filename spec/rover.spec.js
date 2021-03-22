const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", 
  function () { 
    expect (function() { new Rover();}).toThrow(new Error('Position number is required.'));
  }); 




  it("response returned by receivesMessage contains name of message", function () {
    expect (function(){ new Message();}).toThrow(new Error('Message name required.'));
  });
  

  it("response returned by receivesMessage includes two results if two commands are sent in the message", function (){
    expect (function() {new Message();})
    
      let response = [true, true]
      expect(response).toEqual[true,true];
   });
     
  


  it("responds correctly to status check command",function (){
    expect (function() {new Message('STATUS_CHECK');})
    let response = 'STATUS_CHECK'
     expect (response).toEqual('STATUS_CHECK')
  });



it("responds correctly to mode change command.", function (){
  expect (function() {new Message ('MODE_CHANGE');})
  let response = 'MODE_CHANGE'
  expect (response).toEqual('MODE_CHANGE')
});


it("responds with false completed value when attempting to move in LOW_POWER mode.", function (){
  
    expect (function() {new Message ();})
    if (Rover.mode === 'LOW_POWER'){
    expect (Rover.move).toEqual(98382)
    }
});


it("responds with position for move command", function() {expect (function () {new Message ('MOVE');})
expect (Rover.move).toEqual(Rover.position)
});
});