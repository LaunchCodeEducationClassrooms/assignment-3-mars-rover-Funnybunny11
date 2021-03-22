class Rover {
   constructor(position, mode='Normal', generatorWatts=110){
     this.position = position;
     if(!position){
       throw Error("Position number is required.");
     }
     this.mode = mode;
     this.generatorWatts = generatorWatts
     this.message = message;
     if(!message){
       throw Error('Message name required.');
     }
   }
   receivesMessage(message){ 
     
     let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    message = new Message('Test message with two commands', commands);
  let rover = new Rover(98382);    
  let response = rover.receiveMessage(message);


console.log(response)
console.log('STATUS_CHECK')    
console.log('MODE_CHANGE')
console.log('LOW_POWER', position)
console.log('Move', Rover.position)     
     }
    
     
    
    
}



module.exports = Rover;