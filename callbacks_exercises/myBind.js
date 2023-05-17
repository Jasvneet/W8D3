
Function.prototype.myBind = function (context) {
    return () => this.apply(context);
}

class Lamp {
    constructor(name) {
      this.name = name;
      
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp("lamp");

  const bed = new Lamp("bed");
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(bed)
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"